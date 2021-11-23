import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import WindowSize from "./Components/WindowSize";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"
import SwitchNav from "./Components/SwitchNav/SwitchNav";
import Nav3 from "./Components/Nav3/Nav3";
import Nav4 from "./Components/Nav4/Nav4";

function App() {
  const [isNav, setIsNav] = useState(1);

  return (
    <div className="App">
      <Nav isNav={isNav} />
      <Nav3 isNav={isNav} />
      <Nav4 isNav={isNav} />
      <WindowSize />
      <SwitchNav setIsNav={setIsNav} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
