import {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import SessionDetailComponent from "./SessionDetailComponent.tsx";

const SessionPage = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const stressManagementTutorial = {
        title: "Manage Stress: A Student's Guide",
        category: "Stress Relief",
        steps: [
            {
                title: "Identify Your Triggers",
                description: "Start by identifying what causes you stress. This can be upcoming exams, deadlines, or personal issues. Understanding what triggers your stress is the first step to managing it."
            },
            {
                title: "Practice Deep Breathing",
                description: "Learn and practice deep breathing techniques. Try inhaling for four counts, holding for seven, and exhaling for eight. This method helps reduce stress by increasing the amount of oxygen in your blood."
            },
            {
                title: "Establish a Routine",
                description: "Create a daily routine that includes time for study, activities, and relaxation. Having a structured day can help manage anxiety and stress by providing predictability and a sense of control."
            },
            {
                title: "Exercise Regularly",
                description: "Physical activity can significantly reduce stress. Aim for at least 30 minutes of moderate exercise, like brisk walking or yoga, most days of the week."
            },
            {
                title: "Connect with Friends",
                description: "Social support is vital for managing stress. Spend time with friends or family who uplift you and make you feel supported."
            },
            {
                title: "Seek Professional Help",
                description: "If stress becomes overwhelming, consider seeking help from a counselor or therapist who can provide professional support and strategies."
            }
        ]
    };

    const handleNext = () => {
        if (currentStepIndex < stressManagementTutorial.steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    };

    return (
        <div className={` bg-amber-100 min-h-[80vh]`}>
            <div className={`container mx-auto py-10`}>
                <div className={`flex justify-between text-3xl items-center`}>
                    <button onClick={handlePrev} className={`bg-white shadow-xl p-4 rounded-full`}><IoIosArrowBack/>
                    </button>
                    <p className={`font-semibold text-3xl  text-center `}>{stressManagementTutorial.title}:
                        Step:{currentStepIndex + 1}</p>
                    <button onClick={handleNext} className={`bg-white shadow-xl p-4 rounded-full`}><IoIosArrowForward/>
                    </button>
                </div>

                <SessionDetailComponent step={stressManagementTutorial.steps[currentStepIndex]}/>

            </div>
        </div>
    );
};

export default SessionPage;


