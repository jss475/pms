import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import LogIn from './components/LogIn/LogIn';
import LogInForm from './components/LogIn/LogInForm';
import SignUpForm from './components/LogIn/SignUpForm';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LogIn />} />
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
