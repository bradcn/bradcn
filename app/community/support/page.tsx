import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Community | Schemadoc",
  metadataBase: new URL("https://schemadoc.vercel.app/community/support"),
  description: "Support page in Community section of Schemadoc documentation",
};

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto my-6">
      <h1 className="text-4xl font-bold my-4">Support</h1>
      
      <p className="text-lg my-4">
        Schemadoc has a smaller community of dedicated developers, with fewer members but a strong focus on meaningful updates. On this page, we’ve listed some Schemadoc-related community groups you can join. See other pages in this section for additional online and in-person learning materials. Before participating in Schemadoc communities, please read our <a href="/legal/codeofconduct" className="underline">code of conduct</a>. We’ve adopted <a href="https://www.contributor-covenant.org/" className="underline">contributor convenant</a>, and we expect all community members to adhere to the guidelines within.
      </p>

      <section className="my-8">
        <h2 className="text-3xl font-semibold my-4">Feature Requests</h2>
        <p className="text-lg">
          For new feature requests, you can create a post on GitHub Issues. GitHub Issues is a handy tool for managing feature development and allows you to start by opening an issue. It also helps track demand for specific features using labels or upvotes, making it easier to prioritize compared to other methods.
          <br />
          <br />
          Please avoid submitting full requests for larger features, especially if someone else may already be working on them, or if they are part of our roadmap. Always discuss the work first before proceeding.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-semibold my-4">News</h2>
        <p className="text-lg">
          For the latest news about Schemadoc, follow us on <a href="https://dev.to/schemadoc" className="underline">dev.to</a> and check out the official <a href="/blog" className="underline">Schemadoc blog</a>on this website.
        </p>
      </section>
    </div>
  );
}