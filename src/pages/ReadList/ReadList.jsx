import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../utilities/addToDB';
import MinimalBookCard from '../../components/MinimalBookCard/MinimalBookCard';

const ReadList = () => {
    const [readlist, setReadList] = useState([]);
    const data = useLoaderData();
    
    useEffect(() => {
      const storedBookData = getStoredBooks();
      const convertedStoredBookData = storedBookData.map(id => parseInt(id));
      const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId));  
      setReadList(myReadList);
    }, [])
    
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <h1 className="text-3xl text-center p-6">My ReadList</h1>
                <Tabs>
                    <TabList>
                        <Tab>ReadList</Tab>
                        <Tab>WishList</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="px-4 pb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {readlist.map(book => (
                                    <MinimalBookCard key={book.bookId} book={book} />
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="text-2xl text-center p-6">My WishList</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ReadList;