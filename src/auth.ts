import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login as loginFn } from "@/services";
import { ZodError } from "zod";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        login: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log("credentials", credentials);

        const user = {
          login: "maksim@maksi.ru",
          password: "12345",
        } as User;
        return user;
      },
    }),
  ],
  pages: {},
  callbacks: {
    session: async ({ session }) => {
      console.log("session", session);
      return session;
    },
    authorized: async ({ auth }) => {
      console.log("authorized", auth);
      return true;
    },
  },
});
