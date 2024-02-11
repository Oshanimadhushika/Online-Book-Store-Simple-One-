import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
// import './AdminDash.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AdminHome = () => {
  const [book_id, setBookId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = () => {
    axios
      .get("http://localhost:3500/api/v1/getBook")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3500/api/v1/book", {
        book_id,
        title,
        author,
        description,
        price,
        amount,
      })
      .then((res) => {
        setBooks([...books, res.data]);
        console.log(books);
        fetchDataFromServer();
        alert("Saved");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed");
      });
  };

  const handleDeleteBook = (id) => {
    axios
      .delete("http://localhost:3500/api/v1/deleteBook/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        BOOK PANEL
      </Typography>

      <Box
        component="form"
        onSubmit={handleBookSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="Book_Id"
          label="Book_Id"
          variant="outlined"
          onChange={(e) => setBookId(e.target.value)}
        />
        <TextField
          name="Title"
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          name="Author"
          label="Author"
          variant="outlined"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          name="Description"
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          name="Price"
          label="Price"
          variant="outlined"
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          name="Stock"
          label="Stock"
          variant="outlined"
          onChange={(e) => setAmount(e.target.value)}
        />

        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
      </Box>

      <TableContainer component={Paper} className="item-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="item-tableH">Book_Id</TableCell>
              <TableCell className="item-tableH" align="right">
                Title
              </TableCell>
              <TableCell className="item-tableH" align="right">
                Author
              </TableCell>
              <TableCell className="item-tableH" align="right">
                Description
              </TableCell>
              <TableCell className="item-tableH" align="right">
                Price
              </TableCell>
              <TableCell className="item-tableH" align="right">
                Stock
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="item-body">
            {books.map((book) => {
              return (
                <TableRow
                  key={book}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {book.book_id}
                  </TableCell>
                  <TableCell align="right">{book.title}</TableCell>
                  <TableCell align="right">{book.author}</TableCell>
                  <TableCell align="right">{book.description}</TableCell>
                  <TableCell align="right">{book.price}</TableCell>
                  <TableCell align="right">{book.amount}</TableCell>
                  <TableCell align="right">
                    <Link to={`/updatebook/${book._id}`}>
                      <Button variant="outlined" color="secondary">
                        Update
                      </Button>
                    </Link>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={(e) => handleDeleteBook(book._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default AdminHome;
