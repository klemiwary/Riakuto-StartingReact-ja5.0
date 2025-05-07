import { type RegData } from "@/entities/types.ts";

export async function registerUser(regData: RegData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (isNaN(parseInt(regData.zipcode || ""))) {
    throw new Error("Invalid input");
  }
  console.log(regData);
}
