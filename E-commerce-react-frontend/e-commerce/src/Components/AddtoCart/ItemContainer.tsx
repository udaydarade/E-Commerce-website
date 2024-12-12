import React from 'react';
import RatingComponent from './rating';
import Availability from './availability';
import QuantitySelector from './quantity';
import axios from 'axios';
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
import "../../assets/ItemContainer.css"
// import '../../assets/style.css'


interface ItemContainerProps {
  color: string;
  //product_img: string;
  product_name: string;
  quantity: number;
  price: string;
  rating: number;
  product_id: number;
  style: string;
  available: boolean;
  cart_item_id: number;
  description: string;
  onItemRemove: (itemId: number) => void;
}


const ItemContainer: React.FC<ItemContainerProps> = ({ product_name, quantity, price, rating, color, style, available, cart_item_id, description, onItemRemove }) => {


  const [currentQuantity, setCurrentQuantity] = useState<number>(quantity);

  const handleQuantityChange = async (newQuantity: number) => {
    try {
      setCurrentQuantity(newQuantity);

      await axios.put(`http://127.0.0.1:8000/api/orders/edit_cart/${cart_item_id} `, {
        //user: 1,
        //product_id: {product_id},
        quantity: newQuantity
      });

    } catch (error) {
      console.error('Error updating quantity:', error);
      // Handle error
    }
  };


  const removeItemFromCart = async () => {
    try {

      // Send a request to remove the item from the backend
      await axios.delete(`http://127.0.0.1:8000/api/orders/edit_cart/${cart_item_id}`);
      // If the backend properly updates the frontend state, you might not need to do anything here
      onItemRemove(cart_item_id);

    } catch (error) {
      console.error('Error removing item from cart:', error);
      // Handle error
    }
  };


  const isEven = (cart_item_id % 2) === 0;
  // const ItemContainerClass = isEven ? 'colored-box-even' : 'colored-box-odd';





  return (
    <>
      <div>
        <div className="responsive-div">
          <div className={`colored-box ${isEven ? 'colored-box-even' : 'colored-box-odd'}`}></div>
          <div className="content-container">
            <img className="left-image" src='./images/products.jpg' alt="pic" />
            <div className="text-container">
              <div className="middle-text">
                <p className='title'>{product_name}</p>
                <p className='description'>{description}</p>
                <div id="container">
                  <RatingComponent rating={rating} />
                  <div id="stock">
                    <Availability available={available} />
                  </div>
                </div>
                <div id="specifications">
                  <p><b>Style:</b>{style}<br />
                    <b>Color:</b>{color}</p>
                </div>
                <p id="bottom">
                  <button onClick={() => removeItemFromCart()}>Remove</button>       |  <span>Share</span>      |  <span>Move to wishlist</span>
                </p>
              </div>
            </div>
            <div className="details">
              <p>Qty:</p>
              <QuantitySelector init_quantity={currentQuantity} onQuantityChange={handleQuantityChange} />
              <span className='cost'>Price: <b>${price}</b></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemContainer;
