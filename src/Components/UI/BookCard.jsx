import { CiStar } from 'react-icons/ci';

const BookCard = ({book}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='px-24 py-8 bg bg-gray-100'>
                <img
                    className='h-41.5'
                    src={book.image}
                    alt={book.bookName} />
            </figure>
            <div className="card-body">
                <div className='flex'>
                    {
                        book.tags.map((tag, id) =>
                            <div key={id} className="badge badge-soft badge-success mr-2">{tag}</div>)
                    }
                </div>
                <h2 className="card-title text-2xl font-bold">
                    {book.bookName}
                </h2>
                <p className='font-medium border-b border-dashed py-2'>By: {book.author}</p>
                <div className="card-actions justify-between mt-2.5">
                    <div className="font-medium text-black">{book.category}</div>
                    <div className="font-medium text-black flex items-center gap-2">{book.rating} <CiStar></CiStar></div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;