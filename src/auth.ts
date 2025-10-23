import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { login as loginFn } from "@/services";
import { ZodError } from "zod";
import { NextResponse } from "next/server";

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
      authorize: async ({ login, password }) => {
        if (!login || !password) {
          return null;
        }
        const user = {
          login,
          password,
          email: login as string,
        } as User & { email: string };
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: "/auth_error",
    signIn: "/auth_error",
  },
  callbacks: {
    session: async ({ session, user }) => {
      console.log("session>>>", session);
      return session;
    },
    authorized: async ({ auth }) => {
      console.log("authorized>>>", auth);
      return true;
    },
  },
});
