import MuteButton from "../MuteButton/MuteButton.jsx";
import './DynamicIsland.scss'

function dynamicIsland() {
    return (
        <div className='dynamic-island'>
            <div className="dynamic-island__inner">
                <img className="dynamic-island__logo" src='src/assets/logo/White-logo.png' />
                <MuteButton />
            </div>
        </div>
    )
}

export default dynamicIsland;