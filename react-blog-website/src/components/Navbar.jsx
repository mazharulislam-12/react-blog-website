import { NavLink } from "react-router-dom";
import { FaFacebook, FaPinterest, FaPhoneVolume, FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItem = [
        { path: '/', link: 'Home' },
        { path: '/about', link: 'About' },
        { path: '/service', link: 'Service' },
        { path: '/blogs', link: 'Blogs' },
        { path: '/contact', link: 'Contact' },
    ]

 

    return (
        <header className="bg-black text-white fixed top-0 left-0 right-0">

            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <a href="" className="text-xl text-white font-bold">Design <span className="text-orange-500">Dk</span> </a>

                {/* nav item large device  */}
                <ul className="md:flex gap-12 text-lg hidden">
                    {
                        navItem.map(({ path, link }) => <li className="text-white" key={path}>
                            <NavLink className={({isActive, isPending}) => 
                            isActive 
                            ? "active"
                            :isPending
                            ? "pending"
                            : ""

                         } to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>

                {/* menu item */}
                <div className="text-white lg:flex items-center hidden gap-4">
                    <a href="" className="hover:text-orange-500"><FaFacebook /></a>
                    <a href="" className="hover:text-orange-500"><FaPinterest /></a>
                    <a href="" className="hover:text-orange-500"><FaPhoneVolume /></a>

                    <button  className="bg-orange-500 px-6 py-3 rounded-md font-medium hover:bg-white hover:text-orange-500 transition-all duration-200  ease-in">Log in</button>

                </div>

                


                {/* mobile menu btn */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="cursor-pointer">
                        {
                            isMenuOpen ? <FaXmark className="w-5 h-5 "></FaXmark> : <FaBars className="w-5 h-5"></FaBars>

                        }
                    </button>
                </div>

            </nav>

            {/* menu item only for mobile */}

            <div>
                <ul className= {`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 " : 'hidden' }`}>
                    {
                        navItem.map(({ path, link }) => <li className="text-black" key={path}>
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>

        </header>
    );
};

export default Navbar;

{/* 1.2 min vedio */ }