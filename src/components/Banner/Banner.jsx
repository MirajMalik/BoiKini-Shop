import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
    <div className="hero bg-base-100 mt-3 shadow-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
                src={bookImage}
                className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
                <h1 className="text-5xl font-bold">Discover Your Next Great Read</h1>
                <p className="py-6">
                    Explore our curated collection of books from bestselling authors and timeless classics. 
                    Whether you're looking for fiction, drama, dystopian tales, or hidden gems, 
                    BoiKini has something special waiting for you. Start your literary journey today!
                </p>
                <button className="btn btn-primary bg-gray-900 hover:bg-gray-700">Buy Books</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;