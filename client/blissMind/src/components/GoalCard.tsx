// GoalCard.tsx
import React from 'react';
import {Link} from 'react-router-dom';
import {Goal} from '../utils/Goals';

interface GoalCardProps {
    goal: Goal;
}

const GoalCard: React.FC<GoalCardProps> = ({goal}) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="font-bold text-xl">{goal.title}</h2>
            <p className="text-gray-600">{goal.time}</p>
            <p className="mt-2">{goal.description}</p>
            <Link to={`/goal/${goal.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Start Now
                </button>
            </Link>
        </div>
    );
};

export default GoalCard;
