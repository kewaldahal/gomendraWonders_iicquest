const Subscription = () => {
    return (
        <div className={`py-16 bg-white`}>
            <div className={`container mx-auto px-5`}>
                <h2 className={`text-3xl font-bold text-center mb-10`}>Choose Your Plan</h2>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10`}>

                    {/* Free Plan */}
                    <div className={`border p-6 rounded-lg shadow-lg`}>
                        <h3 className={`text-2xl font-bold mb-4`}>Free</h3>
                        <p className={`text-gray-700 mb-6`}>Access basic features and join our community for free.</p>
                        <div className={`flex justify-between items-center mb-6`}>
                            <span className={`text-xl font-semibold`}>Monthly</span>
                            <span className={`text-xl font-bold`}>$0</span>
                        </div>
                        <div className={`flex justify-between items-center mb-6`}>
                            <span className={`text-xl font-semibold`}>Yearly</span>
                            <span className={`text-xl font-bold`}>$0</span>
                        </div>
                        <ul className={`text-gray-700 list-disc list-inside`}>
                            <li>Basic AI Chat</li>
                            <li>Access to Community Blogs</li>
                            <li>Basic Meditation Guidelines</li>
                        </ul>
                    </div>

                    {/* Paid Plan */}
                    <div className={`border p-6 rounded-lg shadow-lg`}>
                        <h3 className={`text-2xl font-bold mb-4`}>Paid</h3>
                        <p className={`text-gray-700 mb-6`}>Unlock premium features for a complete experience.</p>
                        <div className={`flex justify-between items-center mb-6`}>
                            <span className={`text-xl font-semibold`}>Monthly</span>
                            <span className={`text-xl font-bold`}>$9.99</span>
                        </div>
                        <div className={`flex justify-between items-center mb-6`}>
                            <span className={`text-xl font-semibold`}>Yearly</span>
                            <span className={`text-xl font-bold`}>$99.99</span>
                        </div>
                        <ul className={`text-gray-700 list-disc list-inside`}>
                            <li>Virtual Therapy Sessions</li>
                            <li>Premium Personalized AI</li>
                            <li>Personal Meditation and Yoga Instructor</li>
                            <li>Premium Video Tutorials</li>
                            <li>Advanced Stress Management Techniques</li>
                            <li>Exclusive Community Access</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
