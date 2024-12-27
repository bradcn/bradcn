import React from 'react';
import Link from 'next/link';

const LicensePage = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">About Bradcn</h1>
        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">Bradcn</span>, a platform created to showcase all the innovative and exciting projects developed by me, <span className="italic">Amol Yadav</span>. At Bradcn, we believe in pushing the boundaries of software development and creating tools that not only solve real-world problems but also inspire others to build and grow.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            Bradcn was built with a single goal in mind: to offer free and paid software, JavaScript libraries, and tools that cater to a diverse range of developers, creators, and businesses. Whether you're an entrepreneur looking for solutions to streamline your workflow or a developer searching for robust libraries to enhance your projects, Bradcn is here to support your journey.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Open-source Projects:</strong> Explore a variety of open-source software and libraries designed to empower the development community.
            </li>
            <li>
              <strong>Premium Tools:</strong> Access cutting-edge, paid solutions that offer additional features and advanced functionality to meet your business and personal needs.
            </li>
            <li>
              <strong>Educational Content:</strong> From tutorials to comprehensive documentation, Bradcn provides resources to help you master development tools and languages.
            </li>
            <li>
              <strong>Innovative Solutions:</strong> Every project here is crafted with attention to detail, optimized for performance, and designed to solve real challenges.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            We aim to build a thriving ecosystem that fosters creativity, collaboration, and innovation. As we continue to develop new solutions, Bradcn will remain dedicated to providing high-quality, user-centric software and libraries that help you turn ideas into reality.
          </p>
        </div>

        <p className="mt-6">
          Thank you for visiting <span className="font-semibold">Bradcn</span>. Together, let's build the future of technology!
        </p>
      </div>
    </div>
  );
};

export default LicensePage;
