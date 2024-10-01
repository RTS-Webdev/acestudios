import React from 'react';
import { useEffect, useState } from 'react';
import DarkMode from './DarkMode';

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="text-black dark:text-white py-8 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between w-full text-left">
          
          {/* DarkMode button for mobile above About Us */}
          <div className="block md:hidden -mb-4 -ml-2">
            <DarkMode className="mb-4" /> {/* Moved above About Us for mobile */}
          </div>

          {/* Column 1 */}
          <div className="mb-4 md:mb-0">
            <a href="" className="block mb-2 hover:underline font-semibold dark:text-white">About Us</a>
            <a href="" className="block mb-2 hover:underline font-semibold dark:text-white">Our Team</a>
            <a href="" className="block mb-2 hover:underline font-semibold dark:text-white">Store</a>
            <a href="" className="block mb-2 hover:underline font-semibold dark:text-white">Contact</a>
            <a href="" className="block mb-2 hover:underline dark:text-white">Careers</a>
          </div>

          {/* Column 2 */}
          <div className="mb-4 md:mb-0">
            <a href="" className="block mb-2 hover:underline dark:text-white">Projects</a>
            <a href="" className="block mb-2 hover:underline dark:text-white">Upcoming Releases</a>
            <a href="" className="block mb-2 hover:underline dark:text-white">Awards</a>
            <a href="" className="block mb-2 hover:underline dark:text-white">News</a>
            <a href="" className="block mb-2 hover:underline dark:text-white">Events</a>
          </div>

          {/* Column 3 */}
          <div className="mb-4 md:mb-0">
            <a href="" className="block mb-2 hover:underline dark:text-white">Privacy Policy</a>
            <a href="" className="block mb-2 hover:underline dark:text-white">Terms of Service</a>
            <a href="" className="block mb-2 hover:underline dark:text-white">Cookie Policy</a>
            <a href="" className="block mb-2 hover:underline dark:text-white">Accessibility</a>

            {/* Logo aligned below Accessibility only for mobile */}
            <div className="-ml-5 block md:hidden">
              <img
                src={isDarkMode ? "/dark-logo.png" : "/logo.png"}
                alt="Ace Studios Logo"
                className="w-24 h-24"
              />
            </div>
          </div>

          {/* Logo for larger devices */}
          <div className="hidden md:flex items-center sm:justify-start -ml-4 -mt-9">
            <img
              src={isDarkMode ? "/dark-logo.png" : "/logo.png"}
              alt="Ace Studios Logo"
              className="w-32 h-32"
            />
          </div>
        </div>

        <div className="mt-8 text-center -mt-5">
          <p className="text-sm dark:text-white">© 2024 Ace Studios. All rights reserved.</p>
        </div>
      </div>

      {/* DarkMode button for larger devices */}
      <div className="hidden md:block fixed top-4 right-4">
        <DarkMode />
      </div>

    </footer>
  );
};

export default Footer;