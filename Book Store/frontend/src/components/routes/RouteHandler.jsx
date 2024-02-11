import { Routes, Route } from "react-router-dom";
import BookList from "../bookList/BookList";
import BookDetail from "../bookDetail/BookDetail";
import AdminHome from "../adminPage/AdminHome";
import UpdateBook from "../updateBook/UpdateBook";

export const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/detail/:id" element={<BookDetail />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/updatebook/:id" element={<UpdateBook />} />
      </Routes>
    </>
  );
};
