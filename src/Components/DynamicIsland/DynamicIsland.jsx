import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger );

import MuteButton from "../MuteButton/MuteButton.jsx";
import './DynamicIsland.scss'

import dynamicIslandLogo from '../../assets/logo/White-logo.png'

function dynamicIsland() {
    const dynamicIslandRef = useRef(null);

    useGSAP(() => {
        const hideDynamicIsland = gsap.from(dynamicIslandRef.current, {
            y: "-150%",
            paused: true,
            duration: 0.4,
            ease: "power3.out",
        }).progress(1)

        ScrollTrigger.create({
            strat: "top top",
            end: "max",
            onUpdate: (self) => {
                if (self.direction === 1 && window.scrollY > 70) {
                    hideDynamicIsland.reverse();
                } else if (self.direction === -1) {
                    hideDynamicIsland.play();
                }
            }
        })
    }, { dependencies: [], scope: dynamicIslandRef });

    return (
        <div ref={dynamicIslandRef} className='dynamic-island'>
            <div className="dynamic-island__inner">
                <img className="dynamic-island__logo" src={dynamicIslandLogo} alt='metka' />
                <MuteButton />
            </div>
        </div>
    )
}

export default dynamicIsland;