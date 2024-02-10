import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetail = ({  }) => {
  const { book_id } = useParams();
  // const [book_id, setBookId] = useState();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    console.log("iddd",book_id)
    axios.get(`http://localhost:3500/api/v1/getBook/${book_id}`)
      .then((response) => {
        setBookDetails(response.data);
        console.log("dataaa",response.data)
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [book_id]);

  if (!bookDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          {/* Display the image here */}
          <img
            src="https://i.pinimg.com/564x/61/d0/63/61d06327afea6562a63d08d0f69232cc.jpg"
            alt={bookDetails.title}
            style={{ width: "100%" }}
          />
        </div>
        <div className="flex flex-col items-center font-semibold">
          <Typography variant="h4" className="mb-4">
            {bookDetails.title}
          </Typography>
          <Typography variant="h6" className="mb-2">
            Author: {bookDetails.author}
          </Typography>
          <Typography variant="body1" className="mb-2">
            Description: {bookDetails.description}
          </Typography>
          <Typography variant="h6" className="mb-2">
            Price: ${bookDetails.price}
          </Typography>
          <Typography variant="h6" className="mb-4 text-black">
            Amount: {bookDetails.amount}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
