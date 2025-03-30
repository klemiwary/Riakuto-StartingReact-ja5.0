import { Form, useNavigation } from "react-router";
import {
  getInputProps,
  getSelectProps,
  type SubmissionResult,
  useForm,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ChevronDown } from "lucide-react";
import { Field, FieldError } from "~/components/field.tsx";
import { Button } from "~/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "~/components/ui/card.tsx";
import { Input } from "~/components/ui/input.tsx";
import { Label } from "~/components/ui/label.tsx";
import { userRegisterSchema } from "~/entities/user-schema.ts";
import { genderOptions } from "~/entities/user-type.ts";

interface RegistrationFormProps {
  lastResult: SubmissionResult<string[]> | null | undefined;
}

export default function RegistrationForm({
  lastResult,
}: RegistrationFormProps) {
  const [form, fields] = useForm({
    lastResult,
    onValidate: ({ formData }) =>
      parseWithZod(formData, { schema: userRegisterSchema }),
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const navigation = useNavigation();
  const isPending = navigation.state !== "idle";

  return (
    <Card className="w-md max-w-md p-5 shadow-md">
      <Form id={form.id} onSubmit={form.onSubmit} method="post" noValidate>
        <CardContent className="px-1 py-2">
          <Field>
            <Label className="block">ユーザー名（必須）</Label>
            <Input
              {...getInputProps(fields.username, { type: "text" })}
              className="w-full"
            />
            {fields.username.errors && (
              <FieldError>{fields.username.errors}</FieldError>
            )}
          </Field>
          <Field>
            <Label className="block">郵便番号</Label>
            <Input
              {...getInputProps(fields.zipcode, { type: "text" })}
              className="w-full"
            />
            {fields.zipcode.errors && (
              <FieldError>{fields.zipcode.errors}</FieldError>
            )}
          </Field>
          <Field className="relative">
            <Label className="mb-1 block">性別</Label>
            <select
              {...getSelectProps(fields.gender)}
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
            <Label
              htmlFor={fields.isAgreed.id}
              className="flex items-center justify-center gap-2"
            >
              <input
                {...getInputProps(fields.isAgreed, { type: "checkbox" })}
                className="h-4 w-4 cursor-pointer rounded-sm border-gray-300 checked:border-gray-900 checked:bg-gray-900 checked:text-white checked:accent-gray-900"
              />
              <span>規約に同意する</span>
            </Label>
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
            {isPending ? "送信中…" : "送信"}
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
