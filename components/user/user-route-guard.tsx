// components/user/UserRouteGuard.tsx

"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useEmployeeReportStore } from "@/features/user-report/store";

const UserRouteGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  
  const hasHydrated = useEmployeeReportStore((state) => state.hasHydrated);
  const isVerified = useEmployeeReportStore((state) => state.isVerified);
  const allowed = useEmployeeReportStore((state) => state.isAllowed);
  const verificationToken = useEmployeeReportStore(
    (state) => state.verificationToken
  );

  useEffect(() => {
    if (!hasHydrated) return;

    if (!isVerified || !allowed || !verificationToken) {
      router.replace("/");
    }
  }, [isVerified, allowed, verificationToken, router]);

  if (!isVerified || !allowed || !verificationToken) {
    return null;
  }

  return children;
};

export default UserRouteGuard;