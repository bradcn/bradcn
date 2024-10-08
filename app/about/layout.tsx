import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bradcn",
  metadataBase: new URL("https://bradcn.site/about/"),
  description: "About section of Bradcn Website",
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
