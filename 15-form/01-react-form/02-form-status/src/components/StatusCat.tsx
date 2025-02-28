import { useFormStatus } from "react-dom";

export default function StatusCat() {
  const status = useFormStatus();
  // const { pending } = useFormStatus();
  console.log(status);
  console.log(status.data?.get("username"));

  return (
    <div className="mb-6 flex justify-center text-5xl">
      {/* {pending ? ( */}
      {status.pending ? (
        <div className="h-10 w-10 animate-spin">😸</div>
      ) : (
        <div className="h-10 w-10">😺</div>
      )}
    </div>
  );
}
