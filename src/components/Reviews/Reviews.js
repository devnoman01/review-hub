import React from "react";
import useReviews from "../../hooks/useReviews";
import Card from "../Card/Card";

const Reviews = () => {
  // destructuring values from useReviews custom hook
  const [reviews, setreviews] = useReviews();

  return (
    <div className="container mx-auto py-10 p-4">
      <h1 className="mb-10 text-5xl font-medium text-center">
        All Reviews from Users
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {/* loading review cards */}
        {reviews.map((review) => (
          <Card key={review.id} review={review}></Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
