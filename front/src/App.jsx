import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowPhones from "./components/ShowPhones"
import ShowPhonesMarca from "./components/ShowPhonesMarca";


function App() {


  return (
    <>
    <div className="App">
   
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowPhones/>} />
          <Route path="/brands/:busqueda" element={<ShowPhonesMarca/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;


