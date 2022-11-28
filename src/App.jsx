import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import AndersHejlsberg from "./components/AndersHejlsberg";
import Linus from "./components/LinusTorvalds";
import James from "./components/JamesGosling";
import Bjarne from "./components/BjarneStroustrup";
import Dennis from "./components/DennisRitchie";
import Foto from "./foto";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/AndersHejlsberg" element={<AndersHejlsberg />}></Route>
          <Route path="/Dennis" element={<Dennis />}></Route>
          <Route path="/Linus" element={<Linus />}></Route>
          <Route path="/James" element={<James />}></Route>
          <Route path="/Bjarne" element={<Bjarne />}></Route>
        </Routes>
        <Foto/>
      </BrowserRouter>

    </div>
  );
}

export default App;
