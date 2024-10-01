import Link from 'next/link';

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">

      {/* Header Section */}
      <header className="w-full py-6">
        <h1 className="text-center text-4xl font-bold">Community</h1>
        <p className="text-center text-lg mt-2">
          Explore how you can get involved with our community and contribute to the project.
        </p>
      </header>



      {/* Main Content */}
      <main className="w-full flex flex-col space-y-12 mt-12">
        {/* Support Page Section */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold text-center">Support Page</h2>
          <p className="text-center mt-4">
            Get help from our community or access our support channels for assistance.
          </p>
          <div className="text-center mt-4">
            <Link href="/community/support" className='underline'>
              Visit Support Page
              {/* <a className="underline">Visit </a> */}
            </Link>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold text-center">Our Team</h2>
          <p className="text-center mt-4">
            Meet the core members who help build and maintain this project.
          </p>
          <div className="text-center mt-4">
            <Link href="/community/team" className="underline">
              Meet the Team
            </Link>
            {/* <Link href="/community/team">
              <a className="underline">Meet the Team</a>
            </Link> */}
          </div>
        </section>

        {/* Resources Section */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold text-center">Resources</h2>
          <p className="text-center mt-4">
            Find tutorials, guides, and other resources to help you get started.
          </p>
          <div className="text-center mt-4">
            <Link href="/community/resources" className="underline">
              Explore Resources
            </Link>
            {/* <Link href="/community/resources">
              <a className="underline">Explore Resources</a>
            </Link> */}
          </div>
        </section>

        {/* Contributing Section */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold text-center">Contributing</h2>
          <p className="text-center mt-4">
            Learn how to contribute to our project and help improve the community.
          </p>
          <div className="text-center mt-4">
            <Link href="/community/contributing" className="underline">
              Start Contributing
            </Link>
            {/* <Link href="/community/contributing">
              <a className="underline">Start Contributing</a>
            </Link> */}
          </div>
        </section>

        {/* Release Process Section */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold text-center">Release Process</h2>
          <p className="text-center mt-4">
            Understand our release cycle and how new features and updates are rolled out.
          </p>
          <div className="text-center mt-4">
            <Link href="/community/release-process" className="underline">
              View Release Process
            </Link>
            {/* <Link href="/community/release-process">
              <a className="underline">View Release Process</a>
            </Link> */}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold text-center">Frequently Asked Questions</h2>
          <p className="text-center mt-4">
            Got questions? We’ve got answers to the most common inquiries.
          </p>
          <div className="text-center mt-4">
            <Link href="/community/faq" className="underline">
              Read FAQ
            </Link>
            {/* <Link href="/community/faq">
              <a className="underline">Read FAQ</a>
            </Link> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
