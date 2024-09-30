import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
          <div className="col-span-4 mb-4">
            <a href="#" className="text-black hover:underline">Questions? Contact us.</a>
          </div>
          <div>
            <a href="#" className="block mb-2 hover:underline">About Us</a>
            <a href="#" className="block mb-2 hover:underline">Our Team</a>
            <a href="#" className="block mb-2 hover:underline">Careers</a>
            <a href="#" className="block mb-2 hover:underline">Press</a>
            <a href="#" className="block mb-2 hover:underline">Contact</a>
          </div>
          <div>
            <a href="#" className="block mb-2 hover:underline">Projects</a>
            <a href="#" className="block mb-2 hover:underline">Upcoming Releases</a>
            <a href="#" className="block mb-2 hover:underline">Awards</a>
            <a href="#" className="block mb-2 hover:underline">News</a>
            <a href="#" className="block mb-2 hover:underline">Events</a>
          </div>
          <div>
            <a href="#" className="block mb-2 hover:underline">Investors</a>
            <a href="#" className="block mb-2 hover:underline">Corporate Governance</a>
            <a href="#" className="block mb-2 hover:underline">Financial Reports</a>
            <a href="#" className="block mb-2 hover:underline">Stock Information</a>
            <a href="#" className="block mb-2 hover:underline">SEC Filings</a>
          </div>
          <div>
            <a href="#" className="block mb-2 hover:underline">Privacy Policy</a>
            <a href="#" className="block mb-2 hover:underline">Terms of Service</a>
            <a href="#" className="block mb-2 hover:underline">Cookie Policy</a>
            <a href="#" className="block mb-2 hover:underline">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
