const Footer = () => {
    return (
        <div className={`bg-gradient-to-b from-cyan-100 to-white mt-14 py-10`}>
            <div className={`container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5`}>

                <div className={`flex flex-col gap-4`}>
                    <h3 className={`text-xl font-bold`}>About BlissMind</h3>
                    <p className={`text-gray-700`}>BlissMind is dedicated to helping students in Nepal manage stress
                        and find peace through AI chat, meditation guidelines, and a supportive community.</p>
                </div>

                <div className={`flex flex-col gap-4`}>
                    <h3 className={`text-xl font-bold`}>Quick Links</h3>
                    <ul className={`text-gray-700`}>
                        <li><a href="/market" className={`hover:underline`}>Marketplace</a></li>
                        <li><a href="/blogs" className={`hover:underline`}>Blogs</a></li>
                        <li><a href="/about" className={`hover:underline`}>About Us</a></li>
                        <li><a href="/contact" className={`hover:underline`}>Contact</a></li>
                    </ul>
                </div>

                <div className={`flex flex-col gap-4`}>
                    <h3 className={`text-xl font-bold`}>Follow Us</h3>
                    <div className={`flex gap-4`}>
                        <a href="#" className={`text-gray-700 hover:text-emerald-600`}>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className={`text-gray-700 hover:text-emerald-600`}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className={`text-gray-700 hover:text-emerald-600`}>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className={`border-t border-gray-300 mt-10 pt-5 text-center text-gray-700`}>
                <p>&copy; 2024 BlissMind. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
