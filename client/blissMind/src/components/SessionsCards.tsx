import {tutorials} from '../utils/tutorials';
import SessionCard from "./SessionCard";

const SessionsCards: React.FC = () => {
    return (
        <div>
            <p className="font-semibold text-xl mb-6">Start self help sessions.</p>
            <div className="grid grid-cols-4 gap-8">
                {tutorials.map((tutorial) => (
                    <SessionCard
                        key={tutorial.id}
                        id={tutorial.id}
                        title={tutorial.title}
                        category={tutorial.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default SessionsCards;
