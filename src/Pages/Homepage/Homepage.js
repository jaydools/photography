import "./Homepage.scss";
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
    console.log(getImages); // gets all images

    // Logic here to sort if its a landscape image and pick a rando
    const getRandoLandscape = () => {
        if (getImages.resources) {
            const landscapeImages = getImages.resources.filter(
                (image) => image.folder === "photography/landscapes"
            );

            if (landscapeImages.length === 0) {
                return console.log("No landscapes found?!?!?!");
            }

            const randomIndex = Math.floor(Math.random() * landscapeImages.length);
            return landscapeImages[randomIndex].secure_url;
        }
    };
    const randoLandscapeImg = getRandoLandscape();

    // Logic here to sort if its a animals image and pick a rando
    const getRandoAnimal = () => {
        if (getImages.resources) {
            const animalImages = getImages.resources.filter(
                (image) => image.folder === "photography/animals"
            );

            if (animalImages.length === 0) {
                return console.log("No animals found?!?!?!");
            }

            const randomIndex = Math.floor(Math.random() * animalImages.length);
            return animalImages[randomIndex].secure_url;
        }
    };
    const randoAnimalImg = getRandoAnimal();

    // Logic here to get folder name and capitalize
    const getCategoryName = (folder) => {
        // Split the folder string by "/" and return the last part
        const parts = folder.split("/");
        // Remove the first half
        const categoryName = parts[parts.length - 1];
        // Return that, capitailize first
        return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    };
    const landscapes = getCategoryName("photography/landscapes");
    const animals = getCategoryName("photography/animals");

    return (
        <main>
            <Hero />
            <ImgText
                currentImg={randoLandscapeImg}
                reverseOrder={false}
                categoryName={landscapes}
            />
            <ImgText currentImg={randoAnimalImg} reverseOrder={true} categoryName={animals} />
        </main>
    );
}

export default Homepage;
