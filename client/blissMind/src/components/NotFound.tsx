const NotFound = () => {
    return (
        <div className={`h-[600px] container mx-auto grid place-items-center`}>
            <div className={    `w-full text-center`}>
                <p className={`text-4xl font-light`}>404 Not found</p>
                <p>Page doesnt exists.</p>
            </div>
        </div>
    );
};

export default NotFound;