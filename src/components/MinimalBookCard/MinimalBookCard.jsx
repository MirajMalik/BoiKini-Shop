import { useNavigate } from 'react-router';

const MinimalBookCard = ({ book }) => {
    const navigate = useNavigate();
    
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
            <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                    src={book.image} 
                    alt={book.bookName}
                    className="w-full h-full object-cover hover:scale-105 transition"
                />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1 line-clamp-2 text-sm">
                    {book.bookName}
                </h3>
                <p className="text-xs text-gray-600 mb-2">by {book.author}</p>
                
                <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                        {book.category}
                    </span>
                    <span className="text-yellow-500 text-sm">⭐ {book.rating}</span>
                </div>

                <div className="flex gap-2">
                    <button 
                        onClick={() => navigate(`/bookDetails/${book.bookId}`)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded transition"
                    >
                        View
                    </button>
                    <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold py-2 rounded transition">
                        Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MinimalBookCard;
