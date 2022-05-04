import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Start from "./components/Start";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/' element={<About />}/>
        <Route path='/' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
