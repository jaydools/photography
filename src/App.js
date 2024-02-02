import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ImgText from "./Components/ImgText/ImgText";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [getImages, setGetImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const imageEndpoint = `${process.env.REACT_APP_BACKEND_URL}/images`;

            try {
                const response = await axios.get(imageEndpoint);
                const images = response.data;
                setGetImages(images);
            } catch (error) {
                console.error("Error fetching images: ", error);
            }
        };
        getImages();
    }, []);
    console.log(getImages);

    // const { resources } = getImages;

    // const landscapeImg = resources.filter((image) =>
    //     image.folder.includes("photography/landscapes")
    // );

    // map through getImages and check the
    // resouces.[index].
    // then find .folder attribute of that index and if it containts "photography/landscapes"
    // then save that index to state and pass it to component as landsacpeImg

    // write logic here for both ImgText's and pass to each and flex reverse one
    // const [isReversed, setIsReversed] = useState(false);
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <ImgText landscapeImg={landscapeImg} /> */}
            <ImgText />
        </div>
    );
}

export default App;
