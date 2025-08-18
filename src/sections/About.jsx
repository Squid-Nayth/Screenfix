import { useState, useEffect } from 'react'
import AOS from "aos";

const screenfixImage = Object.values(
  import.meta.glob("@assets/images/about/Workshop-*.jpeg", { eager: true })
).map(module => module.default);

const About = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const [direction, setDirection] = useState("right");

    function IncrementIndex() {
        setDirection("left");
        setImageIndex(prev => (prev === screenfixImage.length - 1 ? 0 : prev + 1));
    }

    function DecrementIndex() {
        setDirection("right");
        setImageIndex(prev => (prev === 0 ? screenfixImage.length - 1 : prev - 1));
    }

    useEffect(() => {
        AOS.refresh();
    }, [imageIndex]);

    // Setup automatic swiping
    const initialTimer = 3
    const [timer, setTimer] = useState(initialTimer);
    useEffect(() => {
        const countdown = setInterval(() => {
        setTimer(prev => {
            if (prev === 1) {
                IncrementIndex();
                return initialTimer;
            }
            return prev - 1;
        });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <section className="bg-white py-16 px-6 aos-init" data-aos="fade-up" id='about'>
            <h5 className="text-4xl md:text-5xl font-bold text-center mb-2">Qui sommes-nous ?</h5>
            <p className="text-center text-gray-600 mb-10 text-lg md:text-xl">
                Découvrez l’équipe et l’atelier derrière Screenfix
            </p>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 items-center justify-center text-center">
                    <div className="flex flex-row md:flex-col md:w-1/2 w-full items-center justify-center bg-white p-6 md:p-10">
                        <div className="relative w-full max-w-2xl h-80 flex items-center justify-center">
                            <button
                                onClick={() => {
                                    DecrementIndex()
                                    setTimer(initialTimer)
                                }}
                                aria-label="Image précédente"
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-blue-100 rounded-full p-2 shadow transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            <img
                                key={imageIndex}
                                src={screenfixImage[imageIndex]}
                                alt="Équipe Screenfix"
                                data-aos={`fade-${direction}`}
                                className="w-full h-80 object-cover bg-white rounded-2xl shadow-md border border-gray-200 transition-all duration-700 opacity-100"
                                style={{ willChange: 'opacity, transform' }}
                            />
                            
                            <button
                            onClick={() => {
                                IncrementIndex()
                                setTimer(initialTimer)
                            }}
                                aria-label="Image suivante"
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-blue-100 rounded-full p-2 shadow transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-8 md:p-12 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">L’atelier Screenfix</h3>
                        <p className="text-gray-700 text-lg md:text-xl mb-6 text-left">
                            Passionnés par la technologie et la réparation, nous mettons notre expertise au service de vos appareils.
                            Notre atelier, situé à Paris, est équipé pour répondre à toutes vos demandes, du diagnostic à la réparation la plus complexe.<br />
                            Nous croyons en la transparence, la qualité et la proximité avec nos clients. Chaque intervention est réalisée avec soin,
                            dans le respect de vos données et de votre matériel. Venez nous rencontrer pour découvrir notre univers et bénéficier
                            de conseils personnalisés !
                        </p>
                        <span className="inline-block text-blue-700 font-semibold text-lg">
                            Votre confiance, notre priorité.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
