import { useLoaderData } from "react-router-dom";
import { FaUser,FaClock } from "react-icons/fa";
import SideBar from "../components/SideBar";

const SingleBlgo = () => {
    const data = useLoaderData();

    const { title, image, category, author, published_date, reading_time, content } = data[0];


    return (
        <div>
            <div className="py-40  bg-black text-center text-white px-4">
                <h2 className="text-3xl lg:text-5xl leading-snug font-bold mb-5">Single Blog Page</h2>
            </div>

            {/* blog details */}
            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row ">
                <div className="lg:w-3/4 mx-auto">
                    <div>
                        <img src={image} className=" w-full mx-auto rounded" alt="" />
                    </div>
                    <h2 className="text-2xl mt-8 text-blue-500 font-medium">{title}</h2>
                    <p className="mt-2 mb-2 flex items-center gap-3 text-gray-600"> <FaUser></FaUser> {author} | {published_date} </p>
                    <p className="mt-2 mb-2 flex items-center gap-3 text-gray-600"> <FaClock></FaClock> {reading_time}  </p>
                    <p className="text-gray-600 text-base">{content}</p>
                </div>

                <div className="w-1/3">
                    <SideBar></SideBar>
                </div>

            </div>
        </div>
    );
};

export default SingleBlgo;