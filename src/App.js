import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddResep from "./Page/AddResep";
import Home from "./Page/Home";
import Profil from "./Page/Profil";
// import Register from "./Components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/addrecipe" element={<AddResep />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
