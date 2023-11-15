import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
        <Route path="contact" exact element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
