import logo from '../assets/logo.jpg'
import {LuUser} from "react-icons/lu";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={`flex justify-between py-3 border-b px-10 items-center`}>
            <div className={`flex items-center gap-8`}>
            <div className={`text-2xl font-semibold`}>
                <img src={logo} className={`h-16 rounded-full`} alt=""/>
            </div>
            <div>
                <ul className={`flex gap-4 font-semibold`}>
                    <Link to={'/'}>
                    <li className={`hover:text-green-600 cursor-pointer`}>Home</li>
                    </Link>
                    <Link to={'/mygoals'}>
                    <li className={`hover:text-green-600 cursor-pointer`}>Daily Goals</li>
                    </Link>
                    <Link to={'/chat'}>
                    <li className={`hover:text-green-600 cursor-pointer`}>Chat</li>
                    </Link>
                    <Link to={'/confessions'}>
                    <li className={`hover:text-green-600 cursor-pointer`}>Confessions</li>
                    </Link>
                    <Link to={'/blogs'}>
                    <li className={`hover:text-green-600 cursor-pointer`}>Articles</li>
                    </Link>
                </ul>
            </div>
            </div>

            <div>
                <LuUser className={`cursor-pointer`} size={`1.5em`} />
            </div>
        </div>
    );
};

export default Navbar;