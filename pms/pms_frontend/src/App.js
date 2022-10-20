import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {OwnerContext} from "./components/LogIn/OwnerContext"
import LogIn from './components/LogIn/LogIn';
import LogInForm from './components/LogIn/LogInForm';
import SignUpForm from './components/LogIn/SignUpForm';

function App() {

  //call useContext with our OwnerContext
  // const {isLoggedIn, setIsLoggedIn} = useContext(OwnerContext)
  console.log(useContext(OwnerContext))

  // const setIsLoggedIn = useContext(OwnerContext) //
  // const setIsLoggedIn = useContext(OwnerContext)

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<LogInForm />} />
          <Route exact path='/login' element={<LogInForm />} />
          <Route exact path='/signup' element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
  }

export default App;

  // const [properties, setProperties] = useState([]);

  // useEffect(() => {
  //   fetch(`/properties`)
  //   .then(response => response.json())
  //   .then((properties) => {
  //     setProperties(properties)
  //   })
  //   .catch(error => console.log(error))
  // },[])

  // console.log(properties)
