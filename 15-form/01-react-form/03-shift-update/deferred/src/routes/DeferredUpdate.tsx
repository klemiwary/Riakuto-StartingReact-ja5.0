import { useDeferredValue, useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import UserList from "@/components/UserList.tsx";

interface DeferredUpdateProps {
  count?: number;
}

export default function DeferredUpdate({ count = 1 }: DeferredUpdateProps) {
  const [username, setUsername] = useState("");
  const deferredUsername = useDeferredValue(username);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-80 p-3">
        <Label htmlFor="username" className="my-3 block">
          ユーザー名を入力してください
        </Label>
        <Input
          name="username"
          maxLength={18}
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <UserList username={deferredUsername} count={count} />
    </div>
  );
}
