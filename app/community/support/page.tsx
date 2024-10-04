import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Community | Bradcn",
  metadataBase: new URL("https://Bradcn.vercel.app/community/support"),
  description: "Support page in Community section of Bradcn documentation",
};

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto my-6">
      <h1 className="text-4xl font-bold my-4">Support</h1>
      
      <p className="text-lg my-4">
      Bradcn boasts a smaller yet highly dedicated community of developers who, despite their limited numbers, prioritize delivering meaningful updates and improvements to the platform. On this page, you will find a curated list of various community groups related to Bradcn that you can join to connect with like-minded individuals. Additionally, we encourage you to explore other pages in this section, where you can discover a wealth of online and in-person learning materials designed to enhance your understanding and usage of Bradcn. Before engaging with any Bradcn community, we kindly ask that you take the time to read through our <Link href="/legal/code-of-conduct" className="underline">code of conduct</Link>. We have adopted the <Link className="underline" href="https://www.contributor-covenant.org/">Contributor Convenant</Link>, which outlines the expectations for behavior and interaction within the community, and we strongly encourage all members to adhere to these guidelines to foster a welcoming and respectful environment for everyone involved.
      </p>

      <section className="my-8">
        <h2 className="text-3xl font-semibold my-4">Feature Requests</h2>
        <p className="text-lg">
        For any new feature requests, we encourage you to create a post on GitHub Issues, which serves as a valuable tool for managing feature development. By opening an issue, you can effectively communicate your ideas while also utilizing features like labels and upvotes to track demand for specific functionalities, making it easier to prioritize requests over other methods. However, we ask that you refrain from submitting comprehensive requests for larger features, particularly if there’s a possibility that someone else is already working on similar ideas or if the features are included in our existing roadmap. It’s essential to discuss your proposed work beforehand to ensure alignment and avoid duplication of efforts. Additionally, you can also make feature requests on our <Link href="https://fider.bradcn.site/" className="underline">Fider Page</Link>, providing another avenue for sharing your suggestions and contributing to our development process.
          <br />
          <br />
          Please avoid submitting full requests for larger features, especially if someone else may already be working on them, or if they are part of our roadmap. Always discuss the work first before proceeding.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-semibold my-4">News</h2>
        <p className="text-lg">
        To stay updated on the latest news and developments regarding Bradcn, we encourage you to follow us on <Link href="https://dev.to/bradcn" className="underline">our dev.to page</Link>, where we regularly share insights, announcements, and engaging content related to our projects and initiatives. Additionally, for more in-depth information and a comprehensive overview of our offerings, be sure to visit the <Link href="/blog" className="underline">official Bradcn blog</Link> available on our website. This blog serves as a valuable resource, featuring articles, tutorials, and updates that reflect our ongoing commitment to transparency and community engagement. By connecting with us on these platforms, you’ll gain access to a wealth of knowledge and be among the first to know about exciting new features, events, and other important information related to Bradcn.
        </p>
      </section>
    </div>
  );
}