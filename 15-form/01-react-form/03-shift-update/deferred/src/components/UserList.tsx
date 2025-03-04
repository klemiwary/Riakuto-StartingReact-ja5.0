import { memo } from "react";
import clsx from "clsx";
import { UserRound } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar.tsx";
import { Card } from "@/components/ui/card.tsx";
import createUser from "@/lib/create-user.ts";

interface UserListProps {
  username: string;
  count: number;
}

function UserList({ username, count }: UserListProps) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(count).keys()].map((id) => {
        const user = createUser(id, username);

        return (
          <Card
            key={id}
            className="m-1 flex w-60 items-center gap-1 border p-4 pb-3"
          >
            <Avatar className="mb-3 h-12 w-12">
              <AvatarFallback
                className={clsx("text-white", `bg-${user.color}-400`)}
              >
                <UserRound className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <p
              className={clsx(
                "text-lg font-bold tracking-wide uppercase",
                `text-${user.color}-400`,
              )}
            >
              {username || "---"}
            </p>
            <p className="text-gray-400">
              # {username ? user.hash : "******************"}
            </p>
          </Card>
        );
      })}
    </div>
  );
}

export default memo(UserList);
