export interface Goal {
    id: number;
    title: string;
    time: string;
    description: string;
    instructions: string[];
}

export const goals: Goal[] = [
    {
        id: 1,
        title: 'Yoga',
        time: '30 mins',
        description: 'Practice yoga to improve flexibility and reduce stress.',
        instructions: [
            'Find a quiet place.',
            'Wear comfortable clothes.',
            'Follow a yoga routine or video.',
            'Focus on your breathing.',
        ],
    },
    {
        id: 2,
        title: 'Meditation',
        time: '20 mins',
        description: 'Meditate to increase mindfulness and mental clarity.',
        instructions: [
            'Sit comfortably in a quiet place.',
            'Close your eyes and relax.',
            'Focus on your breath.',
            'Let thoughts pass without attachment.',
        ],
    },
    {
        id: 3,
        title: 'Running',
        time: '45 mins',
        description: 'Go for a run to boost cardiovascular health and mood.',
        instructions: [
            'Wear comfortable running shoes.',
            'Warm up with some stretches.',
            'Start running at a steady pace.',
            'Cool down and stretch after your run.',
        ],
    },
    {
        id: 4,
        title: 'Reading',
        time: '60 mins',
        description: 'Read a book to expand your knowledge and relax your mind.',
        instructions: [
            'Find a comfortable and quiet place.',
            'Choose a book you enjoy.',
            'Set a timer for uninterrupted reading.',
            'Take notes if needed for better understanding.',
        ],
    },
];