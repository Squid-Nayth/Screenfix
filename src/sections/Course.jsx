import ReparationVideo from '@assets/videos/glass-separating-process.mp4'

const Course = () => {
    return (
        <section className="bg-white py-16 px-6 aos-init" data-aos='fade-up' id='course'>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">Formation Reconditionnement d’Écran iPhone</h2>
            <p className="text-center text-gray-600 mb-10 text-lg md:text-xl">Devenez expert en reconditionnement d’écrans d’iPhone, modèle par modèle.</p>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 items-center justify-center text-center">
                    <div className="flex flex-row md:flex-col md:w-1/2 w-full items-center justify-center bg-white p-6 md:p-10">
                        <video
                        src={ReparationVideo}
                        className="w-full h-64 md:h-80 rounded-2xl shadow-md border border-gray-200 object-cover"
                        style={{ objectFit: 'cover' }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        title="Processus de séparation du verre cassé d’un écran iPhone"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-8 md:p-12 text-center">
                        <h5 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-left">Découvrez <span className="text-blue-700"></span>notre formation intensive, d’une durée de 7 à 10 jours.</h5>
                        <p className="text-gray-700 text-lg md:text-xl mb-4 text-left leading-relaxed">
                            La formation se compose de 4 étapes de <span className="font-semibold text-blue-700">4 étapes de 2 jours </span>, selon les générations d’iPhone :
                        </p>
                        <ul className="list-disc pl-8 space-y-2 text-gray-800 text-left mb-4">
                            <li><span className="font-semibold">Niveau 1</span> : iPhone XR et iPhone 11</li>
                            <li><span className="font-semibold">Niveau 2</span> : iPhone X à iPhone 11 Pro Max</li>
                            <li><span className="font-semibold">Niveau 3</span> : iPhone 12 à iPhone 14 Pro Max</li>
                            <li><span className="font-semibold">Niveau 4</span> : iPhone 15 à iPhone 16 Pro Max</li>
                        </ul>
                        <p className="text-gray-700 text-lg md:text-xl mb-6 text-left leading-relaxed">
                            <span className="font-semibold text-blue-700">Chaque module </span> couvre les techniques et outils propres à une génération d’iPhone.
                        </p>
                        <div className="flex flex-col gap-4 w-full justify-center items-center">
                            <a href="reconditionnement-ecran.html" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">C'est quoi le reconditionnement d'écran ?</a>
                            <a href="formation-reconditionnement.html" className="inline-block bg-white border border-blue-600 text-blue-700 hover:bg-blue-50 text-lg font-semibold py-3 px-8 rounded-full shadow transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Programme de la formation</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Course;