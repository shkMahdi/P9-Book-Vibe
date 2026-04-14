import { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {

    const {storedBooks, wishList} = useContext(BookContext);
    console.log(storedBooks, wishList);
    return (
        <div>
            <p>Books</p>
        </div>
    );
};

export default Books;