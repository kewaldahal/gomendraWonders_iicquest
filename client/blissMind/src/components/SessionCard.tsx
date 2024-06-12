import sleep from '../assets/sleep.png'

const SessionCard = () => {
    return (
        <div className="flex flex-col ga-4 rounded">
            <img src={sleep} alt=""/>
            <div>
                <p>Fix sleep schedule</p>
            </div>
        </div>
    );
};

export default SessionCard;