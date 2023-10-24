 import React from "react";
 import { useState,useEffect } from "react";

 
 
 const useRestaurant=(id)=>{


    
    const [restaurant,setrestaurant]=useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
 },[]);
 async function getRestaurantInfo(){
   
    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id)
    const json= await data.json();
    const restaurantData = json?.data?.cards?.map(x => x.card)?.
    find(x => x && x.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.info || null;
setrestaurant(restaurantData);




}
return restaurant;
}
export default useRestaurant;