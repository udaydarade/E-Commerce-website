import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Confirm from "../HomePage/confirm";
import '/src/assets/css/_sign-block.scss';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function SignUp() {
  const [currentUser, setCurrentUser] = useState<boolean | null>(null);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile_number, setMobile_Number] = useState("");
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();

  function submitSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    client
      .post("/api/user/register/", {
        username: username,
        email: email,
        password: password,
        mobile_number: mobile_number,
      })
      .then(function (res) {
        setCurrentUser(true);
        console.log(username);
        console.log(email);
        console.log(mobile_number);
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
          <form onSubmit={(e) => submitSignUp(e)} className="w-100 rounded">
            <h2 className="topic text-center mt-5">Assemble Your Account</h2>
            <div className="form-wrapper d-flex column align-items-center justify-content-center">
              <div className="d-flex align-items-center flex-column mt-5">
                <div className="form-group d-flex flex-column mt-4 col-sm-8">
                  <label
                    className="details1 align-self-start order-first"
                    htmlFor="exampleInputEmail1"
                  >
                    Username
                  </label>
                  <div className="holder order-last align-self-center">
                    <input
                      name="user"
                      type="text"
                      className="dabba"
                      id="text"
                      aria-describedby="textHelp"
                      placeholder="Create Your Username"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                      value={username}
                    />
                  </div>
                </div>
                <div className="form-group d-flex flex-column mt-4 col-sm-8">
                  <label
                    className="details1 order-first"
                    htmlFor="exampleInputEmail1"
                  >
                    Email
                  </label>
                  <div className="holder order-last align-self-center">
                    <input
                      name="email"
                      type="email"
                      className="dabba"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your E-mail"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                  </div>
                </div>
                <div className="form-group d-flex flex-column mt-4 col-sm-8">
                  <label
                    className="details1 align-self-start order-first mx-4"
                    htmlFor="exampleInputNumber"
                  >
                    Phone Number
                  </label>
                  <div className="holder align-self-center">
                    <input
                      name="number"
                      type="text"
                      className="dabba"
                      aria-describedby="textHelp"
                      placeholder="Enter Your Phone Number"
                      onChange={(e) => {
                        setMobile_Number(e.target.value);
                      }}
                      value={mobile_number}
                    />
                  </div>
                </div>
                <div className="form-group d-flex flex-column mt-4 col-sm-8">
                  <label
                    className="details1 align-self-start order-first mx-4"
                    htmlFor="exampleInputPassword1"
                  >
                    Password
                  </label>
                  <div className="holder order-last align-self-center">
                    <input
                      name="password"
                      type="password"
                      className="dabba"
                      aria-describedby="textHelp"
                      placeholder="Enter Your Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                  </div>
                </div>
                <br></br>
                <br />
                <br />
                <div className="d-flex align-items-center justify-content-evenly boxes col-sm-12 mt-3 elements-wrapper">
                  <div className="mx-4 mt-5 col-sm-12 w-100 align-items-center justify-content-center">
                    <div className="container d-flex flex-column align-items-center justify-content-center col-sm-12 mt-4">
                      <div className="elements d-flex mx-1">
                        <div className="d-flex align-self-end justify-content-start">
                          <div className="rectangle mx-1"></div>
                          <div className="ellipse ml-1"></div>
                        </div>
                        <div className="d-flex row align-items-center justify-content-center">
                          <button className="mx-5 button" type="submit" onClick={() => setModalShow(true)}>
                            <span className="likhavat justify-content-center d-flex align-items-center">
                              SIGN UP
                            </span>
                          </button>
                          <div>
                            <a className="link mx-5 px-4" href="/login">
                              Alerady have an account?
                            </a>
                          </div>
                        </div>
                        <div className="d-flex row justify-content-end">
                          <div className="line"></div>
                          <div className="line mt-2"></div>
                          <div className="line mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>

      <Confirm
        page="/login"
        message="Sign Up Successful...."
        action="Go For Login"
        grad="Thankyou for signing up!"
        show={modalShow && showConfirmation}
        onHide={() => setModalShow(false)}
      />
    </body>
  );
}

export default SignUp;
