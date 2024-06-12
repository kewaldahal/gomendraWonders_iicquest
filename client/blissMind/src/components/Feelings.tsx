import {RiEmotionLaughLine, RiEmotionNormalLine, RiEmotionSadLine, RiEmotionUnhappyLine} from "react-icons/ri";

const Feelings = () => {
    return (
        <div className={`my-5 py-5 flex flex-col items-center justify-center gap-6 `}>
            <p className={`font-medium text-xl`}>How are you feeling today?</p>
            <div className={`flex gap-4 text-2xl`}>
                <div className={` p-6 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 bg-gray-50 transition`}>
                    <RiEmotionSadLine/>
                </div>
                <div className={`p-6 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 bg-gray-50 transition`}>
                    <RiEmotionUnhappyLine/>
                </div>
                <div className={`p-6 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 bg-gray-50 transition`}>
                    <RiEmotionNormalLine/>
                </div>
                <div className={`p-6 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 bg-gray-50 transition`}>
                    <RiEmotionLaughLine/>

                </div>
            </div>
        </div>
    );
};

export default Feelings;