"use client";

import { usePathname } from "next/navigation";
import { useUiUserStore } from "@/app/(user)/user-ui-store";

export default function Dots() {
  const path = usePathname();

  const steps = ["/", "/risk-types", "/incidents", "/zones"];

  return (
    <div className="flex items-center gap-4">
      {steps.map((step) => (
        <div
          key={step}
          className={`h-3 w-3 rounded-full transition-all duration-200 ${
            path === step ? "scale-110 bg-primary" : "bg-blue-100"
          }`}
        />
      ))}
    </div>
  );
}