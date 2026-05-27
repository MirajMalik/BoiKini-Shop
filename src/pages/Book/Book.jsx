const Book = ({book}) => {
    const {
        bookName,
        author,
        image,
        category,
        review,
        totalPages,
        rating,
        tags,
        publisher,
        yearOfPublishing
    } = book;

    return (
        <div className="flex justify-center items-center p-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96 h-96">
                <div className="flex h-full">
                    <div className="w-1/3 h-full">
                        <img 
                            src={image} 
                            alt={bookName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-2/3 h-full p-4 overflow-y-auto">
                        <h1 className="text-lg font-bold text-gray-800 mb-1">
                            {bookName}
                        </h1>
                        
                        <p className="text-xs text-gray-600 mb-2">
                            by <span className="font-semibold">{author}</span>
                        </p>

                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                                {category}
                            </span>
                            {tags && tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full text-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mb-2 pb-2 border-b border-gray-300">
                            <div>
                                <p className="text-gray-600 text-xs">Rating</p>
                                <p className="text-sm font-bold text-yellow-500">
                                    ⭐{rating}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-600 text-xs">Pages</p>
                                <p className="text-sm font-bold text-gray-800">
                                    {totalPages}
                                </p>
                            </div>
                        </div>

                        <div className="mb-2 pb-2 border-b border-gray-300 text-xs text-gray-700">
                            <p><span className="font-semibold">Publisher:</span> {publisher}</p>
                            <p><span className="font-semibold">Published:</span> {yearOfPublishing}</p>
                        </div>

                    
                        <div className="mb-2">
                            <h3 className="font-semibold text-gray-800 mb-1 text-xs">Review</h3>
                            <p className="text-gray-700 text-xs leading-relaxed line-clamp-3">
                                {review}
                            </p>
                            <button className="text-gray-400 text-md cursor-pointer">view more ...</button>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-2 text-xs rounded-lg transition">
                                Add to Cart
                            </button>
                            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 text-xs rounded-lg transition">
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;