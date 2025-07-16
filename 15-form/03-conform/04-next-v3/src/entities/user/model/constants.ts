import type { GenderCode } from "./types.ts";

export const genderOptions = { m: "男性", f: "女性", n: "それ以外" } as const;
export const genderCodes = Object.keys(genderOptions) as [GenderCode];
