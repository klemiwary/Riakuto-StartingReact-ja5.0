import type { Intent } from "@conform-to/react";
import { conformZodMessage } from "@conform-to/zod/v4";
import * as z from "zod";
import { genderCodes } from "./constants.ts";

const emailSchema = z.email({
  error: (issue) =>
    issue.input ? "メールアドレスの形式が正しくありません" : "必須項目です",
});

export const userSchema = z.object({
  id: z.uuid(),
  username: z.string("必須項目です"),
  zipcode: z
    .string()
    .regex(/^\d{3}-?\d{4}$/, "半角数字7桁で入力してください")
    .optional(),
  gender: z.enum(genderCodes, "無効な選択です").optional(),
  email: emailSchema.optional(),
});

export const userRegisterSchema = userSchema.omit({ id: true }).extend({
  isAgreed: z.boolean("同意が必要です"),
});

export function createRegisterSchema(
  intent: Intent | null,
  options?: {
    isEmailUnique: (email: string) => Promise<boolean>;
  },
) {
  return userRegisterSchema.extend({
    email: emailSchema.transform((email, ctx) => {
      const isValidatingEmail =
        intent === null ||
        (intent.type === "validate" && intent.payload.name === "email");

      if (!isValidatingEmail) {
        ctx.issues.push({
          code: "custom",
          input: email,
          message: conformZodMessage.VALIDATION_SKIPPED,
        });

        return;
      }

      if (typeof options?.isEmailUnique !== "function") {
        ctx.issues.push({
          code: "custom",
          input: email,
          message: conformZodMessage.VALIDATION_UNDEFINED,
          fatal: true,
        });

        return;
      }

      return options.isEmailUnique(email).then((isUnique) => {
        if (!isUnique) {
          ctx.issues.push({
            code: "custom",
            message: "登録済みのメールアドレスです",
            input: email,
          });
        }
      });
    }),
  });
}
