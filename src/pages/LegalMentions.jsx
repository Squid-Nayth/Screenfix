import NavBar from "../sections/NavBar"
import Footer from "../sections/Footer"

import Whatsapp from "../components/Whatsapp"

const LegalMentions = () => {
    return (
        <>
        <Whatsapp />
        <NavBar />
        <section className="block bg-white py-20 md:py-28 text-center font-sans relative overflow-visible" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-gray-900 leading-tight relative z-20 text-center">
                Mentions légales
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-md mx-auto leading-snug relative z-20 text-center">
                Toutes les informations a connaitre sur les editeurs et propriétaires du site
            </p>
            <div className="w-full flex justify-center my-10">
                <span className='h-0.5 w-64 bg-gray-200 rounded-full'/>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-2 w-full text-base">
                <LegalCard 
                    title="screenfix.fr est la propriété de"
                    name={{ text:"Screenfix"}}
                    status="auto entreprise"
                    tag="930 951 355 00013"
                    location="27 Boulevard de Port Royal, 75005 Paris"
                    number="+33 06 22 18 85 74"
                    contact="cineeffrance@gmail.com"
                />
                <LegalCard 
                    title="Directeur de la publication du site"
                    name={{ text:"Nathan Michel - Développeur webmaster", url:"https://github.com/Squid-Nayth"}}
                />
                <LegalCard 
                    title="Le site est hébergé par"
                    name={{ text:"Hostinger", url:"https://www.hostinger.com/fr"}}
                    status="Ltd au capital de 110.2 million d'€"
                    location="Švitrigailos str. 34, Vilnius 03230 Lituanie"
                    number="+370 64 50 33 78"
                    contact="domains@hostinger.com"
                />
                <LegalCard 
                    title="Le site a été crée par"
                    name={{ text:"Nathan Michel"}}
                />
                <LegalCard 
                    title="Droit de propriété intellectuelle / Copyright"
                    name={{ text:"Eezy Inc.", url:"https://www.eezy.com/"}}
                />
            </div>

        </section>
        <Footer />
        </>
        
    );
}

const LegalCard = ({ title, name = {text, url}, status, tag, location, number, contact }) => {
    return (
        <label className="group flex flex-col items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white shadow-sm 
                        hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-400 relative transition duration-300 
                        ease-in-out will-change-transform group-hover:scale-105 group-active:scale-95">
                <div>
                    <h4 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">{title}</h4>
                    <ul >
                        <li>{(name.url)? <a href={name.url} target='_blank' className="text-blue-600 font-semibold transition hover:text-blue-800">{name.text}</a>: name.text}</li>
                        <li>{(status)? status : ""}</li>
                        <li>{(tag)? `SIRET : ${tag}` : ""}</li>
                        <li>{(location)? location : ""}</li>
                        <li>{(number)? <a href={`tel:${number}`} className="text-blue-600 font-semibold transition hover:text-blue-800">{number}</a>: ""}</li>
                        <li>{(contact)? <a href={`mailto:${contact}`} className="text-blue-600 font-semibold transition hover:text-blue-800">{contact}</a>: ""}</li>
                    </ul>
                </div>
                
        </label>
    );
}

export default LegalMentions