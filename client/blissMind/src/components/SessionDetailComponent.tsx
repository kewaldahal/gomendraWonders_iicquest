const SessionDetailComponent = ({step}) => {
    return (
        <div
            className={`min-h-[500px] max-w-[800px] mx-auto text-center flex items-center justify-center flex-col`}>
            <div className={`bg-gray-100 p-16 flex flex-col gap-14 rounded-lg `}>
                <p className={`text-3xl font-bold mb-5`}>{step.title}</p>
                <p className={`text-gray-800 font-medium text-xl`}>
                    {step.description}
                </p>
            </div>
        </div>
    );
};

export default SessionDetailComponent;
