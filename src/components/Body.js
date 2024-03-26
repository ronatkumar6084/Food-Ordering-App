import React, { useEffect } from 'react'
import Resturantcard from './Resturantcard';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const  Body=()=> {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8657014&lng=77.6642327&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>
  if(listOfResturant.length===0){
    return<Shimmer/>;
  }
  return (
      <div className="body">
        <div className="filter flex ">
          <div className="search m-4 p-4 ">
            <input type="text" className="search-box border border-solid border-black" placeholder="search here" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);}}/>

            <button className='px-4 py-1 bg-green-200 m-4 rounded-xl'
              onClick={()=>{
              console.log(searchText);
              const filteredResturants = listOfResturant.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredResturant(filteredResturants);
              console.log(filteredResturants);
              }}>Search</button>
          </div>            
            <div className='m-4 p-4 flex items-center '>
            <button  className="filter-btn px-4 py-1 bg-gray-100 rounded-xl" onClick={()=>{
            const filteredList = listOfResturant.filter(
              (res)=>res.info.avgRating > 4.3 );
            setListOfResturant(filteredList);
            console.log(filteredList);
          }}>Top Rated Resturant</button>
            </div>       
        </div>
        
        <div className="restu-container flex flex-wrap">
          {
            filteredResturant.map((resturant)=>(
            <Link key={resturant.info.id} to={"resturants/"+resturant.info.id}><Resturantcard  resData={resturant}/> </Link>))
          };
          </div>
      </div>
    );
  };
export default Body;

// {/* <Resturantcard resData={resList[0]}/>
// <Resturantcard resData={resList[1]}/>
// <Resturantcard resData={resList[2]}/>
// <Resturantcard resData={resList[3]}/>
// <Resturantcard resData={resList[4]}/>
// <Resturantcard resData={resList[5]}/> */}
// Whenever a state variable updates react rerenders the component. or triggers a reconcilation cycle.   