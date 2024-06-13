import JournalCard from "./JournalCard.tsx";
import {AiOutlinePlus} from "react-icons/ai";

const Journals = () => {
    return (
        <div>
            <div className={`flex gap-3 items-center mb-5`}>
                <p className={`font-semibold`}>Recent Journals</p>
                <button
                    className={`flex items-center gap-2 px-2 py-2 border-2 border-blue-500 hover:bg-blue-100 transition text-sm font-semibold text-gray-700 rounded-full`}>
                    <AiOutlinePlus/>New
                    Journal
                </button>
            </div>

            <div className={`flex flex-col gap-8 my-3`}>
                <JournalCard/>
                <JournalCard/>
                <JournalCard/>
                <JournalCard/>
            </div>

        </div>
    );
};

export default Journals;