import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import LogIn from './components/LogIn/LogIn';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
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
