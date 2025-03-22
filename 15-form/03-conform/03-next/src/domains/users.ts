"use server";

import { v4 as uuidv4 } from "uuid";
import type { User } from "@/domains/types.ts";

const users: User[] = [];

export async function addUser(user: Omit<User, "id">) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  users.push({ id: uuidv4(), ...user });
  console.log(users);
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function getUsers() {
  return users;
}

export async function isEmailUnique(email: string) {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return !users.find((user) => user?.email === email);
}
