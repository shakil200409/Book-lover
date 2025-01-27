import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../Utilities/addToDB";
import ListedBook from "./ListedBook";
const ListedBooks = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [readBooks, setReadBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);

  const handleSortBtn = () => {
    setSortOpen(!sortOpen);
  };

  const allBooks = useLoaderData();

  useEffect(() => {
    const readList = getStoredReadList();
    const readBookList = allBooks.filter((book) =>
      readList.includes(book.bookId)
    );
    setReadBooks(readBookList);
  }, []);

  useEffect(() => {
    const wishList = getStoredWishList();
    const booksWishList = allBooks.filter((book) =>
      wishList.includes(book.bookId)
    );
    setWishListBooks(booksWishList);
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-8 bg-base-300 rounded-xl my-10">
        Books
      </h2>
      <div onClick={handleSortBtn} className="flex justify-center">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-600 text-white md:text-lg font-semibold rounded-lg"
          >
            Sort By {sortOpen === true ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-blue-400 text-white rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readBooks.map((book) => (
            <ListedBook key={book.bookId} book={book}></ListedBook>
          ))}
        </TabPanel>
        <TabPanel>
          {wishListBooks.map((book) => (
            <ListedBook key={book.bookId} book={book}></ListedBook>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
