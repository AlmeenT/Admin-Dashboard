import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login'
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={ <Home />}/>
            </Route>  
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
