import MuteButton from "../MuteButton/MuteButton.jsx";
import './DynamicIsland.scss'

import dynamicIslandLogo from '../../assets/logo/White-logo.png'

function dynamicIsland() {
    return (
        <div className='dynamic-island'>
            <div className="dynamic-island__inner">
                <img className="dynamic-island__logo" src={dynamicIslandLogo} alt={metka}/>
                <MuteButton />
            </div>
        </div>
    )
}

export default dynamicIsland;