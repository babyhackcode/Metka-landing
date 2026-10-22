import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createIcons, Check, X } from 'lucide';
gsap.registerPlugin( ScrollTrigger );

import MuteButton from "../MuteButton/MuteButton.jsx";

import dynamicIslandLogo from '../../assets/logo/White-logo.png'
import track1 from '../../assets/audio/Be like this.mp3'
import track2 from '../../assets/audio/I got luck on my side.mp3'
import track3 from '../../assets/audio/Iwd scare.mp3'
import track4 from '../../assets/audio/Sakura.wav'
import track5 from '../../assets/audio/She is.mp3'

import './DynamicIsland.scss'

const playlist = [ track1, track2, track3, track4, track5, ]

function dynamicIsland() {
    const [isMuted, setIsMuted] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(2);
    const [showModal, setShowModal] = useState(true)

    const dynamicIslandRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        if(showModal) return

        audioRef.current = new Audio(playlist[currentTrackIndex]);
        audioRef.current.volume = 0.1;

        audioRef.current.muted = isMuted;

        audioRef.current.onended = () => {
            setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % TRACKS.length);
        };

        audioRef.current.play().catch((err) => {
            console.log("Браузер заблокировал автоплей:", err);
        });

        return () => {
            if (audioRef.current) {
                audioRef.current.muted = isMuted
            }
        }
    }, [currentTrackIndex, showModal]);

    useEffect(() => {
        createIcons({
            icons: {Check, X }
        });
    }, []);

    const handleAnswer = (wantMusic) => {
        setIsMuted(!wantMusic);
        setShowModal(false)
    }

    const toggleMuteIcon = () => {
        const nextMuteState = !isMuted;
        setIsMuted(nextMuteState);

        if (audioRef.current) {
            audioRef.current.muted = nextMuteState;
        }
    }

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
                {showModal ? (
                    <div className="dynamic-island__question">
                        <span>Включим музыку?</span>
                        <div className="dynamic-island__question-button">
                            <button onClick={() => handleAnswer(true)}>
                                <i data-lucide="Check"></i>
                            </button>
                            <button onClick={() => handleAnswer(false)}>
                                <i data-lucide="X"></i>
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <img className="dynamic-island__logo" src={dynamicIslandLogo} alt='metka' />
                        <MuteButton
                            isMuted={isMuted}
                            onToggle={toggleMuteIcon}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default dynamicIsland;