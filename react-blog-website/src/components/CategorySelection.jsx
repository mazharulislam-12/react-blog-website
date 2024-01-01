
const CategorySelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ['Fintech', 'Startups', 'AI', 'Security', 'Tech']

    return (
        <div className="px-4 mb-8 lg:space-x-8 flex flex-wrap items-center border-2 py-5 text-gray-900 font-semibold">
            <button onClick={()=> onSelectCategory(null)} className={`lg: ml-12 ${activeCategory ? "" : "active-button" }`} >  ALL</button>
            {
                categories.map(catagory =>
                    <button
                        onClick={()=> onSelectCategory(catagory)}
                        className= {`mr-2 space-x-16 ${activeCategory === catagory ? "active-button" : ""}`}
                         key={catagory}>
                        {catagory}
                    </button>
                )
            }
        </div>
    );
};

export default CategorySelection;