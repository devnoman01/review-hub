import React from "react";
import Rating from "react-rating";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  // generating random rating value
  const randomRating = (Math.random() * (5 - 3) + 3).toFixed(1);
  const { name, review_text, picture } = props.review;
  const thumbsUpColor = randomRating >= 4 ? "#00cba9" : "darkgray";

  return (
    // review card item
    <div className="card p-5 border-2 border-gray-200 rounded-md shadow-lg">
      {/* review heading part */}

      <div className="flex align-middle">
        <img src={picture} className="w-8 h-8 rounded-full" alt="" />
        <h2 className="ml-3 my-auto text-xl font-semibold">{name}</h2>
      </div>

      {/* review text part */}

      <p className="text-lg my-5 text-justify text-gray-600">{review_text}</p>

      {/* rating part */}

      <div className="flex justify-between align-middle">
        <p className="text-left font-medium text-gray-500">
          Rating:{"  "}
          <Rating
            initialRating={randomRating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "#FFD700" }} icon={faStar} />
            }
            readonly
          ></Rating>
          {"  "} ({randomRating})
        </p>
        <FontAwesomeIcon style={{ color: thumbsUpColor }} icon={faThumbsUp} />
      </div>
    </div>
  );
};

export default Card;
