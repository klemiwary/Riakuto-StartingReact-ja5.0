import MessageForm from "@/components/message-form.tsx";
import MessageList from "@/components/message-list.tsx";

export default function Home() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <div className="grid gap-8">
        <MessageForm />
        <MessageList />
        {/* <MessageList /> */}
      </div>
    </main>
  );
}
