import { useState, Fragment } from 'react'

import Selection from '@components/Selection'
import Popup from '@components/Popup'


import { OptionsModels, RdvOptions } from '@constants/index'
import { phoneModels } from '@constants/models'



function getModel(label) {
    for (const brand of phoneModels) {
        for (const generation of brand.generations) {
            const found = generation.models.find(m => m.label === label);
            if (found) return found;
        }
    }
    return null;
}

function getBrand(brandName) {
    return phoneModels.find(b => b.brand === brandName) || null;
}

function getBrandImage(brandName) {
    if(!brandName) return null;
    return getBrand(brandName).image || null;
}

const ModelSelection = ({ brand, onSelect }) => {
    const brandData = getBrand(brand);
    if (!brandData) return null;

    return (
    <Selection 
        template={brandData.generations.map((generation) => (
        <Fragment key={generation.generation}>
            <li className="px-4 py-2 font-semibold text-gray-700 bg-gray-100 relative">
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
            onClick={() => onSelect(brand.brand)}
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
        brand: '',
        model: '',
        totalPrice: 0,
        totalReduction: 0,
        ...Object.fromEntries( OptionsModels.map(opt => [opt.value, false]) )
    };

    const [form, setForm] = useState(initialForm)
    const handleCheckboxChange = (key) => (e) => {
        setForm({
        ...form,
        [key]: e.target.checked
        });
    }
    const isAnyCheckboxCheck = () => { return OptionsModels.some(opt => form[opt.value]) }
    const getCheckboxNumber = () => {
        return OptionsModels.reduce((count, opt) => { return form[opt.value] ? count + 1 : count }, 0)
    }

    const [isEvaluated, setEvaluated] = useState(false)

    const RdvSection = () => {
        
        const [rdvForm, setRdvForm] = useState({ ...Object.fromEntries( RdvOptions.map(rdvOpt => [rdvOpt.htmlFor, '']) ) });
        const initialPopups = {
            fail: false,
            success: false,
            fatal:false,
            alreadySent: false,
        }
        const [popups, setPopups] = useState(initialPopups)

        function handleSendingButton() {
            if(popups.success || popups.fail || popups.fatal) return

            setPopups((prev) => ({
                ...prev,
                fail:!isAnyCheckboxCheck(),
                success:isAnyCheckboxCheck() && !prev.fail,
            }))

        }

        // Check what popup template to use
        let actualPopup = 0
        if(!isAnyCheckboxCheck()) {
            actualPopup
        }
        return (
            <>
            <div className='max-w-lg mx-auto bg-white p-8 rounded-2xl shadow border border-gray-100 space-y-6 text-center'>
                {RdvOptions.map((item) => (
                    <div key={item.id} className="flex flex-col items-center">
                    <label htmlFor={item.htmlFor} className="block text-base font-medium mb-2 text-center">{item.title}</label>
                    <input
                        type={item.type}
                        name={item.htmlFor}
                        value={rdvForm[item.htmlFor] || ""}
                        onChange={(e) => {
                        setRdvForm((prev) => ({
                            ...prev,
                            [item.htmlFor]: e.target.value
                        }));
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg text-center"
                        required
                    />
                    </div>
                ))}

                <button 
                type="submit" 
                className={`bg-gray-900 text-white text-lg font-medium py-3 px-8 
                            rounded-full w-full shadow transition text-center 
                            ${!Object.values(rdvForm).every(value => value.trim() !== "") || popups.alreadySent ? "opacity-50 cursor-not-allowed" : " hover:bg-gray-800 cursor-pointer"}`}
                disabled={!Object.values(rdvForm).every(value => value.trim() !== "") || popups.alreadySent}
                onClick={handleSendingButton}>
                            Envoyer
                </button>
                <p className="mt-4 text-sm text-gray-500">
                    En remplissant notre formulaire, vous acceptez notre 
                    <a href="politique-confidentialite.html" target='_blank' className="underline hover:text-blue-600"> politique de confidentialité</a>.
                </p>
            </div>

            {popups.success && !popups.alreadySent &&
                <Popup
                    message="Votre demande a bien été envoyée. Vous recevrez un email de confirmation."
                    type="INFO"
                    duration={3000}
                    onClose={() => {
                        setPopups((prev) => ({ ...prev, success:false, alreadySent:true}))

                        // TODO: Handle email trasnfert inside the popup
                    }}
                />
            }
            {popups.fail && !popups.alreadySent &&
                <Popup
                    message="Merci d’évaluer votre produit avant de prendre rendez-vous."
                    type="WARNING"
                    duration={3000}
                    onClose={() => setPopups((prev) => ({ ...prev, fail:false}))}
                />
            }
            {popups.fatal &&
                <Popup
                    message="Erreur lors de l’envoi du mail. Merci de réessayer."
                    type="ERROR"
                    duration={3000}
                    onClose={() => setPopups((prev) => ({ ...prev, fatal:false}))}
                />
            }
            </>
            
        );
    };

    const EvalOptions = () => {

        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2 w-full text-base'>
                
            {OptionsModels.map((item) => {
                const model = getModel(form.model)
                const pr = (form.model)? ((model[item.value])? model[item.value] : item.price) : 0

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

    const [selectorState, setSelectState] = useState(0); // 0 = nothing, 1 = brand selector, 2 = model selector
    

    const toggleBrandMenu = () => {(selectorState === 1)? setSelectState(0): setSelectState(1)}
    const toggleModelMenu = () => {(selectorState === 2)? setSelectState(0): setSelectState(2)}
    
    function handleEvaluationButton() {
        setForm((prevForm) => {
            const number = OptionsModels.reduce(
                (count, opt) => prevForm[opt.value] ? count + 1 : count,
                0
            );

            const modelData = getModel(prevForm.model);
            if (!modelData) return prevForm;

            let total = prevForm.diagnostic ? 35 : 0;

            Object.keys(prevForm).forEach(key => {
                if (prevForm[key] === true && modelData[key] != null) {
                    total += modelData[key];
                }
            });

            return {
                ...prevForm,
                totalReduction: (5 + Math.min(number, 3) * 10)/100,
                totalPrice: total
            };
        });
        setEvaluated(true);
    }

    let EvaluateButtonStyle = `bg-gray-900  text-white text-lg font-medium py-3 px-8 
                                rounded-full w-full shadow transition text-center 
                                ${(isAnyCheckboxCheck())? 'hover:bg-gray-800 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`

    return (
         <section className="w-screen max-w-none py-20 px-0 bg-white flex justify-center" data-aos="fade-up" id='eval'>
            <div className="w-full max-w-none flex flex-col items-center">
                <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Évaluez votre réparation</h2>
                
                <div className="w-full max-w-5xl mx-auto bg-white p-8 px-4 md:px-12 rounded-2xl shadow border border-gray-100 
                                space-y-6 text-center">
                    <MenuButton
                        title="Marque de l'appareil"
                        type="brand"
                        description={form.brand || "-- Sélectionnez une marque --"}
                        image={getBrandImage(form.brand)}
                        menu={(selectorState === 1)
                            ? <BrandSelection
                                onSelect={(brand) => {
                                setForm((prev) => {
                                    const resetModel = (prev.brand !== brand)
                                    ? ''
                                    : prev.model;
                                    return {
                                        ...prev,
                                        brand,
                                        model: resetModel
                                    };
                                });
                                setEvaluated(false);
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
                            selectorState === 2 && form.brand
                            ? <ModelSelection
                                brand={form.brand}
                                onSelect={(model) => {
                                    setForm((prev) => ({
                                    ...prev,
                                    model
                                    }));
                                    setSelectState(0);
                                    setEvaluated(false)
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


                        <button type="submit" 
                        disabled={!isAnyCheckboxCheck()}
                        onClick={handleEvaluationButton}
                        className={EvaluateButtonStyle}>
                                    Évaluer
                        </button>

                        <div className={(isEvaluated)? 'block' : 'hidden' }>
                            <div className='cost-section bg-green-100 p-6 rounded shadow text-center mt-6 border border-green-200 flex 
                                            flex-col items-center'>
                                <div className='block'>
                                    <h4 className='text-xl font-bold mb-2 text-center'>Votre coût estimé</h4>
                                    <p className="mb-2 text-gray-700 text-center">Prix inclus : Main d'oeuvre + Garantie 3 mois.</p>
                                    <figure className="cost-amount stat stat-reduced mb-4 text-center">
                                        <span className="text-2xl font-semibold">
                                            {(form.diagnostic && form.totalPrice === 35)? <span className="text-blue-700 font-bold">{form.totalPrice} €</span> : 
                                                <>
                                                <span className="line-through text-gray-400 mr-2">{form.totalPrice} €</span>
                                                <span className="text-blue-700 font-bold">{form.totalPrice - (form.totalPrice * form.totalReduction)} €</span>
                                                </>
                                            }
                                            
                                        </span>
                                    </figure>
                                </div>
                            </div>
                            <div className="w-full flex justify-center my-10">
                                <span className='h-0.5 w-32 bg-gray-200 rounded-full'/>
                            </div>
                            <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Prenez rendez-vous</h2>

                            <RdvSection />

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
            <span className="absolute top-2 right-2 hidden peer-checked:inline-block text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
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