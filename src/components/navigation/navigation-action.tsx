"use client";

import { Plus } from "lucide-react";
import { ActionTooltip } from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <ActionTooltip label="Add a server" side="right" align="center">
        <button onClick={() => onOpen("createServer")} className="group flex items-center" title="create-server">
          <div className="flex mx-3 h-[48px] w-[48px] dark:bg-neutral-700 rounded-[24px] group-hover:rounded-[16px] items-center justify-center overflow-hidden transition-all bg-background group-hover:bg-emerald-500">
            <Plus className="group-hover:text-white transition text-emerald-500" size={25} />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;
