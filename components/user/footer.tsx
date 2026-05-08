"use client"

import { useUiUserStore } from "@/app/(user)/user-ui-store";

export default function Footer() {
    const currentLang = useUiUserStore((state) => state.currentLang);
    const lang = useUiUserStore((state) => state.lang);

  return (
    <div className="flex items-start justify-center h-10 pt-1 sm:text-sm max-md:text-sm text-md font-inter font-bold text-ltgray border-t border-slate-200">
        {currentLang === 'fr' ? lang.fr.footer : lang.en.footer}
    </div>
  )
}
