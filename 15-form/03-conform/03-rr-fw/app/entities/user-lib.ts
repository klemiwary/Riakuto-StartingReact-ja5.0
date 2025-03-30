import type { GenderCode, User } from "~/entities/user-type.ts";

export function createUserFromForm(formData: FormData): Omit<User, "id"> {
  const username = (formData.get("username") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim();
  const zipcode =
    (formData.get("zipcode") as string | null)?.replace(/-/g, "") || undefined;
  const gender = (formData.get("gender") as GenderCode | null) || undefined;

  return { username, email, zipcode, gender };
}
