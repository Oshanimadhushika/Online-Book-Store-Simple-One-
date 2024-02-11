import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetail = ({}) => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    console.log("iddd", id);
    axios
      .get(`http://localhost:3500/api/v1/getBook/` + id)
      .then((response) => {
        setBookDetails(response.data);
        console.log("dataaa", response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, []);

  if (!bookDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <img
            src="https://i.pinimg.com/564x/61/d0/63/61d06327afea6562a63d08d0f69232cc.jpg"
            alt={bookDetails.title}
            style={{ width: "100%" }}
          />
        </div>

        <div
          className="flex flex-col items-center font-semibold p-10 h-2/3 mt-40"
          style={{
            background: "#8B4513",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <parent variant="h4" className="mb-4 text-xl text-white text-center">
            Title: {bookDetails.title}
          </parent>
          <p className="mt-2 text-xl text-white text-center">
            Author: {bookDetails.author}
          </p>
          <p className="mt-2 text-white text-center">
            Description: {bookDetails.description}
          </p>
          <p className="mt-2 text-xl text-white text-center">
            Price: <span className="font-semibold ">LKR </span>
            {bookDetails.price}
          </p>

          <p className="mt-4  font-semibold text-xl text-white text-center">
            Stock: {bookDetails.amount}
          </p>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
