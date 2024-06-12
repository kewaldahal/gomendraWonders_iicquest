import SessionCard from "./SessionCard.tsx";

const SessionsCards = () => {
    return (
        <div>
            <p className={`font-semibold text-xl mb-6`}>Start self help sessions.</p>
            <div>

            </div>
            <div className={`grid grid-cols-4 gap-8`}>
                <SessionCard/>
                <SessionCard/>
                <SessionCard/>
                <SessionCard/>
                <SessionCard/>
            </div>

        </div>
    );
};

export default SessionsCards;