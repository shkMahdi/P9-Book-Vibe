import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { IoPeopleOutline } from 'react-icons/io5';
import { SlDocs } from 'react-icons/sl';

const BookList = ({ books }) => {
    return (
        <div className="w-[95%] md:max-w-6xl mx-auto mt-8">
            {
                books.map((book) =>
                    <div key={book.bookId} className='p-6 rounded-2xl border border-gray-200 flex gap-6 mb-4'>
                        <div className='bg-gray-100 px-12 py-7 w-57.5 rounded-2xl flex justify-center'>
                            <img className='h-41.5' src={book.image} alt="book image" />
                        </div>
                        <div className='space-y-4 w-full'>
                            <p className='text-2xl font-bold'>{book.bookName}</p>
                            <p>By: {book.author}</p>
                            <div className='flex gap-2'>
                                <span className='font-bold'>Tag: </span>
                                {
                                    book.tags.map((tag, id) =>
                                        <div key={id} className="badge badge-soft badge-success mr-1">{tag}</div>)
                                }
                                <p className='flex gap-1 items-center'><FiMapPin />
                                    Year of Publishing: {book.yearOfPublishing}</p>
                            </div>
                            <div className='flex gap-5 '>
                                <p className='flex gap-1 items-center'><IoPeopleOutline />
                                    Publisher: {book.publisher}
                                </p>
                                <p className='flex gap-1 items-center'><SlDocs />
                                    Total Pages: {book.totalPages}
                                </p>
                            </div>
        
                            <div className='flex gap-2 border-t border-t-gray-200 pt-4'>
                                <div className="badge badge-soft badge-lg badge-info">Category: {book.catagory}</div>
                                <div className="badge badge-soft badge-lg badge-warning">Rating: {book.rating}</div>
                                <div className="badge badge-success badge-lg text-white">View Detail</div>
                            </div>
                            
                        </div>
                                
                    </div>
                )
            }
        </div>
    );
};

export default BookList;