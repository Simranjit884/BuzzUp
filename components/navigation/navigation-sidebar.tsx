import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="flex h-full w-full flex-col items-center space-y-4 py-3 text-primary dark:bg-[#1E1F22]">
      Navigation Sidebar
    </div>
  );
};

export default NavigationSidebar;
