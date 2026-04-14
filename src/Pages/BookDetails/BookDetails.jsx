import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';

const BookDetails = () => {
    const { bookId } = useParams();

    const books = useLoaderData();
    // console.log(books);

    const {handleSelectedBook, handleWishList} = useContext(BookContext);


    const expectedBook = books.find((book) => book.bookId == bookId);
    console.log(expectedBook);
    return (
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row mt-10">

            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
                <img
                    src={expectedBook.image}
                    alt="Book Cover"
                    className="w-64 md:w-72 object-cover rounded-md shadow-lg"
                />
            </div>

            {/* Right - Content */}
            <div className="md:w-1/2 p-6 flex flex-col gap-3">

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-800">
                    {expectedBook.bookName}
                </h1>

                {/* Author */}
                <p className="text-sm text-gray-500">
                    By : {expectedBook.author}
                </p>

                <hr />

                {/* Category */}
                <p className="text-sm text-gray-700">{expectedBook.catagory}</p>

                {/* Review */}
                <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-800">Review:</span>{" "}
                    {expectedBook.review}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium">Tag:</span>
                    {
                        expectedBook.tags.map((tag, id) => 
                            <span key={id} className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">
                                {tag}
                            </span>
                        )
                    }
                </div>

                <hr />

                {/* Info */}
                <div className="text-sm space-y-1">
                    <p>
                        <span className="font-medium">Number of Pages:</span> {expectedBook.totalPages}
                    </p>
                    <p>
                        <span className="font-medium">Publisher:</span> {expectedBook.publisher}
                    </p>
                    <p>
                        <span className="font-medium">Year of Publishing:</span> {expectedBook.yearOfPublishing}
                    </p>
                    <p className="flex items-center gap-1">
                        <span className="font-medium">Rating:</span> {expectedBook.rating} ⭐
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                    <button onClick={() => handleSelectedBook(expectedBook)} className="px-5 py-2 border rounded-md hover:bg-gray-100 transition">
                        Mark As Read
                    </button>
                    <button onClick={() => handleWishList(expectedBook)} className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        Add To Wish List
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;