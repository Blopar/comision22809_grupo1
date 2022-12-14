import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowPhones from "./components/ShowPhones"
import Integrantes from "./components/Integrantes"
import ShowSpecifics from "./components/ShowSpecifics"


function App() {


  return (
    <>
    <div className="App">
   
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<ShowPhones/>} />
          <Route path="/phone/:id" element={<ShowSpecifics/>} />
          <Route path="/integrantes" element={<Integrantes/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

