// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Badge from "react-bootstrap/Badge";
// import Rating from '@mui/material/Rating';
// import axios from "axios";
// import { useState, useEffect } from "react";
// import '/src/assets/css/_card-block.scss';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000",
// });

// interface Props {
//   prod_name: string;
//   price: string;
//   brand: string;
//   prod_img: string;
//   average_rating:number;
//   description:null;
//   product_id:string
// }

// function Template({ prod_name, price, brand, prod_img, average_rating,description, product_id }: Props) {

//   const [userId, setUserId] = useState('');

//   useEffect(() => {
//     AsyncStorage.getItem('userId')
//       .then(userId => {
//         if (userId) {
//           setUserId(userId);
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   function submitCart(){
//     client
//       .post("/api/orders/add_to_cart/", {
//         user : userId,
//         product_id:product_id,
//         quantity:'1'
//       })
//       .then(function (res) {
//           console.log(product_id)
//           console.log(userId)
//       });
//   }
//   return (
//       <Card className="card mb-4 mx-1" style={{ width: "24%", height: "30rem"}}>
//         <Card.Img variant="top" src=".\images\cardimage.webp" style={{ height: "13rem", objectFit: "cover" }} />
//         <Col sm={4}>
//           <Badge pill bg="warning" className="property">
//             {prod_name}
//           </Badge>
//         </Col>
//         <Card.Body>
//           <Card.Title>{brand}</Card.Title>
//           <Card.Text>₹{price}</Card.Text>
//           <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{description}</Card.Text>
//           <Rating name="half-rating-read" defaultValue={average_rating} precision={0.1} readOnly />
//         </Card.Body>
//         <Card.Body className="p-0 mx-2 mb-5">
//         <div className="d-flex justify-content-around">
//           <Col xs={6} className="text-center">
//             <Card.Link href="#">
//               <Badge className="font" pill bg="dark" onClick={(e) => submitCart()}>
//                 Add To Cart
//               </Badge>
//             </Card.Link>
//           </Col>
//           <Col xs={6} className="text-center">
//             <Card.Link href="#">
//               <Badge className="font" pill bg="danger">
//                 Buy Now
//               </Badge>
//             </Card.Link>
//           </Col>
//         </div>
//         </Card.Body>
//       </Card>
//   );
// }

// export default Template;
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Rating from '@mui/material/Rating';
import axios from "axios";
import { useState } from "react";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

interface Props {
  prod_name: string;
  price: string;
  brand: string;
  prod_img: string;
  average_rating:number;
  description:null;
  product_id:number
}

function Template({ prod_name, price, brand, prod_img, average_rating,description, product_id }: Props) {

  function submitCart(){
    client
      .post("/api/orders/add_to_cart/", {
        user : '1',
        product_id:product_id,
        quantity:'1'
      })
      .then(function (res) {
          console.log(product_id)
      });
  }
  return (
      <Card className="card mb-4 mx-1" style={{ width: "18rem", height: "30rem"}}>
        <Card.Img variant="top" src=".\images\cardimage.webp" style={{ height: "13rem", objectFit: "cover" }} />
        <Col sm={8}>
          <Badge pill bg="warning" className="property">
            {prod_name}
          </Badge>
        </Col>
        <Card.Body>
          <Card.Title>{brand}</Card.Title>
          <Card.Text>₹{price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Rating name="half-rating-read" defaultValue={average_rating} precision={0.1} readOnly />
        </Card.Body>
        <Card.Body className="p-0 mx-2 mb-5">
        <Row className="justify-content-around">
          <Col xs={6} className="text-center">
            <Card.Link href="#">
              <Badge className="font" pill bg="dark" onClick={(e) => submitCart()}>
                Add To Cart
              </Badge>
            </Card.Link>
          </Col>
          <Col xs={6} className="text-center">
            <Card.Link href="#">
              <Badge className="font" pill bg="danger">
                Buy Now
              </Badge>
            </Card.Link>
          </Col>
        </Row>
        </Card.Body>
      </Card>
  );
}

export default Template;
