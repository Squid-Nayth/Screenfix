const NavBar = () => {

    return (
        <header className="sticky top-0 z-30 bg-white backdrop-blur border-b border-gray-200 shadow-sm">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                 <a href="/" 
                    className='text-2xl font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition focus:outline-none'
                >
                    Screenfix
                </a>
                <button aria-label="Ouvrir le menu" className="flex md-60rem:hidden items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                    <span className="sr-only">Ouvrir le menu</span>
                    <svg className="w-7 h-7 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="12" r="1.5"/>
                        <circle cx="12" cy="19" r="1.5"/>
                    </svg>
                </button>
                
                <div className="hidden md-60rem:flex gap-8 text-gray-700 text-base items-center">
                    <ul className="flex gap-8">
                        <li className="navbar-button"><a href="#eval">Évaluation</a></li>
                        <li className="navbar-button"><a href="#about">À propos</a></li>
                        <li className="navbar-button"><a href="#satisfaction">Avis</a></li>
                        <li className="navbar-button"><a href="#course">Formation</a></li>
                        <li className="navbar-button"><a href="#contact">Contact</a></li>

                        
                        <li className="navbar-button">
                            <a href="https://screenfix.sumupstore.com/produits" target='_blank' 
                                className='text-blue-600 font-semibold transition hover:text-blue-800'
                            >
                                Visitez la boutique
                            </a>
                        </li>
                        
                        <li className="navbar-button">
                            <a href="resell.html" target='_blank' 
                                className='text-blue-600 font-semibold transition hover:text-blue-800'
                            >
                                Revendre
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
