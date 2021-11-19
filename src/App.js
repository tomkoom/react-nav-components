import "./App.css";
import Nav from "./Components/Nav/Nav";
import WindowSize from "./Components/WindowSize";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Nav />
      <WindowSize />
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
