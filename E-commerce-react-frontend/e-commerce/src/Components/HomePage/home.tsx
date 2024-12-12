// import AD from "./AD";
// import Tag from "./tag";
// import Template from "./Card";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import '/src/assets/css/_home-block.scss';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000",
// });

// interface Product {
//   id:string;
//   prod_name: string;
//   price: string;
//   brand: string;
//   product_img: null;
//   average_rating:number;
//   description:null;
// }

// function Home() {
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
//     const [activeTag, setActiveTag] = useState('');

//     const handleTagClick = (item: string) => {
//         setActiveTag(item);
//     };

//     const[productData, setProductData] = useState<Product[]>([]);
//     useEffect(() => {
//       axios.get("http://127.0.0.1:8000/api/product/products")
//         .then((res) => {
//           console.log(res);
//           setProductData(res.data);
//         })
//         .catch((error) => {
//           console.error('Error fetching product data:', error);
//         });
//     }, []);

//   return (
//     <div className="home-box-wrapper">
//       <div className="tags-wrapper d-flex mx-3 justify-content-around align-items-center">
//         <Tag item="Home" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Home'} onClick={() => handleTagClick('Home')}></Tag>
//         <Tag item="Lab" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Lab'} onClick={() => handleTagClick('Lab')}></Tag>
//         <Tag item="Samsung" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Samsung'} onClick={() => handleTagClick('Samsung')}></Tag>
//         <Tag item="Panasonic" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Panasonic'} onClick={() => handleTagClick('Panasonic')}></Tag>
//         <Tag item="Sony" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Sony'} onClick={() => handleTagClick('Sony')}></Tag>
//         <Tag item="Prestige" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Prestige'} onClick={() => handleTagClick('Prestige')}></Tag>
//         <Tag item="Sale" color="rgba(181, 0, 0, 1)" fontcol="rgba(255, 255, 255, 1)"></Tag>
//       </div>
//       <div className="ad-wrapper mt-3">
//        <AD></AD>
//       </div>
//       <div className="d-flex flex-wrap card-wrapper justify-content-around align-items-center mt-3">
//       {productData.map((product, index) => (
//           <Template
//             key={index}
//             product_id={product.id}
//             prod_name={product.prod_name}
//             brand={product.brand}
//             price={product.price}
//             description={product.description}
//             average_rating={product.average_rating}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
import AD from "./AD";
import Tag from "./tag";
import Template from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";


interface Product {
  id:string;
  prod_name: string;
  price: string;
  brand: string;
  product_img: null;
  average_rating:number;
  description:null;
}

function Home() {
    const [activeTag, setActiveTag] = useState('');

    const handleTagClick = (item: string) => {
        setActiveTag(item);
    };

    const[productData, setProductData] = useState<Product[]>([]);
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/product/products")
        .then((res) => {
          console.log(res);
          setProductData(res.data);
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }, []);
    
    {productData.map((data) => {
    
                  
    })}

  return (
    <div className="home-box-wrapper">
      <div className="tags-wrapper d-flex mx-3 justify-content-around align-items-center">
        <Tag item="Home" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Home'} onClick={() => handleTagClick('Home')}></Tag>
        <Tag item="Lab" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Lab'} onClick={() => handleTagClick('Lab')}></Tag>
        <Tag item="Samsung" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Samsung'} onClick={() => handleTagClick('Samsung')}></Tag>
        <Tag item="Panasonic" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Panasonic'} onClick={() => handleTagClick('Panasonic')}></Tag>
        <Tag item="Sony" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Sony'} onClick={() => handleTagClick('Sony')}></Tag>
        <Tag item="Prestige" color="rgba(253, 253, 239, 1)" fontcol="rgba(76, 76, 72, 1)" isActive={activeTag === 'Prestige'} onClick={() => handleTagClick('Prestige')}></Tag>
        <Tag item="Sale" color="rgba(181, 0, 0, 1)" fontcol="rgba(255, 255, 255, 1)"></Tag>
      </div>
      <div className="ad-wrapper mt-3">
       <AD></AD>
      </div>
      <div className="d-flex flex-wrap card-wrapper justify-content-around align-items-center mt-3">
      {productData.map((product, index) => (
          <Template
            key={index}
            product_id={product.id}
            prod_name={product.prod_name}
            brand={product.brand}
            price={product.price}
            description={product.description}
            average_rating={product.average_rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;