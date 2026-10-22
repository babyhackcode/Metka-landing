import { MorphIcon } from "morphicons/react";
import { Volume2, VolumeX } from "lucide";
import './MuteButton.scss'

function MuteButton(props) {
    const {
        isMuted,
        onToggle,
    } = props

    return (
            <button className="mute__button" onClick={onToggle}>
                <MorphIcon
                    className="mute__button-icon"
                    icon={isMuted ? VolumeX : Volume2}
                    size={24}
                    strokeWidth={2.5}
                    color="#FFFFFF"
                    spring="bouncy"
                />
            </button>
    )
}

export default MuteButton