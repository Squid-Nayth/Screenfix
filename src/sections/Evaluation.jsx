import iphone13Logo from '@assets/images/reparation-type/icone-iphone13.png'
import unknownCauseLogo from '@assets/images/broken-iphones/curiosity.png'

const Evaluation = () => {
    return (
        <section className="w-screen max-w-none py-20 px-0 bg-white flex justify-center">
            <div className="w-full max-w-none flex flex-col items-center">
                <h2 class="text-4xl font-bold text-center mb-12 tracking-tight">Évaluez votre réparation</h2>
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
                        <label class="block text-base font-medium mb-2 text-center">Types de réparations</label>

                        <div class="flex items-center justify-between w-5/6 mb-2">
                            <span class="text-base text-gray-600">Sélectionnez une ou plusieurs réparations.</span>
                            <span class="text-sm font-semibold text-blue-600 transition-all duration-300">0 sélectionnée</span>
                        </div>
                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2 w-full text-base'>
                            <label className='group flex flex-col items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg cursor-pointer focus-within:ring-2 focus-within:ring-blue-400 relative transition duration-300 ease-in-out will-change-transform group-hover:scale-105 group-active:scale-95'>
                                <input type="checkbox" name="repair" value="diagnostic" class="peer sr-only" />

                                <div className='flex flex-col items-center gap-2'>
                                    <img src={unknownCauseLogo} alt="Diagnostic personnalisé" class="w-10 h-10 opacity-80 transition-transform duration-300 group-hover:scale-125 group-hover:opacity-100 group-active:scale-110"/>
                                    <span class="font-semibold">Vous ne connaissez pas la panne ?</span>
                                    <span class="text-gray-600 text-sm text-center">Prenez un diagnostic personnalisé</span>
                                </div>
                                <span class="text-blue-700 font-semibold text-base px-2 py-1 rounded transition-colors mt-1">35 €</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </section>
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