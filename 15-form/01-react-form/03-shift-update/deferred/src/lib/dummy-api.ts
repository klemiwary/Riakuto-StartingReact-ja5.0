import { type FormData } from "@/types/form.ts";

export async function dummyApi(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (parseInt(formData.zipcode || "") === 0) {
    throw new Error("Invalid input");
  }
  console.log(formData);
}
