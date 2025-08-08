import RERLogo from '@assets/images/icones/rer-b.png'
import metroLine6Logo from '@assets/images/icones/metro-line-06.jpeg'
import metroLine7Logo from '@assets/images/icones/metro-line-07.png'
import busLogo from '@assets/images/icones/Bus.png'
import bicycleLogo from '@assets/images/icones/velo/Sports_(39).jpg'

const MapLocation = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-16 scroll-mt-24 aos-init" data-aos="fade-up">
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto text-center">
                <div className="w-full aspect-video shadow-lg rounded-xl overflow-hidden flex items-center justify-center">
                    <iframe className="w-full h-full" loading="lazy" 
                        src="https://maps.google.com/maps?q=27%20Boulevard%20de%20Port%20Royal%2C%20Paris&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" 
                        title="Screenfix Paris 5e" 
                        aria-label="Screenfix Paris 5e" 
                        style= {{ border:0 }}
                        allowFullScreen="" 
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="space-y-6 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                        Passez à l’atelier ou appelez-nous, <span class="text-blue-600">nous sommes dispo !</span>
                    </h2>
                    <div className="text-gray-700 space-y-2 text-base md:text-lg text-center">
                        <p><strong>Screenfix – Paris 13ᵉ</strong><br/>27 Boulevard de Port Royal, 75005 Paris
                            <span className="flex flex-row items-center justify-center gap-4 mt-2 mb-2">
                                <img src={RERLogo} alt="RER B" className="w-10 h-10" />
                                <img src={metroLine6Logo} alt="Métro ligne 6" className="w-10 h-10" />
                                <img src={metroLine7Logo} alt="Métro ligne 7" className="w-10 h-10" />
                                <img src={busLogo} alt="Bus" className="w-10 h-10" />
                                <img src={bicycleLogo} alt="Vélo" className="w-10 h-10" />
                            </span>
                        </p>
                        <p><strong>Horaires d’ouverture</strong> :<br/>Lundi → Samedi : <strong>10h00 – 19h00</strong><br/> Avec ou sans rendez-vous</p>
                        <p><strong>Appelez-nous au <a href="tel:0622188574" className="text-blue-600 hover:underline">06 22 18 85 74</a></strong>, réponse directe.<br/>
                        Ou passez nous voir : accueil rapide et réparation express !</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MapLocation