// import '../../assets/pd.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Rate } from 'antd';
// import { Link } from 'react-router-dom';
// import Footer from '../footer/Footer';
// import { useParams } from 'react-router-dom';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// interface ReviewData {
//     username: string;
//     rating: number;
//     review: string;
// }



// interface Review {

//     id: number;
//     product: number;
//     review: string;
//     rating: number;
//     user_id: number;
// }

// const ProductDetails = () => {

//     // const { productId } = useParams()
//     // you can get the product id from here .... 
//     const [userId, setUserId] = useState('');

//     useEffect(() => {
//         AsyncStorage.getItem('userId')
//         .then(userId => {
//             if (userId) {
//             setUserId(userId);
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     }, []);



//     const [data, setData] = useState<any | null>(null);
//     // const [reviews, setReviews] = useState<any | null>(null);
//     const [reviews, setReviews] = useState<Review[] | null>(null);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/product/products/1');
//                 setData(response.data);
//                 const productData = response.data
//                 console.log(response.data)
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         const fetchReview = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/product/1/submit_review');
//                 // setReviews(response.data);
//                 setReviews(response.data.Reviews);
//                 // console.log(response.data.Reviews)
//             } catch (error) {
//                 console.error('Error fetching review:', error);
//             }
//         };
//         fetchReview()
//         fetchData();

//         // console.log(data)
//     }, []);

//     // const [reviews, setReviews] = useState([]);
//     // const [reviews, setReview] = useState<Review | null>(null);


//     // const [reviews, setReviews] = useState<any | null>(null);

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await axios.get('http://127.0.0.1:8000/api/product/products/1');
//     //             setData(response.data);
//     //         } catch (error) {
//     //             console.error('Error fetching data:', error);
//     //         }
//     //     };

//     //     const fetchReviews = async () => {
//     //         try {
//     //             const response = await axios.get('http://127.0.0.1:8000/api/product/1/submit_review');
//     //             setReviews(response.data);
//     //             console.log(response)
//     //         } catch (error) {
//     //             console.error('Error fetching reviews:', error);
//     //         }
//     //     };

//     //     fetchData();
//     //     fetchReviews();
//     // }, []);


//     const [review, setReviewText] = useState('');
//     const [selectedRating, setSelectedRating] = useState(0);
//     const backendURL = 'http://127.0.0.1:8000/api/product/1/submit_review';

//     const handleReviewSubmission = async (reviewData: ReviewData) => {
//         try {
//             const response = await axios.post(backendURL, reviewData);
//             console.log('Review submitted successfully:', response.data);
//         } catch (error) {
//             console.error('Error submitting review:', error);
//         }
//     };

//     const handleReviewSubmit = () => {
//         const reviewData: ReviewData = {
//             username: "udayd",
//             rating: selectedRating,
//             review: review,
//         };
//         handleReviewSubmission(reviewData);
//         setReviewText('');
//         setSelectedRating(0);
//     };



//     const add_to_cart = async () => {
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/orders/add_to_cart/', { product_id: data.id, user: "1", quantity: 1 });
//             console.log('Added to cart succesfully', response.data);
//         } catch (error) {
//             console.error('Error submitting review:', error);
//         }
//     }



//     if (!data) {
//         return <p>Loading...</p>;
//     }



//     return (
//         <div className='peoduct-details-body'>
//             <div className="box">
//                 <div className="content">
//                     <div className="img-box">
//                         <img src="/watchimage.png" alt="" className="main-img" />
//                         <div className="small-img-box">
//                             {['/watchimage.png', '/watchimage.png', '/watchimage.png'].map((src, index) => (
//                                 <img key={index} src={src} alt="" className="small-img" />
//                             ))}

//                         </div>
//                     </div>
//                     <div className="details">
//                         <h3 className='product-name'>{data.prod_name}</h3>
//                         <div>
//                             {data.is_out_of_stock ? (
//                                 <p className='out-of-stock'>Out of Stock</p>
//                             ) : (
//                                 <p className='in-stock'>Available in stock</p>
//                             )}
//                         </div>
//                         <p className="brand">{data.brand}</p>
//                         <p className="description">{data.description}</p>
//                         <div className='rate-component'>
//                             <Rate defaultValue={data.average_rating} disabled />
//                         </div>
//                         <p className="price">Price: Rs. {data.price}</p>
//                         <Link to="/add_to_cart" >
//                             <button className="Add_to_cart" id="Add-to-cart" onClick={add_to_cart}>Add to cart</button>
//                         </Link>
//                         {/* <Link to={{ pathname: '/checkout', state: { productId: data.id }} } >
//                             <button className="Buy" id="Buy" >Buy</button>
//                         </Link> */}
//                         <Link to="/checkout" state={{productId: data.id}}>

//                             <button className="Buy" id="Buy">Buy</button>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="reviews">
//                     <div className="review-form">
//                         <h3>Write a Review</h3>
//                         <div className='rate-component'>
//                             <Rate allowClear={false} value={selectedRating} onChange={setSelectedRating} />
//                         </div>
//                         <textarea
//                             rows={3}
//                             placeholder="Share your thoughts..."
//                             value={review}
//                             onChange={(e) => setReviewText(e.target.value)}
//                         ></textarea>
//                         <button className="submit-review" onClick={handleReviewSubmit}>
//                             Submit Review
//                         </button>
//                     </div>
//                 </div>
//                 {/* <div className="reviews">
//                     <h3>Customer Reviews</h3>
//                     <div className='rate-component'>
//                         <Rate defaultValue={reviews.rating} disabled />
//                     </div>
//                     <div className='customer_reviews'>
//                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic labore doloribus beatae, possimus sunt in recusandae consequatur porro facere aliquid totam expedita nihil?</p>
//                         <p className="customer-name">Name</p>
//                     </div>
//                 </div> */}

//                 <div className="reviews">
//                     <h3>Customer Reviews</h3>
//                     {/* map can be used when we have data of user ids so that we can get all the reviews of the product */}
//                     {reviews && reviews.map((review: Review, index: number) => (
//                         <div key={index} className='customer_reviews'>
//                             <div className='rate-component'>
//                                 <Rate defaultValue={review.rating} disabled />
//                             </div>
//                             <p>{review.review}</p>
//                             <p className="customer-name">Uday Darade</p>
//                         </div>
//                     ))}

//                     {!reviews && <p>No reviews available</p>}

//                 </div>

//                 {/* <div className="reviews">
//                     <h3>Customer Reviews</h3>
//                     {Array.isArray(reviews) && reviews.map((revieww: Review, index: number) => (
//                         <div key={index} className='customer_reviews'>
//                             <div className='rate-component'>
//                                 <Rate defaultValue={revieww.rating} disabled />
//                             </div>
//                             <p>{revieww.review}</p>
//                             <p className="customer-name">Name</p>
//                         </div>
//                     ))}
//                     {!Array.isArray(reviews) && <p>No reviews available</p>}
//                 </div> */}

//                 {/* <div className="reviews">
//                     <h3>Customer Reviews</h3>
//                     <div className='customer_reviews'>
//                         <div className='rate-component'>
//                             <Rate defaultValue={reviews.rating} disabled />
//                         </div>
//                         <p>{reviews.review}</p>
//                         <p className="customer-name">Name</p>
//                     </div>
//                 </div> */}


//             </div>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default ProductDetails;
import '../../assets/pd.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';

interface ReviewData {
  username: string;
  rating: number;
  review: string;
}

interface Review {
  id: number;
  product: number;
  review: string;
  rating: number;
  user_id: number;
}

const ProductDetails = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [review, setReviewText] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const backendURL = 'http://127.0.0.1:8000/api/product/1/submit_review';

  useEffect(() => {
    // Retrieve userId from localStorage (if exists)
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }

    // Fetch product details
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/product/products/1');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Fetch reviews for the product
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/product/1/submit_review');
        setReviews(response.data.Reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchData();
    fetchReviews();
  }, []);

  const handleReviewSubmission = async (reviewData: ReviewData) => {
    try {
      const response = await axios.post(backendURL, reviewData);
      console.log('Review submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleReviewSubmit = () => {
    const reviewData: ReviewData = {
      username: 'udayd',
      rating: selectedRating,
      review: review,
    };
    handleReviewSubmission(reviewData);
    setReviewText('');
    setSelectedRating(0);
  };

  const addToCart = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/orders/add_to_cart/', {
        product_id: data.id,
        user: userId || '1',
        quantity: 1,
      });
      console.log('Added to cart successfully', response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className='product-details-body'>
      <div className='box'>
        <div className='content'>
          <div className='img-box'>
            <img src='/watchimage.png' alt='' className='main-img' />
            <div className='small-img-box'>
              {['/watchimage.png', '/watchimage.png', '/watchimage.png'].map((src, index) => (
                <img key={index} src={src} alt='' className='small-img' />
              ))}
            </div>
          </div>
          <div className='details'>
            <h3 className='product-name'>{data.prod_name}</h3>
            <div>
              {data.is_out_of_stock ? (
                <p className='out-of-stock'>Out of Stock</p>
              ) : (
                <p className='in-stock'>Available in stock</p>
              )}
            </div>
            <p className='brand'>{data.brand}</p>
            <p className='description'>{data.description}</p>
            <div className='rate-component'>
              <Rate defaultValue={data.average_rating} disabled />
            </div>
            <p className='price'>Price: Rs. {data.price}</p>
            <Link to='/add_to_cart'>
              <button className='Add_to_cart' id='Add-to-cart' onClick={addToCart}>
                Add to cart
              </button>
            </Link>
            <Link to='/checkout' state={{ productId: data.id }}>
              <button className='Buy' id='Buy'>
                Buy
              </button>
            </Link>
          </div>
        </div>

        <div className='reviews'>
          <div className='review-form'>
            <h3>Write a Review</h3>
            <div className='rate-component'>
              <Rate allowClear={false} value={selectedRating} onChange={setSelectedRating} />
            </div>
            <textarea
              rows={3}
              placeholder='Share your thoughts...'
              value={review}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <button className='submit-review' onClick={handleReviewSubmit}>
              Submit Review
            </button>
          </div>
        </div>

        <div className='reviews'>
          <h3>Customer Reviews</h3>
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className='customer_reviews'>
                <div className='rate-component'>
                  <Rate defaultValue={review.rating} disabled />
                </div>
                <p>{review.review}</p>
                <p className='customer-name'>Uday Darade</p>
              </div>
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
