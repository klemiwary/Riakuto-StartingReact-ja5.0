import MessageForm from "~/components/message-form.tsx";
// import MessageForm from "~/components/message-form.fetcher.tsx";
import MessageList from "~/components/message-list.tsx";
import { addMessage, getMessages } from "~/entities/message-service.ts";
import type { Route } from "./+types/home";

export async function loader() {
  const messages = await getMessages();

  return { messages };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const value = formData.get("body");
  const body = typeof value === "string" ? value.trim() : "";
  let errorMessage = "";

  try {
    await addMessage(body);
  } catch (error) {
    errorMessage = (error as Error).message;
  }

  return { errorMessage };
}

export default function Home({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <div className="grid gap-8">
        <MessageForm errorMessage={actionData?.errorMessage} />
        <MessageList messages={loaderData.messages} />
      </div>
    </main>
  );
}
