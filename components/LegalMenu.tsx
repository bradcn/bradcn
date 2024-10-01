"use client";

import { getLegalRoutes } from "@/lib/legal-routes";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function LegalMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/legal")) return null;
  const routes = getLegalRoutes();

  return (
    <div className="flex flex-col gap-3.5 mt-5">
      {routes.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
