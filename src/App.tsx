import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";


function App() {

  return (
    <div className="App">
        <Routes>
            <Route index element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
