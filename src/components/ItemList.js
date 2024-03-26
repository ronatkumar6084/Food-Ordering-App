import { useDispatch } from 'react-redux';
import {CDN_URL} from '../utils/constants'
import { addItem } from '../utils/CartSlice';

const ItemList= ({items, dummy})=>{
     console.log(items);
    console.log(dummy);

    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
      dispatch(addItem(item))
    }

return (
  <div>
        {items.map((item) => (
        <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" 
          key={item.card.info.id}>
            <div className='w-9/12'>
               <div className="py-4 ">
                <span>{item.card.info.name}</span>
                <span> - ₹ {item.card.info.price ? 
                            item.card.info.price / 100 : 
                            item.card.info.defaultPrice / 100}
                </span>
               </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className='w-3/12'>
                <div className='absolute mt-20'>
                <button className='p-2 mx-16 rounded-lg bg-gray-50 text-black shadow-lg' onClick={()=>handleAddItem(item)}>Add+</button>
                </div>           
              <img src= {CDN_URL + item.card.info.imageId} alt="itemImage" className="w-full"/>
            </div>
        </div>
       ))}
  </div>
);
};
export default ItemList;