import sleep from '../assets/sleep.png'

const SessionCard = () => {
    return (
        <div className="flex flex-col border-cyan-400/20 cursor-pointer hover:shadow-lg transition border gap-4 rounded">
            <img src={sleep} className={`rounded-t`} alt=""/>
            <div className={`p-2 gap-1 flex flex-col`}>
                <p className={`text-sm font-semibold text-gray-500`}>Habits</p>
                <p className={`font-semibold`}>Fix sleep schedule</p>
            </div>
        </div>
    );
};

export default SessionCard;