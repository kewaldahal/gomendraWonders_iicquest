import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {Tutorial, tutorials} from '../utils/tutorials';
import SessionDetailComponent from "./SessionDetailComponent.tsx";

interface ParamTypes {
    id: string;
}

const SessionPage: React.FC = () => {
    const {id} = useParams<ParamTypes>();
    const tutorial: Tutorial | undefined = tutorials.find(t => t.id === parseInt(id));

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    if (!tutorial) {
        return <div>Tutorial not found</div>;
    }

    const handleNext = () => {
        if (currentStepIndex < tutorial.steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="bg-white min-h-[80vh]">
            <div className="container mx-auto py-10">
                <div className="flex justify-between text-3xl items-center mb-4">
                    <button onClick={handlePrev} className="bg-white shadow-xl p-4 rounded-full"><IoIosArrowBack/>
                    </button>
                    <p className="font-semibold text-3xl text-center">{tutorial.title}:
                        Step {currentStepIndex + 1}/{tutorial.steps.length}</p>
                    <button onClick={handleNext} className="bg-white shadow-xl p-4 rounded-full"><IoIosArrowForward/>
                    </button>
                </div>
                <SessionDetailComponent step={tutorial.steps[currentStepIndex]}/>

                <div className="mt-6 flex justify-center">
                    <button
                        onClick={toggleDetails}
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        {showDetails ? 'Hide Details' : 'Show Details'}
                    </button>
                </div>

                {showDetails && (
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Full Details</h2>
                        <div>
                            <p className="text-xl font-semibold">Category: {tutorial.category}</p>
                            <h3 className="text-xl font-semibold mt-4">Steps:</h3>
                            <ul className="list-disc ml-6">
                                {tutorial.steps.map((step, index) => (
                                    <li key={index} className="mb-2">
                                        <h4 className="font-semibold">{step.title}</h4>
                                        <p>{step.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SessionPage;
