const Whatsapp = () => {

    return (
        <a href="https://wa.me/33622188574?text=Bonjour%20Screenfix%2C%20j'ai%20une%20question%20!" target="_blank" 
            aria-label="Contact WhatsApp"
            className="fixed z-50 bottom-6 right-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 
            rounded-full shadow-lg transition-all duration-300 ease-in-out group"
            style={{ boxShadow: "0 4px 24px 0 rgba(37, 211, 102, 0.25)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.366.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.617h-.001a8.807 8.807 0 0 1-4.773-1.389l-.342-.204-3.561.934.951-3.468-.223-.355a8.807 8.807 0 0 1-1.352-4.792c.001-4.84 3.946-8.784 8.787-8.784 2.346 0 4.555.916 6.217 2.577a8.726 8.726 0 0 1 2.566 6.207c-.003 4.84-3.947 8.784-8.788 8.784m7.149-15.933A10.92 10.92 0 0 0 12.051 0C5.495 0 .001 5.495.001 12.053c0 2.123.555 4.199 1.607 6.032L0 24l6.064-1.589a11.948 11.948 0 0 0 5.987 1.527h.005c6.557 0 11.95-5.494 11.95-12.051 0-2.397-.676-4.725-1.957-6.749a11.892 11.892 0 0 0-3.428-3.762"/>
            </svg>
            <div className="hidden md-40rem:flex">
                <span className="font-semibold text-base">Discuter sur WhatsApp</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 bg-white text-gray-900 text-sm 
                    font-medium rounded-xl shadow-lg px-5 py-4 w-72 max-w-xs opacity-0 pointer-events-none transition-all duration-500 
                    ease-in-out scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-50 flex flex-col items-center" 
                    style= {{ minWidth:260 }}>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-14px] w-0 h-0 border-l-8 border-r-8 border-t-8 
                    border-l-transparent border-r-transparent border-t-white"></span>
                    <strong>Besoin d’un conseil ou d’un devis rapide&nbsp;?</strong><br/>
                    Cliquez ici pour discuter directement avec notre équipe sur WhatsApp.<br/>
                    <span className="block mt-2 text-green-600 font-semibold">Réponse rapide&nbsp;: 10h-19h, lundi à samedi</span>
                </span>
            </div>
            
        </a>
    );

}

export default Whatsapp