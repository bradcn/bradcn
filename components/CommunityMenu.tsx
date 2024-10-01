"use client";

import { getCommunityRoutes } from "@/lib/community-routes";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function CommunityMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/community")) return null;
  const routes = getCommunityRoutes();

  return (
    <div className="flex flex-col gap-3.5 mt-5">
      {routes.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/community${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
