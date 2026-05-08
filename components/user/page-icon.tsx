"use client";

import { usePathname } from "next/navigation";
import { useUiUserStore } from "@/app/(user)/user-ui-store";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export default function PageIcon() {
  const path = usePathname();
  const pages = useUiUserStore((state) => state.pages);

  const currentPage = pages.find((page) => page.path === path);
  const iconKey = currentPage?.icon as keyof typeof LucideIcons;
  const IconComponent = LucideIcons[iconKey] as LucideIcon;

  if (!IconComponent) return null;

  return (
    <div className="hidden h-20 w-20 items-center justify-center rounded-full border border-primary/10 bg-white md:flex">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-100 bg-white shadow-sm">
        <IconComponent className="h-10 w-10 text-navy" />
      </div>
    </div>
  );
}