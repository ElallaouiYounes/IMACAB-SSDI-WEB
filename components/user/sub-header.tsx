"use client";

import { useUiUserStore } from "@/app/(user)/user-ui-store";
import { usePathname } from "next/navigation";

export default function SubHeader() {
  const path = usePathname();
  const pages = useUiUserStore((state) => state.pages);
  const page = pages.find((page) => page.path === path);

  return (
    <p className="mt-3 text-base font-medium leading-relaxed text-slate-500 md:text-xl">
      {page?.subHeader}
    </p>
  );
}