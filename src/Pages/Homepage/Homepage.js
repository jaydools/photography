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
    console.log(getImages); // gets first curser of images

    // write logic here to sort if its a landscape image
    const getRandoLandscape = () => {
        if (getImages.resources) {
            const landscapeImages = getImages.resources.filter(
                (image) => image.folder === "photography/landscapes"
            );

            if (landscapeImages.length === 0) {
                return console.log("No images found?!?!?!");
            }

            const randomIndex = Math.floor(Math.random() * landscapeImages.length);
            return landscapeImages[randomIndex].secure_url;
        }
    };

    const randoLandscapeImg = getRandoLandscape();

    return (
        <main>
            <Hero />
            <ImgText randoLandscapeImg={randoLandscapeImg} />
            <ImgText />
        </main>
    );
}

export default Homepage;
