import type { Intent } from "@conform-to/react";
import { conformZodMessage } from "@conform-to/zod";
import { z } from "zod";
import { genderCodes } from "./constants.ts";

const emailSchema = z
  .string({ required_error: "必須項目です" })
  .email({ message: "メールアドレスの形式が正しくありません" });

export const userSchema = z.object({
  id: z.string().uuid(),
  username: z.string({ required_error: "必須項目です" }),
  zipcode: z
    .string()
    .regex(/^\d{3}-?\d{4}$/, { message: "半角数字7桁で入力してください" })
    .optional(),
  gender: z.enum(genderCodes, { message: "無効な選択です" }).optional(),
  email: emailSchema.optional(),
});

export const userRegisterSchema = userSchema.omit({ id: true }).extend({
  isAgreed: z.boolean({ required_error: "同意が必要です" }),
});

export function createRegisterSchema(
  intent: Intent | null,
  options?: {
    isEmailUnique: (email: string) => Promise<boolean>;
  },
) {
  return userRegisterSchema.extend({
    email: emailSchema.pipe(
      z.string().superRefine((email, ctx) => {
        const isValidatingEmail =
          intent === null ||
          (intent.type === "validate" && intent.payload.name === "email");

        if (!isValidatingEmail) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: conformZodMessage.VALIDATION_SKIPPED,
          });

          return;
        }

        if (typeof options?.isEmailUnique !== "function") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: conformZodMessage.VALIDATION_UNDEFINED,
            fatal: true,
          });

          return;
        }

        return options.isEmailUnique(email).then((isUnique) => {
          if (!isUnique) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "登録済みのメールアドレスです",
            });
          }
        });
      }),
    ),
  });
}
