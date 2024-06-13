import React, {useEffect, useState} from 'react';

interface Emotion {
    emoji: string;
    label: string;
}

const emotions: Emotion[] = [
    {emoji: '😫', label: 'Terrible'},
    {emoji: '😔', label: 'Sad'},
    {emoji: '😐', label: 'Neutral'},
    {emoji: '😄', label: 'Happy'},
];

const reasons: { [key: string]: string[] } = {
    Terrible: ['😞 Failed Exam', '😡 Argument', '😢 Loss', '😩 Overwhelmed'],
    Sad: ['😔 Lonely', '😕 Disappointed', '😢 Personal Issues', '😒 Unappreciated'],
    Neutral: ['😐 Bored', '😶 Indifferent', '🤔 Contemplative', '🙃 Okay'],
    Happy: ['😊 Accomplished', '🎉 Celebrated', '😍 Loved', '😌 Relaxed'],
};

const Feelings: React.FC = () => {
    const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
    const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
    const [description, setDescription] = useState<string>('');
    const [todayEmotion, setTodayEmotion] = useState<{
        emotion: Emotion | null;
        reasons: string[];
        description: string;
    } | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const getCurrentDate = () => {
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    };

    useEffect(() => {
        const today = getCurrentDate();
        const savedEmotion = localStorage.getItem(today);

        if (savedEmotion) {
            setTodayEmotion(JSON.parse(savedEmotion));
        }
    }, []);

    const handleEmotionSelect = (emotion: Emotion) => {
        setSelectedEmotion(emotion);
        setSelectedReasons([]);
        setDescription('');
        setErrorMessage('');
    };

    const handleReasonSelect = (reason: string) => {
        if (selectedReasons.includes(reason)) {
            setSelectedReasons(selectedReasons.filter(r => r !== reason));
        } else if (selectedReasons.length < 3) {
            setSelectedReasons([...selectedReasons, reason]);
        }
    };

    const handleSubmit = () => {
        if (!selectedEmotion) {
            setErrorMessage('Please select an emotion.');
            return;
        }
        if (selectedReasons.length === 0) {
            setErrorMessage('Please select at least one reason.');
            return;
        }
        if (description.trim() === '') {
            setErrorMessage('Please provide a description.');
            return;
        }

        const today = getCurrentDate();
        const emotionData = {
            emotion: selectedEmotion,
            reasons: selectedReasons,
            description,
        };

        localStorage.setItem(today, JSON.stringify(emotionData));
        setTodayEmotion(emotionData);
        // Reset state after submission
        setSelectedEmotion(null);
        setSelectedReasons([]);
        setDescription('');
        setErrorMessage('');
    };

    return (
        <div className="my-5 py-5 flex flex-col items-center justify-center gap-6">
            {!todayEmotion && <p className="font-medium text-xl">How are you feeling today?</p>}
            {todayEmotion ? (

                <div className="mt-5 flex flex-col items-center gap-4">
                    <p className="font-medium text-lg">
                        You are feeling {todayEmotion.emotion?.label.toLowerCase()} today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {todayEmotion.reasons.map(reason => (
                            <div
                                key={reason}
                                className="px-4 py-2 rounded-full shadow-lg bg-blue-200"
                            >
                                {reason}
                            </div>
                        ))}
                    </div>
                    <p className="font-medium text-lg">
                        Listen to some uplifting music.
                    </p>

                    <iframe
                        className={`w-[900px]`}
                        style={{borderRadius: '12px'}}
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1EIgNoWOvbnUCk?utm_source=generator"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            ) : (
                <>
                    <div className="flex gap-4 text-4xl">
                        {emotions.map(emotion => (
                            <div
                                key={emotion.label}
                                className={`p-6 rounded-full shadow-lg cursor-pointer transition ${
                                    selectedEmotion?.label === emotion.label ? 'bg-gray-200' : 'bg-gray-50 hover:bg-gray-100'
                                }`}
                                onClick={() => handleEmotionSelect(emotion)}
                            >
                                {emotion.emoji}
                            </div>
                        ))}
                    </div>
                    {selectedEmotion && (
                        <div className="mt-5 flex flex-col items-center gap-4">
                            <p className="font-medium text-lg">Why are you
                                feeling {selectedEmotion.label.toLowerCase()}?</p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {reasons[selectedEmotion.label].map(reason => (
                                    <div
                                        key={reason}
                                        className={`px-4 py-2 rounded-full shadow-lg cursor-pointer transition ${
                                            selectedReasons.includes(reason) ? 'bg-blue-200' : 'bg-blue-50 hover:bg-blue-100'
                                        }`}
                                        onClick={() => handleReasonSelect(reason)}
                                    >
                                        {reason}
                                    </div>
                                ))}
                            </div>
                            <textarea
                                className="mt-4 p-2 border rounded-lg w-full max-w-md"
                                rows={4}
                                placeholder="Describe why you feel that way..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {errorMessage && (
                                <p className="text-red-500">{errorMessage}</p>
                            )}
                            <button
                                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Feelings;
