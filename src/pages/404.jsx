import Footer from '@sections/Footer'

import brokenPhoneLogo from '/iphone/broken-iphone.png'

const NotFound = () => {
    return (
        <>
        <div className='bg-gray-50 text-gray-900 font-sans flex flex-col items-center justify-center min-h-screen'>
            <img src={brokenPhoneLogo} alt="Erreur 404" className="error-illustration" />
            <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Oups, cette page n'existe pas&nbsp;!</h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">La page que vous cherchez a peut-être été déplacée, supprimée ou n'a jamais existé.<br/>Pas de panique, retournez à l'accueil ou contactez-nous si besoin.</p>

            <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow transition">Retour à l'accueil</a>
        </div>
        <Footer />
        </>
    );
}

export default NotFound