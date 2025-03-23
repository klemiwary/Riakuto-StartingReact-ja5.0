import { UserRound } from "lucide-react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card.tsx";
import type { GenderCode, User } from "~/domains/types.ts";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  function getColor(genderCode?: GenderCode) {
    const colorList = { m: "sky", f: "rose", n: "amber", u: "gray" };

    return colorList[genderCode ?? "u"];
  }

  return (
    <Card className="w-full min-w-md">
      <CardHeader>
        <CardTitle className="text-center">登録ユーザー</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {users.map((user) => (
          <div className="flex items-center gap-3" key={user.id}>
            <Avatar>
              <AvatarFallback className={`bg-${getColor(user.gender)}-50`}>
                <UserRound className={`text-${getColor(user.gender)}-500`} />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{user.username}</p>
              <p className="text-muted-foreground text-xs">{user.email}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
