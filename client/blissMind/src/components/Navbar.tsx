import {BiMenuAltRight} from "react-icons/bi";

const Navbar = () => {
    return (
        <div className={`flex justify-between py-5 border-b px-10`}>
            <div className={`text-2xl font-semibold`}>lOGO</div>
            <div><BiMenuAltRight size={`2.5em`}/></div>
        </div>
    );
};

export default Navbar;