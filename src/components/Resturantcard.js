import React from 'react';
import { CDN_URL } from '../utils/constants';

const Resturantcard=(props)=> {
  let {resData}=props;
  const {cloudinaryImageId,
  name,cuisines,avgRating,
costForTwo,sla}= resData?.info;
  return (
    <div className="res-card  m-4 p-4 w-[300px] rounded-lg bg-gray-200 hover:bg-gray-400">
        <img className="res-logo rounded-lg" 
        src={ CDN_URL+ cloudinaryImageId} alt="res-logo" />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default Resturantcard;

//"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,h_500/"