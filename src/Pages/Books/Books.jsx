import { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookList from '../../Components/UI/BookList';

const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext);
    return (
        <div className="w-[95%] md:max-w-6xl mx-auto mt-8">
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <BookList books={storedBooks}></BookList>
                </TabPanel>
                <TabPanel>
                    <BookList books={wishList}></BookList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;