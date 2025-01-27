import { toast } from "react-toastify";

const getStoredReadList = () => {
  const readListStr = localStorage.getItem("read-list");
  if (readListStr) {
    const readList = JSON.parse(readListStr);
    return readList;
  } else {
    return [];
  }
};

const addToReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    toast("Book already exists!");
  } else {
    storedList.push(id);
    toast("Book added successfully");
    const readListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", readListStr);
  }
};

const getStoredWishList = () => {
  const wishListStr = localStorage.getItem("wish-list");
  if (wishListStr) {
    const wishList = JSON.parse(wishListStr);
    return wishList;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const wishList = getStoredWishList();
  if (wishList.includes(id)) {
    toast("Already in the Wish List");
    return;
  } else {
    wishList.push(id);
    toast("Added to the Wish List");
    const wishListStr = JSON.stringify(wishList);
    localStorage.setItem("wish-list", wishListStr);
  }
};

export { addToReadList, addToWishList, getStoredReadList, getStoredWishList };
