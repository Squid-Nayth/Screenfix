import { useState } from "react"

import { mainNavLinks } from "@constants/index.js"
import { navLinks } from "@constants/index.js"

const NavItems = ({ onClick = () => {}, isMobile = false }) => (
    <ul className={(!isMobile)? "flex gap-8" : "space-y-3"}>
        {mainNavLinks.map((item) => (
            <li key={item.id} className={(isMobile)? "wrap-navbar-button" : "navbar-button"}>
                <a href={item.href} onClick={onClick} className="">
                    {item.name}
                </a>
            </li>
        ))}

        {navLinks.map((item) => (
            <li key={item.id} className={(isMobile)? "wrap-navbar-special" : "navbar-button"}>
                <a
                    href={item.href}
                    target="_blank"
                    onClick={onClick}
                    className="text-blue-600 font-semibold transition hover:text-blue-800"
                    rel="noopener noreferrer"
                >
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const NavBar = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => setMenu(!menu)
    
    return (
        <header className="sticky top-0 z-30 bg-white backdrop-blur border-b border-gray-200 shadow-sm">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                 <a href="/" 
                    className='text-2xl font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition focus:outline-none'
                >
                    Screenfix
                </a>
                <button 
                onClick={toggleMenu}
                aria-label="Ouvrir le menu" 
                className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                    <span className="sr-only">Ouvrir le menu</span>
                    <svg className="w-7 h-7 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="12" r="1.5"/>
                        <circle cx="12" cy="19" r="1.5"/>
                    </svg>
                </button>
                
                {menu &&
                    <div class="fixed lg:hidden top-18 right-5 mt-2 w-80 bg-white rounded-2xl shadow-lg border 
                    border-gray-100 z-50 animate-fade-in p-4">
                        <NavItems isMobile='true' />
                    </div>
                }
                
                <div className="hidden lg:flex gap-8 text-gray-700 text-base items-center">
                    <NavItems />
                </div>
            </nav>
        </header>
    );
};

/*
<div class="flex flex-col gap-4">
    <button className="wrap-navbar-button">Évaluation</button>
    <button className="wrap-navbar-button">À propos</button>
    <button className="wrap-navbar-button">Avis</button>
    <button className="wrap-navbar-button">Formation</button>
    <button className="wrap-navbar-button">Contact</button>
    <a href="https://screenfix.sumupstore.com/produits" target="_blank" class="wrap-navbar-special">Visitez la boutique</a>
    <a href="revendre.html" class="wrap-navbar-special">Revendre</a>
</div>
*/
export default NavBar;
