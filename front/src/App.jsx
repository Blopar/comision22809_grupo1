import "./App.css";

import ShowPhones from "./components/ShowPhones"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowSpecifics from "./components/ShowSpecifics";

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowPhones/>} />
          <Route path="/phone/:id" element={<ShowSpecifics/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


