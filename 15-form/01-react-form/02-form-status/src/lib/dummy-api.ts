import { type RegData } from "@/types/form.ts";

export async function dummyApi(regData: RegData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (parseInt(regData.zipcode || "") === 0) {
    throw new Error("Invalid input");
  }
  console.log(regData);
}
