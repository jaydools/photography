import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/landscapes" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
