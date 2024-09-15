import { auth /*currentUser*/ } from "@clerk/nextjs/server";
import { db } from "./db";

export const currentProfile = async () => {
  //   const user = await currentUser(); // it will give the whole user information.
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId,
    },
  });

  return profile;
};
