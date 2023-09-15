import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const features = [
    {
        name: 'Ottimizzazione SEO',
        description:
            'La visibilità online è la chiave per il successo.\n' +
            'Garantiremo che il tuo sito web raggiunga le posizioni più alte nei risultati di ricerca.\n'
    },
    {
        name: 'Creazione Siti Web',
        description:
            'Dall\'ideazione alla realizzazione, creiamo piattaforme online che rappresentano la tua\n' +
            'azienda con stile e funzionalità.\n'
    },
    {
        name: 'Gestione Social Media',
        description:
            'I social media sono un potente strumento di comunicazione. Gestiamo\n' +
            'campagne social che catturano l\'attenzione\n' +
            'del tuo pubblico.'
    },
    {
        name: 'Mediazione e Management',
        description:
            'Connettiamo i punti nel mondo digitale e non solo. Troveremo\n' +
            'le partnership giuste per espandere la tua brand awareness'
    },
    {
        name: 'Organizzazione di Eventi Unici',
        description:
            'Da eventi aziendali all\'organizzazione di lanci di prodotti, trasformiamo le tue idee in\n' +
            'eventi straordinari.'
    },
    {
        name: 'Esperienza personalizzata',
        description:
            'La tua visione è la nostra priorità. Lavoriamo a stretto contatto con te per sviluppare\n' +
            'strategie personalizzate che si adattano ai tuoi obiettivi.'
    },
]

export default function Part5() {

    return (
        <div className="bg-black" id='what-we-do'>

            <RevealOnScroll>
            <div className="py-24 sm:py-32 sm:mb-96 md:mb-0" id='features'>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">What We Do</h2>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-5">
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{feature.name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            </RevealOnScroll>
        </div>
    )
}
