"use client";

import { useUiUserStore } from "@/app/(user)/user-ui-store";

export default function Header() {
  const currentLang = useUiUserStore((state) => state.currentLang);
  const lang = useUiUserStore((state) => state.lang);

  return (
    <h1 className="font-inter text-2xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-4xl lg:text-3xl">
      {currentLang === "fr" ? lang.fr.mainHeader : lang.en.mainHeader}
    </h1>
  );
}