import type { z } from "zod";
import { type genderOptions } from "./constants.ts";
import type { userSchema } from "./schema.ts";

export type GenderCode = keyof typeof genderOptions;
export type User = z.infer<typeof userSchema>;
