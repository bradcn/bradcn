import Link from "next/link";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { TemplateCard } from "@/components/template-card";
import { DATA } from "@/lib/data";

export default async function TemplatePage() {
    return(
        <>
        <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Templates
                </h2>
              </div>
            </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.template.map((template, id) => (
  <TemplateCard
    href={template.href}
    key={template.title}
    title={template.title}
    description={template.description}
    dates={template.dates}
    tags={template.technologies}
    image={template.image}
    video={template.video}
  />
))}
          </div>
        </div>
      </>
    )
}