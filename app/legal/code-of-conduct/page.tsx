import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Code of Conduct - Bradcn',
  description: 'Code of Conduct for Bradcn',
};

const CodeOfConduct = () => {
  return (
    <main className="py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Code of Conduct</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Pledge</h2>
        <p className="text-lg leading-relaxed">
          In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Standards</h2>
        <h3 className="text-2xl font-medium mb-2">Examples of behavior that contributes to creating a positive environment include:</h3>
        <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
          <li>Using welcoming and inclusive language</li>
          <li>Being respectful of differing viewpoints and experiences</li>
          <li>Gracefully accepting constructive criticism</li>
          <li>Focusing on what is best for the community</li>
          <li>Showing empathy towards other community members</li>
        </ul>

        <h3 className="text-2xl font-medium mb-2">Examples of unacceptable behavior by participants include:</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
          <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
          <li>Public or private harassment</li>
          <li>Publishing others&rsquo; private information, such as a physical or electronic address, without explicit permission</li>
          <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Responsibilities</h2>
        <p className="text-lg leading-relaxed">
          Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.
        </p>
        <p className="text-lg leading-relaxed">
          Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Scope</h2>
        <p className="text-lg leading-relaxed">
          This Code of Conduct applies within all project spaces, and it also applies when an individual is representing the project or its community in public spaces. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.
        </p>
        <p className="text-lg leading-relaxed">
          This Code of Conduct also applies outside the project spaces when there is a reasonable belief that an individual&rsquo;s behavior may have a negative impact on the project or its community.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Enforcement</h2>
        <p className="text-lg leading-relaxed">
          Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at <Link href="mailto:support.schemadoc@gmail.com" className="text-blue-500 hover:underline">support.schemadoc@gmail.com</Link>. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.
        </p>
        <p className="text-lg leading-relaxed">
          Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project&rsquo;s leadership.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Attribution</h2>
        <p className="text-lg leading-relaxed">
          This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at <Link href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://www.contributor-covenant.org/version/1/4/code-of-conduct.html</Link>.
        </p>
        <p className="text-lg leading-relaxed">
          For answers to common questions about this code of conduct, see <Link href="https://www.contributor-covenant.org/faq" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://www.contributor-covenant.org/faq</Link>.
        </p>
      </section>
    </main>
  );
};

export default CodeOfConduct;
