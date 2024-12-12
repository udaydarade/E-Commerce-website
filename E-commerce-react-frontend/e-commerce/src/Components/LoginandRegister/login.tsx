// import React, { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Confirm from "../HomePage/confirm";
// import '/src/assets/css/_sign-block.scss';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000",
// });

// function Login() {
//   const [currentUser, setCurrentUser] = useState<boolean | null>(null);
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [modalShow, setModalShow] = React.useState(false);
//   const [showConfirmation, setShowConfirmation] = useState<boolean>(false);


//   function submitLogin(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     client
//       .post("/api/user/login/", {
//         username: username,
//         password: password,
//       })
//       .then(function (res) {
//         setCurrentUser(true);
//         console.log(username);
//         console.log(password);
//         const userId = res.data.user_id;
//         AsyncStorage.setItem("userId", userId.toString());
//         console.log(userId)
//       });
//   }

//   useEffect(() => {
//     if (currentUser === true) {
//       setShowConfirmation(true);
//     }
//   }, [currentUser]);

//   return (
//     <body>
//       <div className="container-fluid">
//         <div className="d-flex justify-content-center m-5 bada-dabba bg-body rounded">
//           <form onSubmit={(e) => submitLogin(e)} className="w-100 rounded">
//             <h2 className="topic text-center mt-5">
//               Welcome to the world of Gadgets!
//             </h2>
//             <div className="d-flex align-items-center flex-column mt-5">
//               <div className="form-group d-flex flex-column mt-4 col-sm-8">
//                 <label
//                   className="details1 align-self-start order-first my-2"
//                   htmlFor="exampleInputtext1"
//                 >
//                   Username
//                 </label>
//                 <div className="holder order-last align-self-center">
//                   <input
//                     type="text"
//                     className="dabba p-2"
//                     id="exampleInputtext1"
//                     aria-describedby="textHelp"
//                     placeholder="Enter Your Username"
//                     value={username}
//                     onChange={(e) => setUserName(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="form-group mt-4 col-sm-8 mx-1 my-4 d-flex flex-column align-items-center">
//                 <label
//                   className="details1 align-self-start order-first my-2"
//                   htmlFor="exampleInputPassword1"
//                 >
//                   Password
//                 </label>
//                 <div className="holder order-last align-self-center">
//                   <input
//                     type="password"
//                     className="dabba p-3"
//                     id="exampleInputPassword1"
//                     placeholder="Enter Your Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="form-group form-check remember-me d-flex align-items-center justify-content-end col-sm-8">
//                 <div className="d-flex align-items-center">
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     id="exampleCheck1"
//                   />
//                   <label
//                     className="form-check-label mx-1"
//                     htmlFor="exampleCheck1"
//                   >
//                     <span className="remember-me-text">Remember Me</span>
//                   </label>
//                   <a className="text-decoration-none" href="">
//                     <div className="forgot mx-5">Forgot Password?</div>
//                   </a>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-evenly boxes">
//                 <button
//                   type="submit"
//                   className="box2 p-2 rounded-pill mx-4 mt-5" onClick={() => setModalShow(true)}
//                 >
//                   <span className="likhavat justify-content-center d-flex align-items-center">
//                     LOGIN
//                   </span>
//                 </button>
//                 <div className="box1 p-2 rounded-pill mx-4 mt-5">
//                   <Link to="/register" className="text-decoration-none">
//                     <span className="likhavat justify-content-center d-flex align-items-center">
//                       SIGN UP
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Confirm page="/home" message="Login Successful...." action="Go Home" grad="Welcome To The World of Gadgets!" show={modalShow && showConfirmation}
//         onHide={() => setModalShow(false)} />

//     </body>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import Confirm from "../HomePage/confirm";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function Login() {
  const [currentUser, setCurrentUser] = useState<boolean | null>(null);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);


  function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    client
      .post("/api/user/login/", {
        username: username,
        password: password,
      })
      .then(function (res) {
        setCurrentUser(true);
        console.log(username);
        console.log(password);
      });
  }

  useEffect(() => {
    if (currentUser === true) {
      setShowConfirmation(true);
    }
  }, [currentUser]);

  return (
    <body>
      <div className="container-fluid">
        <div className="d-flex justify-content-center m-5 bada-dabba bg-body rounded">
          <form onSubmit={(e) => submitLogin(e)} className="w-100 rounded">
            <h2 className="heading text-center mt-5">
              Welcome to the world of Gadgets!
            </h2>
            <div className="d-flex align-items-center flex-column mt-5">
              <div className="form-group d-flex flex-column mt-4 col-sm-8">
                <label
                  className="details align-self-start order-first my-2"
                  htmlFor="exampleInputtext1"
                >
                  Username
                </label>
                <div className="holder order-last align-self-center">
                  <input
                    type="text"
                    className="dabba p-2"
                    id="exampleInputtext1"
                    aria-describedby="textHelp"
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mt-4 col-sm-8 mx-1 my-4 d-flex flex-column align-items-center">
                <label
                  className="details align-self-start order-first my-2"
                  htmlFor="exampleInputPassword1"
                >
                  Password
                </label>
                <div className="holder order-last align-self-center">
                  <input
                    type="password"
                    className="dabba p-3"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group form-check remember-me d-flex align-items-center justify-content-end col-sm-8">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label mx-1"
                    htmlFor="exampleCheck1"
                  >
                    <span className="remember-me-text">Remember Me</span>
                  </label>
                  <a className="text-decoration-none" href="">
                    <div className="forgot mx-5">Forgot Password?</div>
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-evenly boxes">
                <button
                  type="submit"
                  className="box2 p-2 rounded-pill mx-4 mt-5" onClick={() => setModalShow(true)}
                >
                  <span className="likhavat justify-content-center d-flex align-items-center">
                    LOGIN
                  </span>
                </button>
                <div className="box1 p-2 rounded-pill mx-4 mt-5">
                  <Link to="/register" className="text-decoration-none">
                    <span className="likhavat justify-content-center d-flex align-items-center">
                      SIGN UP
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Confirm page="/home" message="Login Successful...." action="Go Home" grad="Welcome To The World of Gadgets!" show={modalShow&&showConfirmation}
        onHide={() => setModalShow(false)}/>
      
    </body>
  );
}

export default Login;
