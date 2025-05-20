import type { Intent } from "@conform-to/react";
import { conformZodMessage } from "@conform-to/zod/v4";
import { z } from "zod/v4";
import { type GenderCode, genderOptions } from "~/entities/types.ts";

export const userRegisterSchema = z.object({
  username: z.string({ error: "必須項目です" }),
  zipcode: z
    .string()
    .regex(/^\d{3}-?\d{4}$/, { error: "半角数字7桁で入力してください" })
    .optional(),
  gender: z
    .enum(Object.keys(genderOptions) as [GenderCode], {
      error: "無効な選択です",
    })
    .optional(),
  isAgreed: z.boolean({ error: "同意が必要です" }),
});

export function createRegisterSchema(
  intent: Intent | null,
  options?: {
    isEmailUnique: (email: string) => Promise<boolean>;
  },
) {
  return userRegisterSchema.extend({
    email: z
      .email({
        error: (issue) =>
          issue.input
            ? "メールアドレスの形式が正しくありません"
            : "必須項目です",
      })
      .transform((email, ctx) => {
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
