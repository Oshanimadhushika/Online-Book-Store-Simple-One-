import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const [book_id, setBookId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/v1/getBook/" + id)
      .then((res) => {
        console.log(res);
        setBookId(res.data.book_id);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setAmount(res.data.amount);
        setPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3500/api/v1/updateBook/" + id, {
        book_id,
        title,
        author,
        description,
        price,
        amount,
      })
      .then((res) => {
        // location.reload()
        alert("Updated");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed");
      });
  };

  return (
    <>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          margingTop: 20,
          fontSize: 40,
        }}
      >
        Book UPDATE
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={Update}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            placeholder="Book_Id"
            value={book_id}
            onChange={(e) => setBookId(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            placeholder="Stock"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          style={{
            color: "white",
            marginLeft: "40px",
            backgroundColor:"black"
            
          }}
        >
          Update
        </Button>
      </Box>
    </>
  );
};
export default UpdateBook;
