import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks, getStoredWishlist } from '../../utilities/addToDB';
import MinimalBookCard from '../../components/MinimalBookCard/MinimalBookCard';

const ReadList = () => {
    const [readlist, setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [sort, setSort] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const data = useLoaderData();
    
    useEffect(() => {
      const storedBookData = getStoredBooks();
      const convertedStoredBookData = storedBookData.map(id => parseInt(id));
      const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId));  
      setReadList(myReadList);

      const storedWishlistData = getStoredWishlist();
      const convertedStoredWishlist = storedWishlistData.map(id => parseInt(id));
      const myWishlist = data.filter(book => convertedStoredWishlist.includes(book.bookId));
      setWishlist(myWishlist);
    }, []);

    const handleSort = (type) => {
        setSort(type);
        if(activeTab === 0) {
            if(type === "pages") {
                const sortByPage = [...readlist].sort((a,b) => a.totalPages - b.totalPages);
                setReadList(sortByPage);
            }
            if(type === "ratings") {
                const sortByRating = [...readlist].sort((a,b) => a.rating - b.rating);
                setReadList(sortByRating);
            }
        } else {
            if(type === "pages") {
                const sortByPage = [...wishlist].sort((a,b) => a.totalPages - b.totalPages);
                setWishlist(sortByPage);
            }
            if(type === "ratings") {
                const sortByRating = [...wishlist].sort((a,b) => a.rating - b.rating);
                setWishlist(sortByRating);
            }
        }
    }
    
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <h1 className="text-3xl text-gray-500 text-center p-6">My BookList</h1>
                
                <div className="flex justify-end px-4 mb-4">
                    <details className="dropdown">
                        <summary className="btn m-1">sort by {sort ? sort : ""}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
                            <li><a onClick={()=>handleSort("ratings")}>Ratings</a></li>
                        </ul>
                    </details>
                </div>

                <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                    <TabList>
                        <Tab>ReadList</Tab>
                        <Tab>WishList</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="px-4 pb-10">
                            {readlist.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {readlist.map(book => (
                                        <MinimalBookCard key={book.bookId} book={book} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10">
                                    <p className="text-gray-500 text-lg">Your readlist is empty</p>
                                </div>
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="px-4 pb-10">
                            {wishlist.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {wishlist.map(book => (
                                        <MinimalBookCard key={book.bookId} book={book} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10">
                                    <p className="text-gray-500 text-lg">Your wishlist is empty</p>
                                </div>
                            )}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ReadList;