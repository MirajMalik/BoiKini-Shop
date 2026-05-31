const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-red-700 to-white-800 text-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">About BoiKini</h1>
                    <p className="text-lg opacity-90">Your Personal Book Library & Reading Companion</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            BoiKini is a modern web application designed to help book enthusiasts manage their reading journey. 
                            Whether you're a casual reader or a book lover, BoiKini provides an intuitive platform to explore, 
                            save, and track books you want to read and have already completed.
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="text-3xl mb-3">📚</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Browse Books</h3>
                            <p className="text-gray-600">
                                Explore a curated collection of books across various categories and genres.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="text-3xl mb-3">✅</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Read List</h3>
                            <p className="text-gray-600">
                                Keep track of books you've already read and view detailed information about each.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="text-3xl mb-3">❤️</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Wishlist</h3>
                            <p className="text-gray-600">
                                Save books you want to read later and organize your reading goals.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="text-3xl mb-3">⭐</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ratings & Reviews</h3>
                            <p className="text-gray-600">
                                View ratings and community reviews to help you decide what to read next.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="text-3xl mb-3">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Sorting</h3>
                            <p className="text-gray-600">
                                Sort your books by pages, ratings, and other criteria for better organization.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="text-3xl mb-3">💾</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Local Storage</h3>
                            <p className="text-gray-600">
                                Your reading list and wishlist are saved locally for quick access anytime.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Purpose</h2>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                            BoiKini was created to solve a common problem: how can avid readers keep track of their reading goals 
                            and discover new books in a simple, elegant way?
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            This project demonstrates modern web development practices using React, component-based architecture, 
                            state management, and responsive design. It serves as both a practical tool and a learning platform for 
                            building interactive web applications.
                        </p>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-white-700 to-red-800 text-white font-bold rounded-lg shadow-lg p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Start Your Reading Journey</h2>
                    <p className="text-lg opacity-90 mb-6">
                        Explore our book collection, manage your reading list, and discover your next favorite book.
                    </p>
                    <a 
                        href="/" 
                        className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
                    >
                        Browse Books
                    </a>
                </section>
            </div>
        </div>
    );
};

export default About;