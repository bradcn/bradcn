import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Cleftbar } from "@/components/cleftbar";

export const metadata: Metadata = {
  title: "Community | Bradcn",
  metadataBase: new URL("https://bradcn.site/community"),
  description: "Community section of Bradcn Website",
};

export default function CommunityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <Cleftbar key="leftbar" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
