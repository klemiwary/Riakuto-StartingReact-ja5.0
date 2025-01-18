import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  // async prerender() {
  //   return ["/vercel/members", "/remix-run/members"];
  // },
} satisfies Config;
