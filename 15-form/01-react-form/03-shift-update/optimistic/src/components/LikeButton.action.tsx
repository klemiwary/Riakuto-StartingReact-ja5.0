import { useOptimistic, useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";

interface LikeButtonProps {
  initialCount?: number;
}

interface Likes {
  count: number;
  liked: boolean;
}

export default function LikeButton({ initialCount = 0 }: LikeButtonProps) {
  const [likes, setLikes] = useState<Likes>({
    count: initialCount,
    liked: false,
  });

  function renewLikes(prevLikes: Likes) {
    const { count, liked } = prevLikes;

    return liked
      ? { count: count - 1, liked: false }
      : { count: count + 1, liked: true };
  }

  const [optimisticLikes, actOptimisticLike] = useOptimistic(likes, renewLikes);

  async function likeAction() {
    actOptimisticLike(undefined);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (Math.random() > 0.25) {
      setLikes(renewLikes(likes));
      toast("🆗 いいね！が正常に更新されました");
    } else {
      toast("⚠️ いいね！の更新に失敗しました");
    }
  }

  return (
    <form>
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "h-8 gap-1.5 px-3 text-xs transition-all",
          optimisticLikes.liked &&
            "border-pink-200 bg-pink-50 text-pink-500 hover:bg-pink-100 hover:text-pink-600",
        )}
        formAction={likeAction}
      >
        <Heart
          className={cn(
            "h-3.5 w-3.5 transition-all",
            optimisticLikes.liked ? "fill-pink-500 text-pink-500" : "fill-none",
          )}
        />
        {optimisticLikes.count > 0 && (
          <span
            className={cn(
              "font-medium",
              optimisticLikes.liked ? "text-pink-500" : "",
            )}
          >
            {optimisticLikes.count}
          </span>
        )}
      </Button>
    </form>
  );
}
