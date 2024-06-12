import SessionCard from "./SessionCard.tsx";

const SessionsCards = () => {
    return (
        <div>
            <p>Start self help sessions.</p>
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