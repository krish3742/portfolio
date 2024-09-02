import { useState } from "react";

function Navbar(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="bg-[#291C3A] fixed w-screen z-40">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between sm:overflow-hidden">
                            <div className="flex items-center justify-center text-lg font-bold">
                                <p className="text-white">KA</p>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <button onClick={() => props.scrollToSection(props.home)} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</button>
                                    <button onClick={() => props.scrollToSection(props.about)} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Me</button>
                                    <button onClick={() => props.scrollToSection(props.edex)} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Education & Experience</button>
                                    <button onClick={() => props.scrollToSection(props.project)} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</button>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <button onClick={() => props.scrollToSection(props.contact)} className="rounded-md bg-[#FFFFFF] px-3 py-2 text-sm font-medium text-[#291C3A]" aria-current="page">Contact Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isMenuOpen &&
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <button onClick={() => {props.scrollToSection(props.home);setIsMenuOpen(!isMenuOpen)}} className="block rounded-md px-3 py-2 text-base font-medium min-w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white">Home</button>
                            <button onClick={() => {props.scrollToSection(props.about);setIsMenuOpen(!isMenuOpen)}} className="block rounded-md px-3 py-2 text-base font-medium min-w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white">About Me</button>
                            <button onClick={() => {props.scrollToSection(props.edex);setIsMenuOpen(!isMenuOpen)}} className="block rounded-md px-3 py-2 text-base font-medium min-w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white">Education & Experience</button>
                            <button onClick={() => {props.scrollToSection(props.project);setIsMenuOpen(!isMenuOpen)}} className="block rounded-md px-3 py-2 text-base font-medium min-w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white">Projects</button>
                            <button onClick={() => {props.scrollToSection(props.contact);setIsMenuOpen(!isMenuOpen)}} className="block rounded-md px-3 py-2 text-base font-medium min-w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white">Contact Me</button>
                        </div>
                    </div>
                }
            </nav>
        </>
    );
};

export default Navbar;