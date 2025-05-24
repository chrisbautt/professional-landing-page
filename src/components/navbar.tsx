'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openNavBar, setOpenNavBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
                setOpenNavBar(false);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavBar = () => {
        setOpenNavBar(!openNavBar);
    };

    return (
        <header className={`fixed w-full ${isScrolled || openNavBar ? 'bg-black' : 'bg-transparent'} h-[100px] flex justify-between items-center py-[25px] px-[50px] text-white md:px-[100px] z-50`}>
            <div className="flex justify-between items-center gap-[50px] md:justify-center w-full md:w-auto">
                <img src="/logo-humaid-communication.png" alt="logo" className="max-h-[50px]" />
                <nav className={`${openNavBar ? 'block' : 'hidden'} bg-black absolute top-[100px] left-0 w-full h-[50vh] py-[25px] px-[50px] md:p-0 md:block md:bg-transparent md:relative md:w-auto md:h-auto md:top-0`}>
                    <ul className="flex flex-col justify-start items-center md:flex-row md:justify-center md:items-center gap-[25px]">
                        <li className="link"><Link href="#acuell">Acuell</Link></li>
                        <li className="link"><Link href="#services">Services</Link></li>
                        <li className="link"><Link href="#a propos">A propos</Link></li>
                        <li className="link"><Link href="#projets">Projets</Link></li>
                    </ul>
                </nav>
                <button onClick={handleNavBar}>
                    <img src={`/${openNavBar ? 'x' : 'menu'}.svg`} alt="Abrir menú" className={`block md:hidden w-[40px] cursor-pointer`} />
                </button>
            </div>
            <div className="hidden md:flex justify-center items-center gap-[25px]">
                <a href="https://www.linkedin.com/" className="hidden lg:block">
                    <img src="/brand-linkedin.svg" alt="linkedIn" className="w-[40px]" />
                </a>
                <a href="#contact" className="btn-primary py-3 px-9 rounded-full text-lg">Découvir comment</a>
            </div>
        </header>
    );
}
