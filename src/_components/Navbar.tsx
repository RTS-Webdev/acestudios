"use client"
import { useRef, useState, useEffect } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import DarkMode from "./DarkMode";

interface NavbarProps {
    setFooterHidden: (hidden: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setFooterHidden }) => {
    const menuBlock = useRef<HTMLDivElement>(null);
    const [menuHidden, setMenuhidden] = useState(true);
    const toggleMenu = () => {
        if (!menuBlock.current) return;
        console.log(menuHidden)
        if (menuHidden) {
            menuBlock.current?.classList.remove("w-0");
            menuBlock.current?.classList.add("w-[50%]");
            setMenuhidden(false);
            setFooterHidden(true);
        } else {
            menuBlock.current?.classList.remove("w-[50%]");
            menuBlock.current?.classList.add("w-0");
            setMenuhidden(true);
            setFooterHidden(false);
        }
    }

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
        <nav className="md:hidden top-0 left-0 z-10 p-4 m-2 relative">
            {/* Mobile Navbar */}
            <div className="flex items-center">
                <HiMiniBars3BottomRight className="text-black dark:text-white text-xl" onClick={toggleMenu} />
                <DarkMode className="ml-4"/>
            </div>
            <div className="fixed flex flex-col text-center z-10 right-0 top-0 h-screen w-0 overflow-x-hidden transition-all duration-300 ease-in bg-white dark:bg-black" ref={menuBlock}>
                <img src={isDarkMode ? "/dark-logo.png" : "/logo.png"} alt="Ace Studios Logo" className="w-1/2 mx-auto mt-2" />
                <div className="flex flex-col text-center mb-4 md:mb-0">
                    <a href="" className="block mb-4 dark:text-white font-semibold">About Us</a>
                    <a href="" className="block mb-4 dark:text-white font-semibold">Our Team</a>
                    <a href="" className="block mb-4 dark:text-white font-semibold">Store</a>
                    <a href="" className="block mb-4 dark:text-white font-semibold">Contact</a>
                    <a href="" className="block mb-4 dark:text-white">Careers</a>
                </div>
                <div className="flex flex-col text-center mb-4 md:mb-0">
                    <a href="" className="block mb-4 dark:text-white">Projects</a>
                    <a href="" className="block mb-4 dark:text-white">Upcoming Releases</a>
                    <a href="" className="block mb-4 dark:text-white">Awards</a>
                    <a href="" className="block mb-4 dark:text-white">News</a>
                    <a href="" className="block mb-4 dark:text-white">Events</a>
                </div>
                <div className="flex flex-col text-center mmb-4 md:mb-0">
                    <a href="" className="block mb-4 dark:text-white">Privacy Policy</a>
                    <a href="" className="block mb-4 dark:text-white">Terms of Service</a>
                    <a href="" className="block mb-4 dark:text-white">Cookie Policy</a>
                    <a href="" className="block mb-4 dark:text-white">Accessibility</a>
                </div>
                <div className="mt-auto mb-10">
                    <div className="flex justify-center space-x-4 mb-6">
                        <a href="" className="dark:text-white">
                            <FaFacebook className="text-black dark:text-white text-xl" />
                        </a>
                        <a href="" className="dark:text-white">
                            <FaInstagram className="text-black dark:text-white text-xl" />
                        </a>
                        <a href="" className="dark:text-white">
                            <FaLinkedinIn className="text-black dark:text-white text-xl" />
                        </a>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="" className="dark:text-white">
                            <FaTiktok className="text-black dark:text-white text-xl" />
                        </a>
                        <a href="" className="dark:text-white">
                            <FaXTwitter className="text-black dark:text-white text-xl" />
                        </a>
                        <a href="" className="dark:text-white">
                            <SiGmail className="text-black dark:text-white text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;