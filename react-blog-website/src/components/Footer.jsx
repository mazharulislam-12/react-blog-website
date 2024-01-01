import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="px-4 pt-16 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
                <div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Category</p>
                            <ul className=" mt-2 space-y-2">
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">News</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">World</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Games</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Reference</a>
                                </li>
                            </ul>
                        </div>
                        {/* catogory 2 */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Apples</p>
                            <ul className=" mt-2 space-y-2">
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Web</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">App</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Portfilo</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Project</a>
                                </li>
                            </ul>
                        </div>
                        {/* catagory 3 */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Cherry</p>
                            <ul className=" mt-2 space-y-2">
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Media</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Brochure</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Project</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Eduction</a>
                                </li>
                            </ul>
                        </div>
                        {/* catagory 4 */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Business</p>
                            <ul className=" mt-2 space-y-2">
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Info</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Personal</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Wiki</a>
                                </li>
                                <li>
                                    <a href="" className="text-gray-500 transition-colors duration-300 hover:text-orange-300">Forum</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=" flex justify-between text-center text-gray-400 mt-10">
                    <p>Copyright 2023 || All right reseved. </p>
                    <div className="flex gap-4">
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaTwitter className="h-6 w-6"></FaTwitter></a>
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaFacebook className="h-6 w-6"></FaFacebook></a>
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaInstagram className="h-6 w-6"></FaInstagram></a>
                        <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaLinkedin className="h-6 w-6"></FaLinkedin></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

// 3.15min