import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {OwnerContext} from "./components/LogIn/OwnerContext"
import LogIn from './components/LogIn/LogIn';
import LogInForm from './components/LogIn/LogInForm';
import SignUpForm from './components/LogIn/SignUpForm';
import NavbarComp from "./components/NavbarComp/NavbarComp"
import Home from "./components/Home/Home"
import SqPaymentForm from './components/SquarePayment/SqPaymentForm';

function App() {

  return (
    <>
      <NavbarComp />
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<LogInForm />} />
            <Route exact path='/signup' element={<SignUpForm />} />
            <Route exact path="rent_payment" element={<SqPaymentForm />} />
        </Routes>
      </BrowserRouter>
    </>

  );
  }

export default App;

