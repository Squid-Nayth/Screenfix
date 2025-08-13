import { useState } from 'react'
import { Fragment } from 'react'

import { OptionsModels } from '@constants/index.js'
import { phoneModels } from '@constants/models.js'



const Selection = ({ template = () => {} }) => {
    return (
        <div
        className="absolute z-20 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-72 
        overflow-y-auto animate-fade-in">
            <ul className="divide-y divide-gray-100">
                {template}
            </ul>
        </div>
    );
};

function getModel(label) {
    for (const brand of phoneModels) {
        for (const generation of brand.generations) {
            const found = generation.models.find(m => m.label === label);
            if (found) return found;
        }
    }
    return null;
}


const ModelSelection = ({ brand, onSelect }) => {
    const brandData = phoneModels.find(b => b.brand === brand);
    if (!brandData) return null;

    return (
    <Selection 
        template={brandData.generations.map((generation) => (
        <Fragment key={generation.generation}>
            <li className="px-4 py-2 font-semibold text-gray-700 bg-gray-100">
            {generation.generation}
            </li>
            {generation.models.map((model) => (
            <li
                key={model.value}
                role="option"
                tabIndex="0"
                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-blue-50 focus:bg-blue-100 transition rounded select-none"
                onClick={() => onSelect(model.label)}
            >
                <img src={model.icon} alt={model.label} className="w-6 h-6 opacity-70" />
                <span>{model.label}</span>
            </li>
            ))}
        </Fragment>
        ))}
    />
    );
};



const BrandSelection = ({ onSelect }) => {
    return (
    <Selection 
        template={phoneModels.map((brand) => (
        <li
            key={brand.brand}
            role="option"
            tabIndex="0"
            className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-blue-50 focus:bg-blue-100 transition rounded select-none"
            onClick={() => onSelect({ name: brand.brand, image: brand.image })}
        >
            <img src={brand.image} alt={brand.alt} className="w-6 h-6 opacity-70" />
            <span>{brand.brand}</span>
        </li>
        ))}
    />
    );
};



const Evaluation = () => {

    const initialForm = {
        brand: {name:'', image:''},
        model: '',
        ...Object.fromEntries(
        OptionsModels.map(opt => [opt.value, false])
    )};

    const [form, setForm] = useState(initialForm)
    const handleCheckboxChange = (key) => (e) => {
        setForm({
        ...form,
        [key]: e.target.checked
        });
    }
    const isAnyCheckboxCheck = () => { return OptionsModels.some(opt => form[opt.value]) }
    const getCheckboxNumber = () => { return OptionsModels.reduce((count, opt) => { return form[opt.value] ? count + 1 : count }, 0) }



    const EvalOptions = () => {

        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2 w-full text-base'>
                
            {OptionsModels.map((item) => {
                const model = getModel(form.model)
                const pr = (form.model)? ((model[item.value])? model[item.value] : item.price) : 0
                //
                return (
                    <ReparationOption
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    repairName={item.name}
                    repairValue={item.value}
                    logo={item.image}
                    alternative={item.alt}
                    checked={form[item.value]}
                    onChange={handleCheckboxChange(item.value)}
                    price={(item.value !== 'diagnostic')? (form.diagnostic)? 0 : pr : (isAnyCheckboxCheck() && !form.diagnostic)? 0 : pr}
                    />
                )
            })}
        </div>
        );
    };

    // Brand and Model selection states
    const [selectorState, setSelectState] = useState(0); // 0 = nothing, 1 = brand selector, 2 = model selector

    const toggleBrandMenu = () => {(selectorState === 1)? setSelectState(0): setSelectState(1)}
    const toggleModelMenu = () => {(selectorState === 2)? setSelectState(0): setSelectState(2)}
    
    return (
        <section className="w-screen max-w-none py-20 px-0 bg-white flex justify-center" data-aos="fade-up" id='eval'>
            <div className="w-full max-w-none flex flex-col items-center">
                <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Évaluez votre réparation</h2>
                <div className="w-full max-w-5xl mx-auto bg-white p-8 px-4 md:px-12 rounded-2xl shadow border border-gray-100 
                                space-y-6 text-center">
                    <MenuButton
                        title="Marque de l'appareil"
                        type="brand"
                        description={form.brand.name || "-- Sélectionnez une marque --"}
                        image={form.brand.image}
                        menu={(selectorState === 1)
                            ? <BrandSelection
                                onSelect={(brand) => {
                                setForm((prev) => {
                                    const resetModel = (prev.brand.name !== brand.name)
                                    ? ''
                                    : prev.model;
                                    return {
                                        ...prev,
                                        brand,
                                        model: resetModel
                                    };
                                });
                                setSelectState(0);
                                }}
                            />
                            : null
                        }
                        onClick={toggleBrandMenu}
                    />

                    
                    <MenuButton
                        title="Modèle"
                        type="model"
                        description={form.model || "-- Sélectionnez un modèle --"}
                        image={(getModel(form.model))? getModel(form.model).icon : ''}
                        menu={
                            selectorState === 2 && form.brand.name
                            ? <ModelSelection
                                brand={form.brand.name}
                                onSelect={(model) => {
                                    setForm((prev) => ({
                                    ...prev,
                                    model
                                    }));
                                    setSelectState(0);
                                }}
                                />
                            : null
                        }
                        onClick={toggleModelMenu}
                    />
                    

                    <div className='flex flex-col items-center gap-2'>
                        <label className="block text-base font-medium mb-2 text-center">Types de réparations</label>

                        <div className="flex items-center justify-between w-5/6 mb-2">
                            <span className="text-base text-gray-600">Sélectionnez une ou plusieurs réparations.</span>
                            <span className="text-sm font-semibold text-blue-600 transition-all duration-300">{getCheckboxNumber()} sélectionnée</span>
                        </div>
                        
                        <EvalOptions />


                        <button type="submit" className="hover:cursor-pointer bg-gray-900 hover:bg-gray-800 text-white text-lg 
                                                    font-medium py-3 px-8 rounded-full w-full shadow transition text-center">
                                                        Évaluer
                        </button>
                        <div className='cost-section-container'>
                            <div className='cost-section bg-green-100 p-6 rounded shadow text-center mt-6 border border-green-200 flex 
                                            flex-col items-center'>
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
                                    <label htmlFor="name" className="block text-base font-medium mb-2 text-center">Nom</label>
                                    <input type="text" name="name" className="w-full p-3 border border-gray-300 rounded-lg text-center" required="" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <label htmlFor="email" className="block text-base font-medium mb-2 text-center">Email</label>
                                    <input type="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg text-center" required="" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <label htmlFor="date" className="block text-base font-medium mb-2 text-center">Date du rendez-vous</label>
                                    <input type="date" name="date" className="w-full p-3 border border-gray-300 rounded-lg text-center" required="" />
                                </div>
                                <button type="submit" className="cursor-pointer bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium py-3 px-8 
                                                                rounded-full w-full shadow transition text-center">
                                                                    Envoyer
                                </button>
                                <p className="mt-4 text-sm text-gray-500">
                                    En remplissant notre formulaire, vous acceptez notre 
                                    <a href="politique-confidentialite.html" className="underline hover:text-blue-600"> politique de confidentialité</a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ReparationOption = ({ id, repairName, repairValue, logo, alternative, title, description, price, checked, onChange }) => {
    let priceStyle = price
        ? "text-blue-700 font-semibold text-base px-2 py-1 rounded transition-colors mt-1"
        : "text-blue-700 font-semibold text-base px-2 py-1 rounded transition-colors mt-1 text-gray-400";

    let labelClasses = `
        flex flex-col items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white shadow-sm 
        focus-within:ring-2 focus-within:ring-blue-400 relative transition duration-300 
        ease-in-out will-change-transform 
        ${price ? "group opacity-100 cursor-pointer hover:shadow-lg group-hover:scale-105 group-active:scale-95" : "opacity-50"}
    `;

    return (
        <label id={id} className={labelClasses}>
            
            <input type="checkbox" name={repairName} value={repairValue} checked={checked} onChange={onChange} disabled={!price} className="peer sr-only" />
            <div className='flex flex-col items-center gap-2'>
                <img src={logo} alt={alternative} className="w-10 h-10 opacity-80 transition-transform duration-300 group-hover:scale-125 
                                                            group-hover:opacity-100 group-active:scale-110"/>
                <span className="font-semibold">{title}</span>
                <span className="text-gray-600 text-sm text-center">{description}</span>
            </div>
            <span className={priceStyle}>{(price)? price : "--"} €</span>
            <span class="absolute top-2 right-2 hidden peer-checked:inline-block text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
            </span>
        </label>
    );
}

const MenuButton = ({ title, type, description, image, alternative, menu = null, onClick }) => {
    let imageSrc = (image)? <img src={image} alt={alternative} className="w-6 h-6 opacity-70"/> : null;
    return (
        <div className="flex flex-col items-center gap-2">
            <label htmlFor={type} className="block text-base font-medium mb-2 text-center">{title}</label>
            <div className='relative w-5/6 mx-auto'>
                <button type="button" aria-haspopup="listbox" aria-expanded="false" className="w-full h-11 text-base border
                            border-gray-300 rounded-lg bg-white flex items-center justify-between px-4 focus:outline-none 
                            focus:ring-2 focus:ring-blue-400 transition" onClick={onClick}>
                    <span className="flex items-center gap-2 text-gray-700">
                        {imageSrc}
                        <span className="absolute left-1/2 transform -translate-x-1/2 w-full text-center block">{description}</span>
                    </span>
                    <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="CurrentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                {menu}
                <input type="hidden" id={type} name={type} value={description} required="" />
            </div>
        </div>
    );
}

export default Evaluation;