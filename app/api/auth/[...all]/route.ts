// Route handler for authentication

import { auth } from "@/auth";
import { toNextJsHandler } from "better-auth/next-js";
export const { POST, GET } = toNextJsHandler(auth);
