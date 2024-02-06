import "./Homepage";
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import ImgText from "../../Components/ImgText/ImgText";

function Homepage() {
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
    // write logic here for both ImgText's and pass to each and flex reverse one
    // const [isReversed, setIsReversed] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);
    return (
        <div>
            <Hero />
            <ImgText currentImages={currentImages} />
            <ImgText />
        </div>
    );
}

export default Homepage;
