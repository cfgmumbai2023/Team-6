
import "./style.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Admin from "./Pages/Admin";
import UnapprovedRequests from "./Pages/UnapprovedRequests";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'   >
          <Route index element={<Home />}/>
          <Route path="about-us" element={<AboutUs />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/unapproved-requests" element={<UnapprovedRequests />}/>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;