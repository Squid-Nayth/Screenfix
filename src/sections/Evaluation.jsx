import iphone13Logo from '@assets/images/reparation-type/icone-iphone13.png'
import iphone14Logo from '@assets/images/reparation-type/icone-iphone14-pro.png'
import unknownCauseLogo from '@assets/images/broken-iphones/curiosity.png'
import cameraLogo from '@assets/images/reparation-type/camera-module.png'
import batteryLogo from '@assets/images/reparation-type/icone-full-battery.png'
import powerLogo from '@assets/images/reparation-type/icone-lightning.png'

const Evaluation = () => {
    return (
        <section className="w-screen max-w-none py-20 px-0 bg-white flex justify-center">
            <div className="w-full max-w-none flex flex-col items-center">
                <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Évaluez votre réparation</h2>
                <form className="w-full max-w-5xl mx-auto bg-white p-8 px-4 md:px-12 rounded-2xl shadow border border-gray-100 space-y-6 text-center">
                    <MenuButton
                        title="Marque de l'appareil"
                        type="brand"
                        description="Apple"
                    />
                    <MenuButton
                        title="Modèle"
                        type="model"
                        description="Sélectionnez un modèle"
                        image={iphone13Logo}
                        alternative="iPhone"
                    />
                    <div className='flex flex-col items-center gap-2'>
                        <label className="block text-base font-medium mb-2 text-center">Types de réparations</label>

                        <div class="flex items-center justify-between w-5/6 mb-2">
                            <span className="text-base text-gray-600">Sélectionnez une ou plusieurs réparations.</span>
                            <span className="text-sm font-semibold text-blue-600 transition-all duration-300">0 sélectionnée</span>
                        </div>


                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2 w-full text-base'>
                            <ReparationOption 
                                title="Vous ne connaissez pas la panne ?"
                                description= "Prenez un diagnostic personnalisé"
                                repairName="repair"
                                repairValue="diagnostic"
                                logo={unknownCauseLogo}
                                alternative="Diagnostic personnalisé"
                                price="35"
                            />
                            <ReparationOption 
                                title="Reconditionnement d'écran"
                                repairName="repair"
                                repairValue="recond_ecran"
                                logo={iphone13Logo}
                                alternative="Écran"
                            />
                            <ReparationOption 
                                title="Changement d'écran complet"
                                repairName="repair"
                                repairValue="chgmt_ecran"
                                logo={iphone13Logo}
                                alternative="Changement écran"
                            />
                            <ReparationOption 
                                title="Remplacement vitre arrière"
                                repairName="repair"
                                repairValue="vitre_arriere"
                                logo={iphone14Logo}
                                alternative="Vitre arrière"
                            />
                            <ReparationOption 
                                title="Remplacement batterie"
                                repairName="repair"
                                repairValue="batterie"
                                logo={batteryLogo}
                                alternative="Batterie"
                            />
                            <ReparationOption 
                                title="Remplacement connecteur de charge"
                                repairName="repair"
                                repairValue="connecteur"
                                logo={powerLogo}
                                alternative="Connecteur"
                            />
                            <ReparationOption 
                                title="Remplacement caméra"
                                repairName="repair"
                                repairValue="camera"
                                logo={cameraLogo}
                                alternative="Caméra"
                            />
                        </div>
                        <button type="submit" className="hover:cursor-pointer bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium py-3 px-8 rounded-full w-full shadow transition text-center">Évaluer</button>
                        <div className='cost-section-container'>
                            <div className='cost-section bg-green-100 p-6 rounded shadow text-center mt-6 border border-green-200 flex flex-col items-center'>
                                <div className='cost-info block'>
                                    <h4 className='cost-type text-xl font-bold mb-2 text-center'>Votre coût estimé</h4>
                                    <p className="cost-description mb-2 text-gray-700 text-center">Prix inclus : Main d'oeuvre + Garantie 3 mois.</p>
                                    <figure className="cost-amount stat stat-reduced mb-4 text-center">
                                        <span className="stat-value text-2xl font-semibold">-- €</span>
                                    </figure>
                                </div>
                            </div>
                            <div className="w-full flex justify-center my-10">
                                <span className='h-0.5 w-32 bg-gray-200 rounded-full'/>
                            </div>
                            <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Prenez rendez-vous</h2>
                            <form className='max-w-lg mx-auto bg-white p-8 rounded-2xl shadow border border-gray-100 space-y-6 text-center'>
                                <div className="flex flex-col items-center">
                                    <label for="name" className="block text-base font-medium mb-2 text-center">Nom</label>
                                    <input type="text" name="name" className="w-full p-3 border border-gray-300 rounded-lg text-center" required="" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <label for="email" className="block text-base font-medium mb-2 text-center">Email</label>
                                    <input type="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg text-center" required="" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <label for="date" className="block text-base font-medium mb-2 text-center">Date du rendez-vous</label>
                                    <input type="date" name="date" className="w-full p-3 border border-gray-300 rounded-lg text-center" required="" />
                                </div>
                                <button type="submit" class="bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium py-3 px-8 rounded-full w-full shadow transition text-center">Envoyer</button>
                                <p class="mt-4 text-sm text-gray-500">En remplissant notre formulaire, vous acceptez notre <a href="politique-confidentialite.html" class="underline hover:text-blue-600">politique de confidentialité</a>.</p>
                            </form>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    );
}

const ReparationOption = ({ repairName, repairValue, logo, alternative, title, description, price }) => {
    let priceStyle = (price)? "text-blue-700 font-semibold text-base px-2 py-1 rounded transition-colors mt-1" : "text-blue-700 font-semibold text-base px-2 py-1 rounded transition-colors mt-1 text-gray-400";
    let PriceValueCheck = (price)? price : "--";
    return (
        <label className='group flex flex-col items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg cursor-pointer focus-within:ring-2 focus-within:ring-blue-400 relative transition duration-300 ease-in-out will-change-transform group-hover:scale-105 group-active:scale-95'>
            <input type="checkbox" name={repairName} value={repairValue} className="peer sr-only" />
            <div className='flex flex-col items-center gap-2'>
                <img src={logo} alt={alternative} className="w-10 h-10 opacity-80 transition-transform duration-300 group-hover:scale-125 group-hover:opacity-100 group-active:scale-110"/>
                <span className="font-semibold">{title}</span>
                <span className="text-gray-600 text-sm text-center">{description}</span>
            </div>
            <span class={priceStyle}>{PriceValueCheck} €</span>
        </label>
    );
}

const MenuButton = ({ title, type, description, image, alternative }) => {
    let imageSrc = (image)? <img src={image} alt={alternative} className="w-6 h-6 opacity-70"/> : null;
    return (
        <div className="flex flex-col items-center gap-2">
            <label for={type} className="block text-base font-medium mb-2 text-center">{title}</label>
            <div className='relative w-5/6 mx-auto'>
                <button type="button" aria-haspopup="listbox" aria-expanded="false" className="w-full h-11 text-base border border-gray-300 rounded-lg bg-white flex items-center justify-between px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                    <span className="flex items-center gap-2 text-gray-700">
                        {imageSrc}
                        <span class="absolute left-1/2 transform -translate-x-1/2 w-full text-center block">{description}</span>
                    </span>
                    <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="CurrentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>
            <input type="hidden" name={type} />
        </div>
    );
}

export default Evaluation;