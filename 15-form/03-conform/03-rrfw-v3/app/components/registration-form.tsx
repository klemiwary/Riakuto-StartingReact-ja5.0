import { Form, useNavigation } from "react-router";
import {
  getInputProps,
  type SubmissionResult,
  useForm,
} from "@conform-to/react";
import { useControl } from "@conform-to/react/future";
import { parseWithZod } from "@conform-to/zod";
import { Field, FieldError } from "~/components/field.tsx";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Checkbox,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/index.ts";
import { genderOptions, userRegisterSchema } from "~/entities/user/index.ts";

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
  const agreeControl = useControl({
    defaultChecked: fields.isAgreed.defaultChecked,
  });
  const genderControl = useControl({
    defaultValue: fields.gender.defaultValue,
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
          <Field>
            <Label className="mb-1 block">性別</Label>
            <select
              name={fields.gender.name}
              ref={genderControl.register}
              hidden
            />
            <Select
              value={genderControl.value}
              onValueChange={(value) => genderControl.change(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(genderOptions).map(([code, name]) => (
                  <SelectItem value={code} key={code}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fields.gender.errors && (
              <FieldError>{fields.gender.errors}</FieldError>
            )}
          </Field>
          <Field className="flex items-center gap-3">
            <input
              type="checkbox"
              name={fields.isAgreed.name}
              ref={agreeControl.register}
              hidden
            />
            <div className="flex items-center justify-center gap-2">
              <Checkbox
                id={fields.isAgreed.id}
                checked={agreeControl.checked}
                onCheckedChange={(checked) => agreeControl.change(checked)}
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
            {isPending ? "送信中…" : "送信"}
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
