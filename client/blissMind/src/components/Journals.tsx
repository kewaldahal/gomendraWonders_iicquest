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

// import { AiOutlinePlus } from "react-icons/ai";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import JournalCard from "./JournalCard";
// import { serverApi } from "../Auth/AuthProvider";
//
// type JournalType = {
//     _id: string;
//     title: string;
//     description: string;
//     createdAt: string;
// };
//
// const Journals = () => {
//     const [journals, setJournals] = useState<JournalType[]>([]);
//
//     useEffect(() => {
//         const fetchJournals = async () => {
//             try {
//                 const response = await serverApi.get("/journals");
//                 setJournals(response.data.data);
//             } catch (error) {
//                 console.error("Error fetching journals:", error);
//             }
//         };
//
//         fetchJournals();
//     }, []);
//
//     return (
//         <div className={`w-[900px] mx-auto`}>
//             <div>
//                 <div className={`flex gap-3 items-center mb-5`}>
//                     <p className={`font-semibold`}>Recent Journals</p>
//                     <Link to={"/journal/create"}>
//                         <button
//                             className={`flex items-center gap-2 px-2 py-2 border-2 border-blue-500 hover:bg-blue-100 transition text-sm font-semibold text-gray-700 rounded-full`}
//                         >
//                             <AiOutlinePlus /> New Journal
//                         </button>
//                     </Link>
//                 </div>
//
//                 <div className={`flex flex-col gap-8 my-3`}>
//                     {journals.map((journal) => (
//                         <JournalCard key={journal._id} journal={journal} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Journals;
