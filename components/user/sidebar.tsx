'use client'
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const path = usePathname();

  return (
    <div className="border rounded-2xl border-slate-200 bg-white shadow-sm px-4 py-4 max-md:hidden max-sm:hidden">Sidebar: {path}</div>
  )
}
