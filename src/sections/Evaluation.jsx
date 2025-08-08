import iphone13Logo from '@assets/images/reparation-type/icone-iphone13.png'

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