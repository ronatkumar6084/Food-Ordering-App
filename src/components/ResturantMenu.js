import React from 'react'
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import ResturantCategory from './ResturantCategory';
// import useResturantMenu from '../utils/useResturantMenu';

 const ResturantMenu=()=> {
    const [resInfo,setResInfo]= useState(null);
    const {resId} =useParams();
    const dummy = "dummy data";
    // const resInfo = useResturantMenu(resId);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8657014&lng=77.6642327&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[2].card.card.info.name);
        setResInfo(json.data);
        console.log(resInfo);
        //241027
        //323187
        //358341
    };
    if(resInfo === null) return <Shimmer/>
     const{name,cuisines,costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;
     const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     console.log(itemCards);

     const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      console.log(categories);  

  return (
    <div className='menu text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
        {categories.map((category, index)=>(
          < ResturantCategory key={category?.card?.card?.title} data={category?.card?.card} dummy={dummy}/>
        ))}
    </div>
  );
};
export default ResturantMenu;


// "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8657014&lng=77.6642327&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
      {/* <ul>
        {itemCards.map((item)=> (
         <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100}
        </li>
        ))}
    </ul> */}