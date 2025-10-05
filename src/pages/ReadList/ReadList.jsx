import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import ReadBook from './ReadBook';
import Book from '../Book/Book';

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map(id => parseInt(id));
    const myReadList = data.filter(book =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = type => {
    setSort(type);
    if (type === 'pages') {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPages);
    }
    if (type === 'rating') {
      const sortedByRating = [...readList].sort(
        (a, b) => a.rating - b.rating
      );
      setReadList(sortedByRating);
    }
  };

  return (
    <div className="my-6">
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort by ⬇️ {sort ? sort : ''}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort('pages')}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort('ratings')}>Ratings</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Number of Read Books: {readList.length}</h2>
          <div>
            {readList.map(readBook => (
              <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
