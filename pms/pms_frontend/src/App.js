import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import OwnerLogInForm from './components/OwnerLogIn/OwnerLogInForm';
import OwnerSignUpForm from './components/OwnerSignUp/OwnerSignUpForm';
import NavbarComp from "./components/NavbarComp/NavbarComp"
import Home from "./components/Home/Home"
import CreatePropertyForm from "./components/Property/CreatePropertyForm"
import PropertyContainer from "./components/Property/PropertyContainer"


function App() {

  return (
    <>
      <NavbarComp />
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<OwnerLogInForm />} />
            <Route exact path='/signup' element={<OwnerSignUpForm />} />
            <Route exact path='/new_property' element={<CreatePropertyForm />} />
            <Route exact path='/all_properties' element={<PropertyContainer />} />
            {/* <Route exact path="rent_payment" element={<SqPaymentForm />} /> */}
        </Routes>
      </BrowserRouter>
    </>

  );
  }

export default App;

