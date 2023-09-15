import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);

    const classes = `transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"
    }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};


export default function Part4() {

    return (
        <div className="relative isolate px-6 pt-0 md:pt-52 3xl:pt-14 lg:px-8" id='who-we-are'>
            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                <div className="">
                    <RevealOnScroll>
                        <div className="font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                            Benvenuti nel cuore della creatività e dell'innovazione: mi presento, mi chiamo GYHMI
                            e sono una Planning Agency, lavoro con un team appassionato di esperti in
                            Management, Planning, Developing, Strategy e Design. La nostra missione è
                            trasformare idee in realtà straordinarie, guidando aziende e personal brand a
                            raggiungere il massimo potenziale in un mondo digitale in continua evoluzione.
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                <div className="">
                    <RevealOnScroll>
                    <div className="font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                        L'avventura di GYHMI è iniziata con una visione comune a tutti i founder: creare
                        esperienze che lasciano un'impronta duratura attraverso le emozioni delle persone,
                        spingendo i confini dell’immaginazione.
                    </div>
                    </RevealOnScroll>
                </div>
            </div>
            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                <div className="">
                    <RevealOnScroll>
                    <div className="font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                        Integrità, Creatività, Collaborazione e Persone. Questi sono i pilastri su cui poggia il
                        nostro lavoro. Siamo impegnati a operare con la massima integrità in ogni aspetto del
                        nostro lavoro. La nostra creatività si esprime nell'arte di trasformare concetti in
                        immagini mozzafiato, campagne coinvolgenti e eventi indimenticabili.
                    </div>
                    </RevealOnScroll>
                </div>
            </div>
            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                <div className="">
                    <RevealOnScroll>
                    <div className="font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                        La collaborazione è la chiave del nostro successo: lavoriamo a stretto contatto con
                        te, valorizzando la tua visione e contribuendo con le nostre competenze a raggiungere
                        risultati insieme.
                    </div>
                    </RevealOnScroll>
                </div>
            </div>
            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                <div className="">
                    <RevealOnScroll>
                    <div className="font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                        Ciò che più ci caratterizza è il valore che diamo alle Persone, ogni progetto è un
                        intimo passo verso la realizzazione di un qualcosa di unico, attraverso le emozioni
                        della tua idea e del nostro team che organizzerà il lavoro con focus su ciò che è il
                        Project Concept.
                    </div>
                    </RevealOnScroll>
                </div>
            </div>
            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                <div className="">
                    <RevealOnScroll>
                    <div className="font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                        Il nostro team è composto da talenti provenienti da background diversi, uniti dalla
                        passione per l'innovazione.
                        Designer visionari, strateghi di marketing astuti, manager brillanti, developer e planner
                        di eventi altamente specializzati si uniscono per creare un potente mix di competenze.
                        Questa sinergia ci permette di offrire soluzioni complete che spaziano dall'identità
                        visiva all'engagement online, dalla pianificazione impeccabile alla realizzazione
                        memorabile.
                    </div>
                    </RevealOnScroll>
                </div>
            </div>
            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                <div className="">
                    <RevealOnScroll>
                    <div className="font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                        In un mondo in cui ogni clic conta e ogni evento è un'opportunità, ci impegniamo a
                        offrire soluzioni che fanno la differenza. Il nostro approccio è basato sull'ascolto
                        attento, sull'innovazione continua e sull'impegno totale nel rendere i tuoi obiettivi i
                        nostri obiettivi.
                    </div>
                    </RevealOnScroll>
                </div>
            </div>
        </div>
    )
}
