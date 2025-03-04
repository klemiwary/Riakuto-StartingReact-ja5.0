import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import UserList from "@/components/UserList.tsx";

interface UrgentUpdateProps {
  count?: number;
}

export default function UrgentUpdate({ count = 1 }: UrgentUpdateProps) {
  const [username, setUsername] = useState("");

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
      <UserList username={username} count={count} />
    </div>
  );
}
