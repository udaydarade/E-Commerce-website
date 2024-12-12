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
//     prod_img:null
// }
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//     baseURL: "http://127.0.0.1:8000",
//   });

// function EditProduct() {
//     const [prod_name, setProduct_name] = useState("");
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");
//     const [brand, setBrand] = useState("");
//     const [prod_img, setProd_img] = useState("");

//     function submitUpdate() {
//         client
//           .put("/api/product/products/1/update", {
//             prod_name:prod_name,
//             price:price,
//             description:description,
//             brand:brand,
//             prod_img:null
//           })
//           .then(function (res) {
//             console.log(prod_name);
//             console.log(price);
//             console.log(description);
//             console.log(brand);
//             console.log(prod_img)
//           });
//       }
//   return (
//     <div className="contentwrap">
//       <div className="d-flex justify-content-around">
//         <h2 className="add">Edit Product</h2>
//         <Button variant="warning" className="done" onClick={(e) => submitUpdate()}>
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
//                 <Form.Control type="file" multiple accept="image/*"/>

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
//               <Form.Control type="text" />
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

// export default EditProduct;
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

function EditProduct() {
  const [prod_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [prod_img, setProd_img] = useState<FileList | null>(null); // Handle file input properly
  const [rating, setRating] = useState("");

  function submitUpdate() {
    if (!prod_name || !price || !description || !brand) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("prod_name", prod_name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("rating", rating);
    
    if (prod_img && prod_img.length > 0) {
      for (let i = 0; i < prod_img.length; i++) {
        formData.append("prod_img", prod_img[i]);
      }
    }

    client
      .put("/api/product/products/1/update", formData)
      .then((res) => {
        console.log("Product updated:", res);
        alert("Product updated successfully.");
      })
      .catch((err) => {
        console.error("Error updating product:", err);
        alert("Failed to update product. Please try again.");
      });
  }

  return (
    <div className="contentwrap">
      <div className="d-flex justify-content-around">
        <h2 className="add">Edit Product</h2>
        <Button variant="warning" className="done" onClick={submitUpdate}>
          Done
        </Button>
      </div>

      <div className="d-flex justify-content-around">
        <div>
          <Form className="custom-form-large">
            <Form.Group className="my-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" onChange={(e) => setProduct_name(e.target.value)} />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>Add Images</Form.Label>
              <Form.Control
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setProd_img(e.target.files)}
              />
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
                value={rating}
                onChange={(e) => setRating(e.target.value)}
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

            <Button variant="dark" className="rounded-pill badge" onClick={submitUpdate}>
              + Submit Info
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
