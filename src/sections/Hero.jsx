const Hero = () => {

    return (
        <section className="block bg-white py-20 md:py-28 text-center font-sans relative overflow-visible" data-aos="fade-up">
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