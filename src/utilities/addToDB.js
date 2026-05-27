const getStoredBooks = () => {
    const storedStrBooks = localStorage.getItem("readList");   // getting string data
    if(storedStrBooks) {
        const storedBookData = JSON.parse(storedStrBooks);     // parse convert it into array
        return storedBookData;
    }
    else {
        return [];
    }
};

const addToStoredBooks = (id) => {
    const storedBookData = getStoredBooks();
    if(storedBookData.includes(id)) {
        alert("Book Already Added!");
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data);                                     // setItem(key,value)
    }
};

export {addToStoredBooks};