import { useState } from "react";
import { BookContext } from "./BookContext";

const BookProvider = ({children}) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleSelectedBook = (selectedBook) => {
        const bookExists = storedBooks.find((book) => selectedBook.bookId === book.bookId);

        if(bookExists){
            alert('The Book is Already Added to the list.');
        }
        else{
            setStoredBooks([...storedBooks, selectedBook]);
            alert(`${selectedBook.bookName} is added to the list`);
        }
    }

    const handleWishList = (selectedBook) => {
        const alreadyRead = storedBooks.find((book) => selectedBook.bookId === book.bookId);

        if(alreadyRead) {
            alert("You've read this book alreay.");
            return;
        }

        setWishList([...wishList, selectedBook])
        alert(`${selectedBook.bookName} is added to your wish list`);
    }

    const data = {
        storedBooks, setStoredBooks, handleSelectedBook, wishList, setWishList, handleWishList
    };

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;
