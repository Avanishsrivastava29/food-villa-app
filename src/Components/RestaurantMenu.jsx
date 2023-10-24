import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useRestaurant from "../Utils/useRestaurant";


const RestaurantMenu =()=>{
    const {id}=useParams();
    const restaurant=useRestaurant(id);






    return (
        <>
        <div id="menu">
            <h1 id="Other-container">Menu</h1>


            <p className=""> Restaurant name:{restaurant?.name}</p>
       
          
            <p>City:{restaurant?.city}</p>
            <p> Restaurant id{restaurant?.id}</p>

            
       
        </div>
        </>
    )
}
export default RestaurantMenu ; 