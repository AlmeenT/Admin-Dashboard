import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Login/Home/Home';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={ <Home />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
