import { useFormStatus } from "react-dom";

export default function StatusCat() {
  const { pending } = useFormStatus();

  return (
    <div className="mb-6 flex justify-center text-5xl">
      {/* {pending ? ( */}
      {pending ? (
        <div className="h-10 w-10 animate-spin">😸</div>
      ) : (
        <div className="h-10 w-10">😺</div>
      )}
    </div>
  );
}
