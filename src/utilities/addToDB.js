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

const getStoredWishlist = () => {
    const storedStrWishlist = localStorage.getItem("wishlist");
    if(storedStrWishlist) {
        const storedWishlistData = JSON.parse(storedStrWishlist);
        return storedWishlistData;
    }
    else {
        return [];
    }
};

const addToStoredWishlist = (id) => {
    const storedWishlistData = getStoredWishlist();
    if(storedWishlistData.includes(id)) {
        alert("Book Already Added to Wishlist!");
    }
    else {
        storedWishlistData.push(id);
        const data = JSON.stringify(storedWishlistData);
        localStorage.setItem("wishlist", data);
    }
};

export {addToStoredBooks, getStoredBooks, addToStoredWishlist, getStoredWishlist};