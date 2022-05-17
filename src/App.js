import './App.css';
<<<<<<< HEAD
import Home from './Pages/Home/Home';
// import Login from './Pages/Login/Login';
=======
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Login/Home/Home';
import Login from './Pages/Login/Login';
>>>>>>> upstream/main


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        {/* <Login /> */}
        <Home />
=======
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={ <Home />}/>
        </Routes>
      </BrowserRouter>

>>>>>>> upstream/main
    </div>
  );
}

export default App;
