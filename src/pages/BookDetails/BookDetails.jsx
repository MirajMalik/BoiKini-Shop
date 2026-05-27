import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/booksData.json")
            .then(res => res.json())
            .then(data => {
                const foundBook = data.find(b => b.bookId === parseInt(id));
                setBook(foundBook);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading book data:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center py-20 text-xl">Loading...</div>;
    }

    if (!book) {
        return (
            <div className="min-h-screen text-center mx-auto py-20 bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Book Not Found</h2>
                <button 
                    onClick={() => navigate("/")}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Back to Books
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <button 
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
            >
                ← Back
            </button>

            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">

                    <div className="md:col-span-1 flex justify-center">
                        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                            <img 
                                src={book.image} 
                                alt={book.bookName}
                                className="w-full max-w-sm h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            {book.bookName}
                        </h1>
                        
                        <p className="text-lg text-gray-600 mb-4">
                            by <span className="font-semibold text-gray-800">{book.author}</span>
                        </p>

                        <div className="flex items-center gap-4 mb-6 flex-wrap">
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-500 font-bold text-lg">★</span>
                                <span className="text-lg font-semibold text-gray-800">{book.rating}</span>
                            </div>
                            <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                                {book.category}
                            </span>
                        </div>

                        {book.tags && book.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {book.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-300">
                            <div>
                                <p className="text-sm text-gray-600 font-semibold">Publisher</p>
                                <p className="text-gray-800">{book.publisher}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-semibold">Year Published</p>
                                <p className="text-gray-800">{book.yearOfPublishing}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-semibold">Total Pages</p>
                                <p className="text-gray-800">{book.totalPages}</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                {book.review}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;