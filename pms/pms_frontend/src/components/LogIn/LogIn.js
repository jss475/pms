import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function LogIn() {
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-5 text-uppercase ">Keystone Management</h2>
                <div className="mb-3">
                  <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                      <p className="small">
                        <a className="text-primary" href="#!">Forgot password?</a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-4">
                    <p className="mb-0  text-center">
                      Don't have an account?{" "}
                      <a href="{''}" className="text-primary fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LogIn;

// import React, { useState } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css'

// export default function (props) {
//   let [authMode, setAuthMode] = useState("signin")

//   const changeAuthMode = () => {
//     setAuthMode(authMode === "signin" ? "signup" : "signin")
//   }

//   if (authMode === "signin") {
//     return (
//       <div className="Auth-form-container">
//         <form className="Auth-form">
//           <div className="Auth-form-content">
//             <h3 className="Auth-form-title">Sign In</h3>
//             <div className="text-center">
//               Not registered yet?{" "}
//               <span className="link-primary" onClick={changeAuthMode}>
//                 Sign Up
//               </span>
//             </div>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//             <p className="text-center mt-2">
//               Forgot <a href="#">password?</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     )
//   }

//   return (
//     <div className="Auth-form-container">
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Sign In</h3>
//           <div className="text-center">
//             Already registered?{" "}
//             <span className="link-primary" onClick={changeAuthMode}>
//               Sign In
//             </span>
//           </div>
//           <div className="form-group mt-3">
//             <label>Full Name</label>
//             <input
//               type="email"
//               className="form-control mt-1"
//               placeholder="e.g Jane Doe"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control mt-1"
//               placeholder="Email Address"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control mt-1"
//               placeholder="Password"
//             />
//           </div>
//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <p className="text-center mt-2">
//             Forgot <a href="#">password?</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   )
// }

// import React, { useState, useEffect } from 'react';
// import LogInForm from './LogInForm';
// // import SignUpForm from './SignUpForm';

// const Auth = () => {
  
//   // const [users, setUsers] = useState([]);
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // const [showLogin, setShowLogIn] = useState(true);

//   // useEffect(() => {
//   // fetch(`/users`)
//   // .then(response => response.json())
//   // .then((users) => {
//   //   setUsers(users)
//   //   setIsLoggedIn(true)
//   // })
//   // .catch(error => console.log(error))
//   // },[]);
//   // console.log(users)

//   // Reroute user to <Login /> Component if not authenticated
//   // if (!isLoggedIn) return <LogInPage setIsLoggedIn={setIsLoggedIn}/>;

//   return (
//     <>
//     {/* {showLogin ? (
//       <LogInForm setShowLogIn={setShowLogIn} setIsLoggedIn={setIsLoggedIn}/>
//     ) : (
//       <SignUpForm setShowLogIn={setShowLogIn} setIsLoggedIn={setIsLoggedIn}/>
//     )} */}
//     {/* <div>LogInPage</div> */}
//     <LogInForm />
//     </>
//   )
// }

// export default Auth;