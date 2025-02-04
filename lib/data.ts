import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Globe } from "lucide-react";

export const DATA = {
 template: [
        {
          title: "Schemadoc",
          href: "https://schemadoc.bradcn.site",
          dates: "Aug 2024 - Sep 2024",
          active: true,
          description: "Schema doc let users create their own documentation website with ease, letting users focus on their content insted of UI",
          technologies: [
            "Next.js",
            "Typescript",
            "TailwindCSS",
            "React",
            "MDX",
            "Radix UI",
          ],
          image: "",
          video: "https://bradcn.github.io/lisamedia/tutorial.mp4.mp4",
        },
        {
          title: "Bradcn UI",
          href: "https://ui.bradcn.site/",
          dates: "June 2023 - Present",
          active: false,
          description:
            "Designed, developed and sold animated UI components for developers.",
          technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Stripe",
            "Shadcn UI",
            "Magic UI",
          ],
          links: [
            {
              type: "Website",
              href: "https://magicui.design",
            },
            {
              type: "Source",
              href: "https://github.com/magicuidesign/magicui",
            },
          ],
          image: "",
          video: "https://cdn.magicui.design/bento-grid.mp4",
        },
        {
          title: "llm.report",
          href: "https://llm.report",
          dates: "April 2023 - September 2023",
          active: true,
          description:
            "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
          technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Shadcn UI",
            "Magic UI",
            "Stripe",
            "Cloudflare Workers",
          ],
          links: [
            {
              type: "Website",
              href: "https://llm.report",
            },
          ],
          image: "",
          video: "https://cdn.llm.report/openai-demo.mp4",
        },
        {
          title: "Automatic Chat",
          href: "https://automatic.chat",
          dates: "April 2023 - March 2024",
          active: true,
          description:
            "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
          technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Shadcn UI",
            "Magic UI",
            "Stripe",
            "Cloudflare Workers",
          ],
          links: [
            {
              type: "Website",
              href: "https://automatic.chat",
            },
          ],
          image: "",
          video:
            "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
        },
      ],
} as const;
