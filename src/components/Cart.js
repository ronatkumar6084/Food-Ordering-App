import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/CartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = ()=>{
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    // const dispatch = useDispatch();
    const handleRemoveItem =()=>{
        dispatch(removeItem());
    }
    
    const cartItems = useSelector((store) => store.cart.items);
    return(
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold"> Cart </h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" 
            onClick={handleClearCart}>Clear Cart</button>
             <button className="p-2 m-2 bg-black text-white rounded-lg" 
            onClick={handleRemoveItem}>Remove Item</button>
            {cartItems.length === 0 && (
            <><h1 className="mb-16 font-bold">Cart is empty! Add items to cart</h1>
            <img src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"/></>
            )}
            <ItemList items={cartItems}/>
            {/* {items.map((item) => (
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
                <button className='p-2 mx-16 rounded-lg bg-gray-50 text-black shadow-lg' onClick={()=>handleRemoveItem(item)}>Remove</button>
                </div>           
              <img src= {CDN_URL + item.card.info.imageId} alt="itemImage" className="w-full"/>
            </div>
        </div>
       ))} */}
        </div>
    </div>
    )
};
export default Cart;