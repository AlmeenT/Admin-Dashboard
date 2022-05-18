import './App.css';
import Home from './Pages/Home/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Login from './Pages/Login/Login';
import Login from './Components/Login'
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
        <Home />
     <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Login />}/> */}
            <Route path="/home" element={ <Home />}
            />
            <Route path="/" element={<Login />}/>

            <Route path="/home" element={ <Home />}/>
        
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
