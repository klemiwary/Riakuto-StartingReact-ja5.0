import RegistrationForm from "@/components/registration-form.tsx";

const title = process.env.APP_TITLE;

export default function RegisterPage() {
  return (
    <div className="my-16 flex flex-col items-center gap-12">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <main className="w-full max-w-md">
        <RegistrationForm />
      </main>
    </div>
  );
}
