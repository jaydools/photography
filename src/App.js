import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ImgText from "./Components/ImgText/ImgText";

function App() {
    // write logic here for both ImgText's and pass to each and flex reverse one
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <ImgText />
            <ImgText />
        </div>
    );
}

export default App;
