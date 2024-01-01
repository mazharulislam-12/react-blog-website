import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className=" px-4 py-32 bg-black mx-auto">
            <div className=" text-white text-center ">
                <h2 className="text-3xl lg:text-5xl leading-snug font-bold mb-5">Wellcome to Our Blog</h2>
                <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">Start your blog today and join a communtiy of writers and reanders who are passionate about sharing their stories and ideas . we offer everything you need to get started, form helpfull tips </p>
            </div>

            <div className=" text-white text-center ">
                <Link to='/' className=" font-medium hover:text-orange-500 inline-flex py-1 items-center">Learn More <FaArrowRight className="mt-1 ml-2"></FaArrowRight> </Link>
            </div>

        </div>
    );
};

export default Banner;