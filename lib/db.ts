import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();
//globalThis doesnt get effected by hot reload, so it will stop creating a
//new prismaclient connection everytime when there is a hot reload in the development mode.
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
