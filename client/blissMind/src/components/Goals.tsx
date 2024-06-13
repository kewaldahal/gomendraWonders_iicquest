// Goals.tsx
import React from 'react';
import GoalCard from './GoalCard';
import {goals} from '../utils/Goals';

const Goals: React.FC = () => {
    return (
        <div className="grid grid-cols-1 container md:grid-cols-2 mx-auto my-10 gap-4">
            {goals.map(goal => (
                <GoalCard key={goal.id} goal={goal}/>
            ))}
        </div>
    );
};

export default Goals;
