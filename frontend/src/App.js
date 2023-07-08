import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./screens/Navbar"
import SignUp from "./screens/SignUp"
import Home from "./screens/HomePage"
import Login from "./screens/Login"
import About from "./screens/About"
import VideoAddition from "./screens/VideoAddition"
import Admin from "./screens/Admin"
import RunVideo from "./screens/RunVideo"
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Signup" element={<SignUp />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/VideoAddition" element = {<VideoAddition />}></Route>
            <Route path="/Admin" element={<Admin />}></Route>
            <Route path="/RunVideo" element={<RunVideo />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
