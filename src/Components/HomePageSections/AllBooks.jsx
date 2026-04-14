import React, { use } from 'react';
import BookCard from '../UI/BookCard';

const bookData = fetch('/data/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(bookData);
    // console.log(books);

    return (
        <div className="w-[95%] md:max-w-6xl mx-auto mt-8">
            <p className='text-4xl font-bold text-center'>Books</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6'>
                {
                    books.map((book) =>
                        <BookCard key={book.bookId} book={book}></BookCard>   )
                }
            </div>
        </div>
    );
};

export default AllBooks;