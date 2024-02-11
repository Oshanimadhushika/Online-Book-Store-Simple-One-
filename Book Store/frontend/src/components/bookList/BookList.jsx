import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [book_id, setBookId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();

  const navigate = useNavigate();

  const handleAddToDetail = (
    _id,
    book_id,
    title,
    author,
    description,
    price,
    amount
  ) => {
    console.log("idd in book list", book_id);
    axios
      .get(`http://localhost:3500/api/v1/getBook/` + _id)
      .then((response) => {
        const bookDetails = {
          title: response.data.title,
          author: response.data.author,
          description: response.data.description,
          price: response.data.price,
          amount: response.data.amount,
        };

        localStorage.setItem("bookDetails", JSON.stringify(bookDetails));
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/v1/getBook")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-5">
      <Typography
        style={{
          fontSize: "2rem",
          color: "#EF4444",
          fontWeight: "700",
        }}
      >
        Book List
      </Typography>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-5 gap-6 p-2">
        {books.map((book) => (
          <CardActionArea key={book._id}>
            <CardMedia
              component="img"
              height="140"
              image="https://i.pinimg.com/564x/61/d0/63/61d06327afea6562a63d08d0f69232cc.jpg"
              alt="book_img"
            />
            <CardContent style={{ border: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                value={book_id}
                onChange={(e) => setBookId(e.target.value)}
              >
                {book.book_id}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                {book.title}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                {book.author}
              </Typography>

              <hr></hr>

              <button
                className="mt-5 bg-black text-white border-white border-2 flex justify-center p-5"
                type="submit"
                variant="contained"
                onClick={() => {
                  let _id = book.book_id;
                  let title = book.title;
                  let author = book.author;
                  let description = book.description;
                  let price = book.price;
                  let amount = book.amount;

                  setBookId(book_id);
                  setTitle(title);
                  setAuthor(author);
                  setDescription(description);
                  setPrice(price);
                  setAmount(amount);

                  handleAddToDetail(
                    _id,
                    title,
                    author,
                    description,
                    price,
                    amount
                  );
                }}
              >
                <Link to={`/detail/${book._id}`}>Details</Link>
              </button>
            </CardContent>
          </CardActionArea>
        ))}
      </div>
    </div>
  );
};

export default BookList;
