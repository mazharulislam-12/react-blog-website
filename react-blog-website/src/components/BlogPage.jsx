import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 //blog per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlog() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
            

            // filter catogory
            if (selectedCategory) {
                url += `&catagory =${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlog()
    }, []), [currentPage, pageSize, selectedCategory]

    // page changing btn
    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) =>{
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

    return (
        <div>
            {/* catogory section */}
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} ></CategorySelection>
            </div>

            {/* blog card secton */}
            <div className="flex flex-col lg:flex-row gap-12">
                {/* blog card component */}
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} ></BlogCards>

                {/* sidebar components */}
                <div>
                    <SideBar></SideBar>
                </div>
            </div>

            {/* paganation secton */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} ></Pagination>
            </div>
        </div>
    );
};

export default BlogPage;