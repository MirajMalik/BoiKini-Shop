import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({allBooks}) => {
    // console.log(allBooks);
    // const [allBooks, setAllBooks ] = useState([]);

    // data loading way => 1 (UseState + UseEffect)
    // useEffect(()=> {
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setAllBooks(data);
    //     });
            
    // }, []);

    // data loading way => 2 (Promise + Use)
    // const booksPromise = fetch("booksData.json")
    //                      .then(res => res.json())

    return (  
        <div>
            <h1 className="text-3xl text-center p-6"> Books </h1>
            <Suspense fallback={ <span>Loading ...</span> }>       
                {/* <Book booksPromise={booksPromise} />               step-2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allBooks.map(book => (
                         <Book key={book.bookId} book={book}/>
                    ))}
                </div>
                
            </Suspense>
        </div>
    );
};

export default Books;