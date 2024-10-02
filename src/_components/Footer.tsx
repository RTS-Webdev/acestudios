import React from 'react';
import { useEffect, useState } from 'react';

interface FooterProps {
  hidden: boolean;
}

const Footer: React.FC<FooterProps> = ({ hidden }) => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const updateDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    updateDarkMode();

    const observer = new MutationObserver(updateDarkMode);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer className={`text-black dark:text-white py-8 relative ${hidden ? 'hidden' : ''} hidden md:block`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between w-full text-left">
            <div className="mb-4 md:mb-0">
              <a href="" className="block mb-2 hover:underline font-semibold dark:text-white">About Us</a>
              <a href="" className="block mb-2 hover:underline font-semibold dark:text-white">Our Team</a>
              <a href="" className="block mb-2 hover:underline font-semibold dark:text-white">Store</a>
              <a href="mailto:example@gmail.com" className="block mb-2 hover:underline font-semibold dark:text-white">Contact</a>
              <a href="" className="block mb-2 hover:underline dark:text-white">Careers</a>
            </div>

            <div className="mb-4 md:mb-0">
              <a href="" className="block mb-2 hover:underline dark:text-white">Projects</a>
              <a href="" className="block mb-2 hover:underline dark:text-white">Upcoming Releases</a>
              <a href="" className="block mb-2 hover:underline dark:text-white">Awards</a>
              <a href="" className="block mb-2 hover:underline dark:text-white">News</a>
              <a href="" className="block mb-2 hover:underline dark:text-white">Events</a>
            </div>

            <div className="mb-4 md:mb-0">
              <a href="" className="block mb-2 hover:underline dark:text-white">Privacy Policy</a>
              <a href="" className="block mb-2 hover:underline dark:text-white">Terms of Service</a>
              <a href="" className="block mb-2 hover:underline dark:text-white">Cookie Policy</a>
              <a href="" className="block mb-2 hover:underline dark:text-white">Accessibility</a>

              <div className="-ml-5 block md:hidden">
                <img
                  src={isDarkMode ? "/dark-logo.png" : "/logo.png"}
                  alt="Ace Studios Logo"
                  className="w-24 h-24"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center sm:justify-start -ml-4 -mt-9">
              <img
                src={isDarkMode ? "/dark-logo.png" : "/logo.png"}
                alt="Ace Studios Logo"
                className="w-32 h-32"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="md:block text-center mb-10">
        <p className="text-sm dark:text-white">© 2024 Ace Studios. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;