export interface Message {
  id: string;
  body: string;
  createdAt: Date;
}

export interface MessageResult {
  status: "succeeded" | "failed";
  error?: string;
}
