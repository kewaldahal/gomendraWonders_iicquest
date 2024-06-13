import {Link} from "react-router-dom";

interface SessionCardProps {
    id: number;
    title: string;
    category: string;
}

const SessionCard: React.FC<SessionCardProps> = ({id, title, category}) => {
    return (
        <Link to={`/session/${id}`}>
            <div
                className="flex flex-col border-cyan-400/20 cursor-pointer hover:shadow-lg transition border gap-4 rounded">
                <img
                    src={`https://img.freepik.com/free-vector/happy-young-couple-having-fun-girl-guy-dancing-party-celebrating-good-news-flat-illustration_74855-10820.jpg`}
                    className="rounded-t" alt=""/>
                <div className="p-2 gap-1 flex flex-col">
                    <p className="text-sm font-semibold text-gray-500">{category}</p>
                    <p className="font-semibold">{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default SessionCard;
