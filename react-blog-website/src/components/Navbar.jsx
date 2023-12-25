import { NavLink } from "react-router-dom";
import { FaFacebook, FaPinterest, FaPhoneVolume } from "react-icons/fa6";



const Navbar = () => {

    const navItem = [
        {path: '/', link: 'Home'},
        {path: '/about', link: 'About'},
        {path: '/service', link: 'Service'},
        {path: '/blogs', link: 'Blogs'},
        {path: '/contact', link: 'Contact'},
    ]

    return (
        <header className="bg-black">
             
        <nav className="px-4 py-4">
            <a href="" className="text-xl text-white font-bold">Design <span className="text-orange-500">Dk</span> </a>
        </nav>
        {/* nav item large device  */}
        <ul className="md:flex gap-12 text-lg hidden">
            {
                navItem.map(({path, link})=> <li className="text-white" key={path}>
                    <NavLink to={path}>{link}</NavLink>
                </li> )
            }
        </ul>

        {/* menu item */}
        <div  className="text-white lg:flex items-center hidden gap-4">
            <a href="" className="hover:text-orange-500"><FaFacebook / ></a>
            <a href="" className="hover:text-orange-500"><FaPinterest / ></a>
            <a href="" className="hover:text-orange-500"><FaPhoneVolume / ></a>

            <button className="bg-orange-500 px-6 py-3 rounded-md font-medium hover:bg-white hover:text-orange-500 transition-all duration-200  ease-in">Log in</button>

        </div>

        </header>
    );
};

export default Navbar;