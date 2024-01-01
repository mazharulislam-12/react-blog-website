import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
    const filterdBlogs = blogs.filter((blogs) => !selectedCategory || blogs.category === selectedCategory).slice((currentPage - 1)*pageSize, currentPage * pageSize );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                filterdBlogs.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id} className="p-5 rounded-md shadow-md">
                    <div>
                        <img src={blog.image} className="w-full" alt="" />
                    </div>

                    <div>
                        <h2 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h2>
                        <p className="mb-2 text-gray-500"> <FaUser className="inline-flex items-center mr-2"></FaUser> {blog.author}</p>
                        <p className="text-sm text-gray-500"> Publish: {blog.published_date}</p>
                    </div>
                </Link>)

            }
        </div>
    );
};

export default BlogCards;