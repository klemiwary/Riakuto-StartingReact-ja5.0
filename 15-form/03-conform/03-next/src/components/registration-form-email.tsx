"use client";

import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ChevronDown } from "lucide-react";
import { Field, FieldError } from "@/components/field.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { createEmailSchema, UserRegisterSchema } from "@/domains/schema.ts";
import { genderOptions } from "@/domains/types.ts";
import { registerActionWithEmail } from "@/server/actions.ts";

export default function RegistrationForm() {
  const [lastResult, action, isPending] = useActionState(
    registerActionWithEmail,
    undefined,
  );
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: (intent) => UserRegisterSchema.merge(createEmailSchema(intent)),
      });
    },
    shouldValidate: "onSubmit",
  });

  return (
    <Card className="w-md max-w-md p-5 shadow-md">
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <CardContent className="px-1 py-2">
          <Field>
            <Label className="block">ユーザー名（必須）</Label>
            <Input
              name={fields.username.name}
              key={fields.username.key}
              defaultValue={fields.username.initialValue}
              aria-invalid={!fields.username.valid || undefined}
              className="w-full"
            />
            {fields.username.errors && (
              <FieldError>{fields.username.errors}</FieldError>
            )}
          </Field>
          <Field>
            <Label className="block">メールアドレス</Label>
            <Input
              name={fields.email.name}
              key={fields.email.key}
              defaultValue={fields.email.initialValue}
              className="w-full"
            />
            {fields.email.errors && (
              <FieldError>{fields.email.errors}</FieldError>
            )}
          </Field>
          <Field>
            <Label className="block">郵便番号</Label>
            <Input
              name={fields.zipcode.name}
              key={fields.zipcode.key}
              defaultValue={fields.zipcode.initialValue?.toString()}
              aria-invalid={!fields.zipcode.valid || undefined}
              maxLength={8}
              className="w-full"
            />
            {fields.zipcode.errors && (
              <FieldError>{fields.zipcode.errors}</FieldError>
            )}
          </Field>
          <Field className="relative">
            <Label className="mb-1 block">性別</Label>
            <select
              name={fields.gender.name}
              defaultValue={fields.gender.initialValue ?? ""}
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full appearance-none rounded-md border px-2 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="" disabled>
                選択してください
              </option>
              {Object.entries(genderOptions).map(([code, name]) => (
                <option value={code} key={code}>
                  {name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-6 pr-3">
              <ChevronDown className="h-4 w-4 opacity-50" />
            </div>
            {fields.gender.errors && (
              <FieldError>{fields.gender.errors}</FieldError>
            )}
          </Field>
          <Field className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                name={fields.isAgreed.name}
                id={fields.isAgreed.id}
                defaultChecked={fields.isAgreed.initialValue === "on"}
                className="mr-2 h-4 w-4 cursor-pointer rounded-sm border-gray-300 checked:border-gray-900 checked:bg-gray-900 checked:text-white checked:accent-gray-900"
              />
              <Label htmlFor={fields.isAgreed.id}>規約に同意する</Label>
            </div>
            {fields.isAgreed.errors && (
              <FieldError>{fields.isAgreed.errors}</FieldError>
            )}
          </Field>
        </CardContent>
        <CardFooter className="flex justify-center pb-2">
          <Button
            className="w-2/3 bg-blue-500 text-white hover:bg-blue-400"
            disabled={isPending}
          >
            送信
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
