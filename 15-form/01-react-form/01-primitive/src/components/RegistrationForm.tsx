import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

const genderOption = { m: "男性", f: "女性", n: "それ以外" } as const;

interface FormData {
  username: string;
  zipcode?: string;
  gender?: keyof typeof genderOption;
  isAgreed: boolean;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    isAgreed: false,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const value = event.target.value;
    setFormData((state) => ({ ...state, [name]: value }));
  }

  return (
    <Card className="w-md max-w-md p-5 shadow-md">
      <CardContent className="px-1 py-2">
        <form onSubmit={handleSubmit}>
          <Label className="mb-2 block">ユーザー名（必須）</Label>
          <Input
            name="username"
            value={formData.username}
            onChange={handleInput}
            className="mb-4 w-full"
          />
          <Label className="mb-2 block">郵便番号</Label>
          <Input
            name="zipcode"
            maxLength={7}
            value={formData.zipcode ?? ""}
            onChange={handleInput}
            className="mb-4 w-full"
          />
          <Label className="mb-2 block">性別</Label>
          <div className="mb-6 w-full">
            <Select
              value={formData.gender}
              onValueChange={(value) => {
                const gender =
                  value in genderOption
                    ? (value as keyof typeof genderOption)
                    : undefined;
                setFormData((state) => ({ ...state, gender }));
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(genderOption).map(([code, name]) => (
                  <SelectItem value={code} key={code}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <Checkbox
              id="isAgreed"
              checked={formData.isAgreed}
              onCheckedChange={(checked) => {
                const isAgreed = checked === "indeterminate" ? false : checked;
                setFormData((state) => ({ ...state, isAgreed }));
              }}
              className="mr-2"
            />
            <Label htmlFor="isAgreed">規約に同意する</Label>
          </div>
          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              className="w-2/3 bg-blue-500 text-white"
              disabled={!(formData.isAgreed && !!formData.username.trim())}
            >
              送信
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
