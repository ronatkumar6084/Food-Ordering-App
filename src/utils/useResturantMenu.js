import { useEffect, useState } from 'react'

 const useResturantMenu=(resId)=> {
    const [resInfo, setResInfo]= useState(null);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8657014&lng=77.6642327&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    const json = data.json();
    setResInfo(json.data);
  }
  
    return resInfo;
};
export default useResturantMenu;