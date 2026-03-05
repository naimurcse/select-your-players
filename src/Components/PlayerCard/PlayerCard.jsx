import { useState } from "react";
import flagImage from "../../assets/flagImage.png";
import userImage from "../../assets/userImage.png";
import "./PlayerCard.css";

function PlayerCard({ player }) {
  console.log(player);
  const [isSelected, setIsSelected] = useState(false);
  const {
    name,
    img,
    rating,
    price,
    country,
    playing_role,
    batting_style,
    bowling_style,
  } = player;
  return (
    <>
      <div className="card player-card-shadow mb-5 p-4">
        <figure>
          <img className="max-h-50" src={img} alt="Shoes" />
        </figure>
        <div className="mt-4">
          <div className="flex text-center card-title">
            <img className="max-w-5" src={userImage}></img>
            <h2 className="">{name}</h2>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-200 pb-3 mt-4">
            {/* Flag and Country */}
            <div className="flex items-center gap-2">
              <img src={flagImage} alt="" />
              <p>{country}</p>
            </div>

            {/* Playing Role Button */}
            <button className="btn btn-sm">{playing_role}</button>
          </div>

          <div className="mt-4 flex items-center justify-between mb-4">
            <p className="font-bold">Rating</p>
            <p>{rating}</p>
          </div>
          <div className="mt-4 flex items-center justify-between mb-4">
            <p className="font-bold">{batting_style}</p>
            <p>{bowling_style}</p>
          </div>
          <div className="mt-4 flex items-center justify-between mb-4">
            <p className="font-bold">Price: ${price}</p>
            <button
              disabled={isSelected}
              onClick={() => setIsSelected(true)}
              className="btn"
            >
              {isSelected ? "Selected" : "Choose Player"}{" "}
            </button>
          </div>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">All-Rounder</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerCard;
