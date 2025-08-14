
const Hero = () => {
    const floatingIcons = [
        "/iphone/iphone-15.png", "/iphone/iphone-X.png",
        "/iphone/iphone-SE-2022.png", "/logo-apple.png"
    ]

    let logoCount = window.innerWidth < 768 ? 6 : 18
    

    return (
        <section className="block bg-white py-20 md:py-28 text-center font-sans relative overflow-visible" data-aos="fade-up">

            <div class="hidden sm:flex pointer-events-none select-none absolute inset-0 w-full h-full">
                {Array.from({ length: logoCount }).map((_, i) => {
                    // Pick a random picture
                    const src = floatingIcons[Math.floor(Math.random() * floatingIcons.length)]

                    // Calculer les positions top et left
                    const left = `${(Math.random() < 0.5)? Math.random() * 33 + 5 : Math.random() * 33 + 62}%`
                    let bottom = `${(Math.random() < 0.5)? Math.random() * 45 + 10 : Math.random() * 45 + 20}%`

                    return (
                    <img
                        key={i}
                        src={src}
                        alt="Logo iPhone/Apple"
                        className={`z-10 absolute transition-all duration-700 ease-in-out will-change-transform 
                                pointer-events-none opacity-32 size-15 animate-float-spin-${Math.min(4, 1 + Math.floor(Math.random() * 10))}`}
                        style={{ bottom, left, willChange: "transform" }}
                    />
                    )
                })}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-gray-900 leading-tight relative z-20 text-center">
                Profitez d'une réduction sur vos réparation
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-md mx-auto leading-snug relative z-20 text-center">
                Cumulez vos réparation et bénéficiez jusqu'à <span className="font-semibold text-blue-600">-35% de remise</span>
            </p>
            <div className="flex justify-center mt-2 mb-4 relative z-20 w-full">
                <a href="#eval" 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-8 rounded-full 
                            shadow transition inline-block text-center"
                >
                    Commencer une réparation
                </a>
            </div>
        </section>
    );
}

export default Hero