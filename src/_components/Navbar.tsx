"use client"
import { useRef, useState, useEffect } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
    const menuBlock = useRef<HTMLDivElement>(null);
    const [menuHidden, setMenuhidden] = useState(true);
        const toggleMenu = () => {
            if (!menuBlock.current) return;
            console.log(menuHidden)
            if (menuHidden) {
                menuBlock.current?.classList.remove("w-0");
                menuBlock.current?.classList.add("w-[50%]");
                setMenuhidden(false);
            } else {
                menuBlock.current?.classList.remove("w-[50%]");
                menuBlock.current?.classList.add("w-0");
                setMenuhidden(true);
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
        <nav className="md:hidden top-0 left-0 z-10 p-4 m-2">
            <button onClick={toggleMenu}>
                <HiMiniBars3BottomRight className="text-black dark:text-white text-2xl" />
            </button>
            <div className="fixed flex flex-col text-center z-10 right-0 top-0 h-screen w-0 overflow-x-hidden transition-all duration-300 ease-in bg-white dark:bg-black" ref={menuBlock} >
                <img src={isDarkMode ? "/dark-logo.png" : "/logo.png"} alt="Ace Studios Logo" className="w-1/2 mx-auto mt-8"/>
                <div className="flex flex-col text-left ml-8">
                    <a href="" className="block mb-2 dark:text-white">Home</a>
                    <a href="" className="block mb-2 dark:text-white">About</a>
                    <a href="" className="block mb-2 dark:text-white">Services</a>
                    <a href="" className="block mb-2 dark:text-white">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;