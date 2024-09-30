import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between w-full  text-left">
    
          {/* Column 1 */}
          <div>
            <a href="" className="block mb-2 hover:underline">About Us</a>
            <a href="" className="block mb-2 hover:underline">Our Team</a>
            <a href="" className="block mb-2 hover:underline">Careers</a>
            <a href="" className="block mb-2 hover:underline">Press</a>
            <a href="" className="block mb-2 hover:underline">Contact</a>
          </div>

          {/* Column 2 */}
          <div>
            <a href="" className="block mb-2 hover:underline">Projects</a>
            <a href="" className="block mb-2 hover:underline">Upcoming Releases</a>
            <a href="" className="block mb-2 hover:underline">Awards</a>
            <a href="" className="block mb-2 hover:underline">News</a>
            <a href="" className="block mb-2 hover:underline">Events</a>
          </div>

          {/* Column 3 */}
          <div>
            <a href="" className="block mb-2 hover:underline">Investors</a>
            <a href="" className="block mb-2 hover:underline">Corporate Governance</a>
            <a href="" className="block mb-2 hover:underline">Financial Reports</a>
            <a href="" className="block mb-2 hover:underline">Stock Information</a>
            <a href="" className="block mb-2 hover:underline">SEC Filings</a>
          </div>

          {/* Column 4 */}
          <div className='h-full'>
            <a href="" className="block mb-2 hover:underline">Privacy Policy</a>
            <a href="" className="block mb-2 hover:underline">Terms of Service</a>
            <a href="" className="block mb-2 hover:underline">Cookie Policy</a>
            <a href="" className="block mb-2 hover:underline">Accessibility</a>
          </div>

          {/* Logo */}
          <div className="flex items-center sm:justify-start -ml-4 -mt-9">
            <img
                src="/logo.png"
                alt="Ace Studios Logo"
                className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-sm">© 2024 Ace Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
