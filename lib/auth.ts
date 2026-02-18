import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
   
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24,
  },
  advanced: {
    cookies: {
      session_token: {
        name: "authToken",
        attributes: {
          httpOnly: true,
          secure: true,
          sameSite: "Strict",
          maxAge: 30 * 24 * 60 * 60,
        },
      },
    },
  },
});
