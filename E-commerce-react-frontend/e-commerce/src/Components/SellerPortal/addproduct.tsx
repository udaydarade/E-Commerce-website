// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import "bootstrap/dist/css/bootstrap.css";
// import "/src/assets/css/_seller-block.scss";
// import { useState } from "react";
// import axios from "axios";

// interface Props{
//     prod_name:string;
//     brand:string;
//     price:number;
//     description:string;
//     average_rating:number
// }
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//     baseURL: "http://127.0.0.1:8000",
//   });

// function AddProduct() {
//     const [prod_name, setProduct_name] = useState("");
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");
//     const [brand, setBrand] = useState("");
//     const [average_rating, setAverage_rating] = useState("");


//     function submitDone() {
//         client
//           .post("/api/product/seller/1/add_product", {
//             prod_name:prod_name,
//             price:price,
//             description:description,
//             brand:brand,
//             average_rating:average_rating
//           })
//           .then(function (res) {
//             console.log(prod_name);
//             console.log(price);
//             console.log(description);
//             console.log(brand);
//             console.log(average_rating)
//           });
//       }
//   return (
//     <div className="contentwrap">
//       <div className="d-flex justify-content-around">
//         <h2 className="add">Add Product</h2>
//         <Button variant="warning" className="done" onClick={(e) => submitDone()}>
//           Done
//         </Button>
//       </div>
//       <div className="d-flex justify-content-around">
//         <div>
//           <Form className="custom-form-large">
//             <Form.Group className="my-3">
//               <Form.Label>Product Name</Form.Label>
//               <Form.Control type="text" onChange={(e) => setProduct_name(e.target.value)} />
//             </Form.Group>
//             <Form.Group className="my-3">
//               <Form.Label>Add Images</Form.Label>
//               <Form.Switch>
//                 <Form.Control type="file" multiple accept="image/*" />

//                 <Form.Control
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   className="inputimage"
//                 />
//                 <Form.Control
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   className="inputimage"
//                 />
//               </Form.Switch>
//             </Form.Group>
//             <Form.Group className="my-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 type="text"
//                 className="description"
//                 style={{ height: "130px", paddingTop: "10px", marginTop: "0" }}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </div>
//         <div className="d-flex align-items-center justify-content-center">
//           <Form  className="custom-form-small">
//             <h3 className="add">Add Info</h3>
//             <Form.Group className="my-1">
//               <Form.Label>Brand</Form.Label>
//               <Form.Control type="text" onChange={(e) => setBrand(e.target.value)} />
//             </Form.Group>
//             <Form.Group className="mb-1">
//               <Form.Label>Price</Form.Label>
//               <Form.Control type="text" onChange={(e) => setPrice(e.target.value)}/>
//             </Form.Group>
//             <Form.Group className="mb-1">
//               <Form.Label>Rating</Form.Label>
//               <Form.Control type="text" onChange={(e) => setAverage_rating(e.target.value)}/>
//             </Form.Group>
//             <Form.Group className="mb-1">
//               <Form.Label>Style</Form.Label>
//               <Form.Control type="text" />
//             </Form.Group>
//             <Form.Group className="mb-1">
//               <Form.Label>Colour</Form.Label>
//               <Form.Control type="text" />
//             </Form.Group>
//             <Form.Group className="mb-1">
//               <Form.Label>Quantity</Form.Label>
//               <Form.Control type="text" />
//             </Form.Group>
//             <Button variant="dark" className="rounded-pill badge">
//               + Submit Info
//             </Button>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import "/src/assets/css/_seller-block.scss";
import { useState } from "react";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function AddProduct() {
  const [prod_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [average_rating, setAverage_rating] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitDone = () => {
    if (!prod_name || !price || !description || !brand || !average_rating) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    client
      .post("/api/product/seller/1/add_product", {
        prod_name,
        price,
        description,
        brand,
        average_rating,
      })
      .then((res) => {
        console.log("Product added:", res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error adding product:", err);
        setError("Failed to add product. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="contentwrap">
      <div className="d-flex justify-content-around">
        <h2 className="add">Add Product</h2>
        <Button variant="warning" className="done" onClick={submitDone} disabled={loading}>
          {loading ? "Adding..." : "Done"}
        </Button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex justify-content-around">
        <div>
          <Form className="custom-form-large">
            <Form.Group className="my-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" onChange={(e) => setProduct_name(e.target.value)} />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>Add Images</Form.Label>
              <Form.Control type="file" multiple accept="image/*" />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                className="description"
                style={{ height: "130px", paddingTop: "10px", marginTop: "0" }}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <Form className="custom-form-small">
            <h3 className="add">Add Info</h3>

            <Form.Group className="my-1">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" onChange={(e) => setBrand(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                value={average_rating}
                onChange={(e) => setAverage_rating(e.target.value)}
                min="1"
                max="5"
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Style</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Colour</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Button variant="dark" className="rounded-pill badge" onClick={submitDone}>
              + Submit Info
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
