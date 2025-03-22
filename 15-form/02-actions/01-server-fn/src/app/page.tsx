import MessageForm from "@/components/message-form.tsx";
// import MessageForm from "@/components/message-form.client.tsx";
import MessageList from "@/components/message-list.tsx";
import { getMessages } from "@/server/message-fn.ts";

export default async function Home() {
  const messages = await getMessages();

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <div className="grid gap-8">
        <MessageForm />
        <MessageList messages={messages} />
      </div>
    </div>
  );
}
