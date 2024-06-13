import {AiOutlineEdit} from "react-icons/ai";

const JournalCard = () => {
    return (
        <div className={``}>
            <div className={`flex items-center gap-3`}>
                <p className={`font-medium`}>{new Date().toDateString()}</p>
                {/*<button*/}
                {/*    className={`flex items-center gap-2 px-2 border-2 border-blue-500 hover:bg-blue-100 transition text-sm font-semibold text-gray-700 rounded-full`}>*/}
                {/*    <AiOutlineEdit/>Edit*/}
                {/*    Journal*/}
                {/*</button>*/}
            </div>
            <p className={`font-medium cursor-pointer text-gray-800 line-clamp-3`}>Lorem ipsum dolor sit amet,
                consectetur adipisicing
                elit. Aperiam
                architecto
                at dolore error est
                excepturi exercitationem impedit ipsa, iste iure minus modi non numquam odit perspiciatis quam quas quia
                quidem quis sint soluta tempora temporibus totam! Nam numquam, porro?</p>
        </div>
    );
};

export default JournalCard;