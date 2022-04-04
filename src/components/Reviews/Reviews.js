import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const Reviews = () => {
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);
  return (
    <div className="container mx-auto py-8 p-4">
      <h1 className="mb-10 text-4xl font-bold text-center">
        All Reviews from Users
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} review={review}></Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
