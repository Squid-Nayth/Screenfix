import NavBar from "@sections/NavBar"
import Footer from "@sections/Footer"

import Container from '@components/Container'
import Whatsapp from "@components/Whatsapp"

import { LegalMentionData } from "@constants/index"

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
                {LegalMentionData.map((card) => {
                    return (
                        <LegalCard 
                        id={card.id}
                        title={card.title}
                        name={{text: card.author, url: card.url}}
                        status={card.status}
                        tag={card.tag}
                        location={card.location}
                        number={card.number}
                        contact={card.contact}
                        />
                    )
                })}
            </div>
        </section>
        <Footer />
        </>
        
    );
}

const LegalCard = ({ id, title, name = {text, url}, status, tag, location, number, contact }) => {
    return (
        <Container element={
            <div id={id}>
                <h4 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">{title}</h4>
                <ul>
                    <li>{(name.url)? <a href={name.url} target='_blank' className="text-blue-600 font-semibold transition hover:text-blue-800">
                        {name.text}</a>: name.text}
                    </li>
                    <li>{(status)? status : ""}</li>
                    <li>{(tag)? `SIRET : ${tag}` : ""}</li>
                    <li>{(location)? location : ""}</li>
                    <li>{(number)? <a href={`tel:${number}`} className="text-blue-600 font-semibold transition hover:text-blue-800">
                        {number}</a>: ""}
                    </li>
                    <li>{(contact)? <a href={`mailto:${contact}`} className="text-blue-600 font-semibold transition hover:text-blue-800">
                        {contact}</a>: ""}
                    </li>
                </ul>
            </div>
        }
        />
    );
}

export default LegalMentions