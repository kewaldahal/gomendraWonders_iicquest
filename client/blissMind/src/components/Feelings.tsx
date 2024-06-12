import {RiEmotionLaughLine, RiEmotionNormalLine, RiEmotionSadLine, RiEmotionUnhappyLine} from "react-icons/ri";

const Feelings = () => {
    return (
        <div className={`my-10 flex flex-col items-center justify-center gap-6`}>
            <p className={`font-medium text-2xl`}>How are you feeling today?</p>
            <div className={`flex gap-4 text-4xl`}>
                <div className={`bg-amber-100 p-6 rounded-full shadow-lg cursor-pointer hover:bg-amber-200 transition`}>
                    <RiEmotionSadLine/>
                </div>
                <div className={`bg-amber-100 p-6 rounded-full shadow-lg cursor-pointer hover:bg-amber-200 transition`}>
                    <RiEmotionUnhappyLine/>
                </div>
                <div className={`bg-amber-100 p-6 rounded-full shadow-lg cursor-pointer hover:bg-amber-200 transition`}>
                    <RiEmotionNormalLine/>
                </div>
                <div className={`bg-amber-100 p-6 rounded-full shadow-lg cursor-pointer hover:bg-amber-200 transition`}>
                    <RiEmotionLaughLine/>

                </div>
            </div>
        </div>
    );
};

export default Feelings;