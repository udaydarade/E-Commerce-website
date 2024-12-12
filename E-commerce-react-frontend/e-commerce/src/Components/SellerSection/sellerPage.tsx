import React from 'react';
import "../../assets/SellerPage.css";
import SellObjects from './SellObjects';
import Sellnavbar from '../Navigation/Sellnav';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SellerPage: React.FC = () => {
  const [sellItems, setSellItems] = useState([]);

  useEffect(() => {
    async function getSellItems() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/product/seller/1/products');
        // Assuming response.data.sellitems is an array
        console.log(response.data);
        setSellItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getSellItems();
  }, []);





  return (
    <>
      <Sellnavbar></Sellnavbar>
      <div id="page">
        <div className='head'>
          <h1>Approve Customer Orders</h1>
          <div className='status'>
            <p>Total orders: 24</p>
            <p className='currentstate'>
              <span>Approved:0</span>   |   <span>Denied:0</span>   |   <span>Pending:24</span>
            </p>
          </div>
        </div>
        <div id='objects'>
          {sellItems.map((item) => (
          <SellObjects
            color='copper'
            //product_img={item.prod_img}
            product_name={item.prod_name}
            quantity={2}
            price={item.price}
            rating={item.average_rating}
            style='Top Load'
            available={!item.is_out_of_stock}
            description={item.description}
          />
          ))}
        </div>
      </div>
    </>
  );
};

export default SellerPage;
