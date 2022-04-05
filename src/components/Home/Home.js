import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Card from "../Card/Card";
import "./Home.css";

const Home = () => {
  const [reviews, setreviews] = useReviews();
  const featuredReviews = reviews.slice(0, 3);

  const navigate = useNavigate();

  const showAllReviews = () => {
    const path = `/reviews`;
    navigate(path);
  };

  return (
    <div className="home w-full">
      <div className="container py-8 mx-auto">
        {/* banner section */}
        <div className="py-10 px-4 grid grid-cols-1 md:grid-cols-2 justify-evenly align-middle">
          <div className="px-5 my-auto text-left">
            <h1 className="text-6xl font-bold text-left">
              Stylish Wireless{" "}
              <span className="text-[#00cba9]">Bluetooth Headphone</span>
            </h1>
            <p className="text-xl mx-auto my-5 font-medium">
              Headphone that make you feel the pure beat. Features like compact
              fold-up design, adjustable headband and long lasting battery life
              makes it the best choice.
            </p>
            <button className="mt-3 px-5 py-2 rounded-md bg-[#00cba9] text-white font-medium">
              Buy Now
            </button>
          </div>
          <div className="px-3 my-auto justify-center">
            <img
              src="https://gadgetnmusic.com/wp-content/uploads/2021/10/2021101513112716342746879424.png"
              className="banner-img"
              alt="logo"
            />
          </div>
        </div>

        {/* customer review section  */}
        <div className=" my-10 p-4">
          <div className="justify-center my-10">
            <h1 className="my-4 text-4xl font-bold text-center">
              User Reviews
            </h1>

            <div className="my-10 grid grid-cols-3 gap-6">
              {featuredReviews.map((review) => (
                <Card key={review.id} review={review}></Card>
              ))}
            </div>
            <button
              onClick={showAllReviews}
              className="mt-3 px-3 py-2 rounded-md bg-[#00cba9] text-white font-medium"
            >
              See All Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
