const SessionDetailComponent = ({step}) => {
    return (
        <div
            className={`min-h-[500px] max-w-[800px] mx-auto text-center flex items-center justify-center flex-col`}>
            <div className={`bg-white p-16 flex flex-col gap-14 rounded-lg shadow-md`}>
                <p className={`text-3xl font-bold mb-5`}>{step.title}</p>
                <p className={`text-gray-800 text-xl`}>
                    {step.description}
                </p>
            </div>
        </div>
    );
};

export default SessionDetailComponent;
