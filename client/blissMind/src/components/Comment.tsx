const Comment = () => {
    return (
        <div className={`p-2 rounded bg-gray-100 `}>
            <div className={`flex gap-3.5 items-center`}>
                <img src="https://avatar.iran.liara.run/public" className={`w-8 h-8 bg-red-200 rounded-full`} alt=""/>
                <div className={`flex flex-col gap-0`}>
                    <p className={`font-semibold text-sm`}>Kamal Thapaliya</p>
                    <p className={`text-xs font-semibold text-gray-500`}>an hour ago</p>
                </div>
            </div>
            <p className={`text-gray-600 text-sm font-medium mt-2`}>Now lets all stand at attention for the National
                Anthem
                of
                Florida</p>
        </div>
    );
};

export default Comment;