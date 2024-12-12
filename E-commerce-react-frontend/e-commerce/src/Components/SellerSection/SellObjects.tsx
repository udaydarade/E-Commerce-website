import React from "react";
import '../../assets/SellObjects.css';
import RatingComponent from '../AddtoCart/rating';
import Availability from '../AddtoCart/availability';


interface SellObjectsProps {
    color: string;
    //product_img: string;
    product_name: string;
    quantity: number;
    price: number;
    rating: number;
    style: string;
    available:boolean;
    description: string;
  }



const SellObjects: React.FC<SellObjectsProps> =({color,product_name,quantity,price,rating,style,available,description}) =>{

    return(
        <>
        <div id="overall">
            <div className="itemdetails">
             <img className="picture" src='./public/images/products.jpg' alt="pic" />
             <div className="info">
                <p className="name">{product_name}</p>
                <p className="about">{description}</p>
                <div id="remarks">
                    <RatingComponent rating={rating} />
                    <div id="avail">
                        <Availability available={available} />
                    </div>
                </div>
                <div id="properties">
                    <p><b>Style:</b>{style}<br/>
                    <b>Color:</b>{color}</p>
                </div>
             </div>
             <div className="numbers">
             <p>Qty:{quantity}</p>
             <span className='money'>Price: <b>${price}</b></span>
             </div>
            </div>
            <div>
                <div className="choices">
                    <button className="Approve">Approve</button>
                    <button className="Deny">Deny</button>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default SellObjects;