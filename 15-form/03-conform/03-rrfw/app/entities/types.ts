export const genderOptions = { m: "男性", f: "女性", n: "それ以外" } as const;
export type GenderCode = keyof typeof genderOptions;

export interface User {
  id: string;
  username: string;
  email?: string;
  zipcode?: string;
  gender?: GenderCode;
}
