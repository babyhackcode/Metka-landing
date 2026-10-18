import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollSmoother, ScrollTrigger );

import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import Collection from "./Collection/Collection.jsx";
import Statement from "./Statement/Statement.jsx";
import Cta from "./Cta/Cta.jsx";
import Footer from "./Footer/Footer.jsx";
import DynamicIsland from "./DynamicIsland/DynamicIsland.jsx";

function Metka() {
    useGSAP(() => {
        const doSmoothScroll = ScrollSmoother.create({
            wrapper: '#smooth__wrapper',
            content: '#smooth__content',
            smooth: 1,
            effects: true,
        })
        return () => {
            doSmoothScroll.kill()
        };
    }, { dependencies: [], scope: "#root" });

    return (
        <>
            <DynamicIsland />
                <div id="smooth__wrapper">
                    <div id="smooth__content">
                        <Header />
                        <main className="main">
                            <Hero />
                            <Collection />
                            <Statement />
                            <Cta />
                        </main>
                        <Footer />
                    </div>
                </div>
        </>
    )
}

export default Metka;