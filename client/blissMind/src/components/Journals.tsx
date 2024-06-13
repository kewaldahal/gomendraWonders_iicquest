import JournalCard from "./JournalCard.tsx";
import {AiOutlinePlus} from "react-icons/ai";
import {useState} from "react";
import {CreateJournal} from "./subComponents/CreateJournal.tsx";
import {Link} from "react-router-dom";


const Journals = () => {
    return (
        <div className={`w-[900px] mx-auto]`}>

            <div>
                <Link to={"/journal/create"}>
                <div className={`flex gap-3 items-center mb-5`}>
                    <p className={`font-semibold`}>Recent Journals</p>
                    <button
                            className={`flex items-center gap-2 px-2 py-2 border-2 border-blue-500 hover:bg-blue-100 transition text-sm font-semibold text-gray-700 rounded-full`}>
                        <AiOutlinePlus/>New
                        Journal
                    </button>
                </div>
            </Link>

                <div className={`flex flex-col gap-8 my-3`}>
                    <JournalCard/>
                    <JournalCard/>
                    <JournalCard/>
                    <JournalCard/>
                </div>

            </div>
        </div>
    )
        ;
};

export default Journals;