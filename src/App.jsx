import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import CreateUser from "./router/create-user/CreateUser";
import AllUsers from "./router/all-users/AllUsers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/all-users" element={<AllUsers />} />
      </Routes>
      <ToastContainer />
      <AnimatedCursor showSystemCursor={true} innerScale={0.1} />
    </div>
  );
}

export default App;
