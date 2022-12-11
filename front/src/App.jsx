
import "./App.css";

import ShowPhones from "./components/ShowPhones"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowPhones/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

