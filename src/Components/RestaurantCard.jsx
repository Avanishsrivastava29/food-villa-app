 
import UserContext from "../Utils/UserContext";
import { IMG_CDN_URL } from "./Config";
import { useContext } from "react";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {

   const {user}=useContext(UserContext);
    return (
      <div className="card">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
        <h4><i  ></i>{avgRating}  <span>&#9733;</span></h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
          <h4>{user.name}</h4>
        </span>
      </div>
    );
  };
  export default RestaurantCard;