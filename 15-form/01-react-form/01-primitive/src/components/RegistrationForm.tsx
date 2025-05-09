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

interface RegData {
  username: string;
  zipcode?: string;
  gender?: keyof typeof genderOption;
  isAgreed: boolean;
}

export default function RegistrationForm() {
  const [regData, setRegData] = useState<RegData>({
    username: "",
    isAgreed: false,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(regData);
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const value = event.target.value;
    setRegData((state) => ({ ...state, [name]: value }));
  }

  return (
    <Card className="w-md max-w-md p-5 shadow-md">
      <CardContent className="px-1 py-2">
        <form onSubmit={handleSubmit}>
          <fieldset className="mb-4">
            <Label className="mb-2 block">ユーザー名（必須）</Label>
            <Input
              name="username"
              value={regData.username}
              onChange={handleInput}
              className="w-full"
            />
          </fieldset>
          <fieldset className="mb-4">
            <Label className="mb-2 block">郵便番号</Label>
            <Input
              name="zipcode"
              maxLength={7}
              value={regData.zipcode ?? ""}
              onChange={handleInput}
              className="w-full"
            />
          </fieldset>
          <fieldset className="mb-6">
            <Label className="mb-2 block">性別</Label>
            <Select
              value={regData.gender}
              onValueChange={(value) => {
                const gender =
                  value in genderOption
                    ? (value as keyof typeof genderOption)
                    : undefined;
                setRegData((state) => ({ ...state, gender }));
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
          </fieldset>
          <Label
            htmlFor="isAgreed"
            className="mb-4 flex items-center justify-center"
          >
            <Checkbox
              id="isAgreed"
              checked={regData.isAgreed}
              onCheckedChange={(checked) => {
                const isAgreed = checked === "indeterminate" ? false : checked;
                setRegData((state) => ({ ...state, isAgreed }));
              }}
              className="mr-2"
            />
            <span>規約に同意する</span>
          </Label>
          <fieldset className="flex justify-center pt-2">
            <Button
              type="submit"
              className="w-2/3 bg-blue-500 text-white hover:bg-blue-400"
              disabled={!(regData.isAgreed && !!regData.username.trim())}
            >
              送信
            </Button>
          </fieldset>
        </form>
      </CardContent>
    </Card>
  );
}
