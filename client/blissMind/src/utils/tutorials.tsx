export interface Step {
    title: string;
    description: string;
}

export interface Tutorial {
    id: number;
    title: string;
    category: string;
    steps: Step[];
}

export const tutorials: Tutorial[] = [
    {
        id: 1,
        title: "Time Management Essentials",
        category: "Productivity",
        steps: [
            {
                title: "Set Clear Goals",
                description: "Start by setting achievable goals for each day, week, and month. Use tools like planners or digital apps to keep track of your tasks."
            },
            {
                title: "Prioritize Tasks",
                description: "Learn to prioritize tasks using the Eisenhower Box technique, distinguishing between urgent and important tasks."
            },
            {
                title: "Eliminate Distractions",
                description: "Identify your main distractions and find strategies to minimize them while studying or working."
            },
            {
                title: "Use Time Blocks",
                description: "Allocate specific time blocks for different tasks to enhance focus and efficiency."
            },
            {
                title: "Review and Adjust",
                description: "At the end of each week, review what you've accomplished and adjust your plans and strategies for better results."
            }
        ]
    },
    {
        id: 2,
        title: "Effective Study Techniques",
        category: "Education",
        steps: [
            {
                title: "Use Active Recall",
                description: "Test yourself on the material you need to learn, rather than just reading or summarizing it."
            },
            {
                title: "Space Your Study Sessions",
                description: "Space your studies over several days and weeks for better retention of information."
            },
            {
                title: "Create Visual Aids",
                description: "Use diagrams, charts, and mind maps to visually organize information and make it easier to remember."
            },
            {
                title: "Teach What You Learn",
                description: "Explain the material to someone else as if you are teaching it. This can significantly enhance understanding and retention."
            },
            {
                title: "Take Regular Breaks",
                description: "Incorporate short breaks into your study sessions to maintain high levels of concentration and avoid burnout."
            }
        ]
    },
    {
        id: 3,
        title: "Fundamentals of Healthy Eating",
        category: "Health",
        steps: [
            {
                title: "Understand Nutritional Basics",
                description: "Learn about macronutrients and micronutrients to understand what your body needs for optimal health."
            },
            {
                title: "Plan Balanced Meals",
                description: "Ensure each meal contains a balance of protein, fats, and carbohydrates, along with essential vitamins and minerals."
            },
            {
                title: "Stay Hydrated",
                description: "Understand the importance of water in your diet and ensure you're drinking enough throughout the day."
            },
            {
                title: "Limit Processed Foods",
                description: "Reduce intake of processed foods, which can be high in unhealthy fats, sugars, and salts."
            },
            {
                title: "Prepare Your Own Meals",
                description: "Cooking your own meals can help you better control your diet and ensure you're eating fresh and healthy ingredients."
            }
        ]
    },
    {
        id: 4,
        title: "Basics of Financial Literacy",
        category: "Finance",
        steps: [
            {
                title: "Budgeting 101",
                description: "Learn how to plan your spending by creating a detailed budget that accounts for your income and expenses."
            },
            {
                title: "Understanding Savings",
                description: "Discover the importance of saving money and different strategies to start saving effectively."
            },
            {
                title: "Managing Credit",
                description: "Understand how credit works, how to build a credit score, and the implications of debt."
            },
            {
                title: "Investing Basics",
                description: "Learn the basics of investing, including the different types of investments and the risks involved."
            },
            {
                title: "Protect Your Finances",
                description: "Understand the importance of insurance and emergency funds to protect your financial well-being."
            }
        ]
    },
    {
        id: 5,
        title: "Mindfulness for Beginners",
        category: "Well-being",
        steps: [
            {
                title: "Learn Basic Meditation",
                description: "Practice simple meditation techniques to calm your mind and reduce anxiety."
            },
            {
                title: "Incorporate Daily Reflection",
                description: "Set aside time each day to reflect on your thoughts and feelings without judgment."
            },
            {
                title: "Engage in Mindful Breathing",
                description: "Use breathing exercises to anchor yourself in the present moment and relieve stress."
            },
            {
                title: "Practice Gratitude",
                description: "Keep a gratitude journal or take time daily to think about things you are grateful for."
            },
            {
                title: "Attend Mindfulness Workshops",
                description: "Participate in workshops or classes to deepen your understanding of mindfulness techniques."
            }
        ]
    },
    {
        id: 6,
        title: "Public Speaking Skills",
        category: "Communication",
        steps: [
            {
                title: "Master Your Message",
                description: "Know the core message of your speech and the key points you need to communicate."
            },
            {
                title: "Practice Your Delivery",
                description: "Rehearse your speech multiple times, focusing on your tone, pace, and body language."
            },
            {
                title: "Engage Your Audience",
                description: "Learn techniques to connect with your audience, such as asking rhetorical questions or using personal stories."
            },
            {
                title: "Handle Nervousness",
                description: "Use techniques like deep breathing, visualization, and positive self-talk to manage anxiety before and during your speech."
            },
            {
                title: "Seek Feedback",
                description: "Ask for constructive feedback from trusted peers or mentors to improve your public speaking skills."
            }
        ]
    },
    {
        id: 7,
        title: "Career Planning",
        category: "Career Development",
        steps: [
            {
                title: "Assess Your Interests and Skills",
                description: "Identify your strengths and interests to explore career options that suit you."
            },
            {
                title: "Explore Career Options",
                description: "Research different careers and industries to find what excites you and matches your skills."
            },
            {
                title: "Build Professional Connections",
                description: "Start networking by attending industry events, joining professional organizations, and connecting with professionals on LinkedIn."
            },
            {
                title: "Create a Career Plan",
                description: "Develop a detailed career plan that includes short-term and long-term goals and the steps needed to achieve them."
            },
            {
                title: "Continue Learning",
                description: "Engage in continuous learning through courses, workshops, and certifications to stay relevant in your chosen field."
            }
        ]
    },
    {
        id: 8,
        title: "Overcoming Procrastination",
        category: "Personal Development",
        steps: [
            {
                title: "Identify Reasons for Procrastination",
                description: "Understand the underlying reasons why you procrastinate, whether it's fear of failure, perfectionism, or lack of interest."
            },
            {
                title: "Set Small, Manageable Goals",
                description: "Break your tasks into smaller, more manageable parts to avoid feeling overwhelmed."
            },
            {
                title: "Use the Pomodoro Technique",
                description: "Work in short, focused intervals (typically 25 minutes) followed by a short break to maintain high levels of productivity."
            },
            {
                title: "Eliminate Distractions",
                description: "Create a distraction-free environment to improve focus and efficiency."
            },
            {
                title: "Reward Progress",
                description: "Set up a system to reward yourself for completing tasks, which can motivate you to keep moving forward."
            }
        ]
    }
];
