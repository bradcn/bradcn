import React from 'react';
import Link from 'next/link';

const LicensePage = () => {
  return (
    <div className="py-8 flex items-center justify-center sm:min-h-auto min-h-auto">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        
        <p className="mb-2">
          <span className="font-semibold">&copy; 2024</span> Bradcn Inc., originally developed by <Link className='underline' href="https://amolyadav.site">amyssnippet</Link>.
        </p>
        <br />
        <p className='mb-4'></p>
      </div>
    </div>
  );
};

export default LicensePage;
