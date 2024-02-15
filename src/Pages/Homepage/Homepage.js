import "./Homepage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import ImgText from "../../Components/ImgText/ImgText";
import Banner from "../../Components/Banner/Banner";

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
    // console.log(getImages); // gets all images

    // // logic here for Hero that just picks rando 6
    const getHeroImages = () => {
        if (getImages.resources) {
            const heroImages = getImages.resources.filter((image) =>
                image.folder.includes("photography")
            );

            if (heroImages.length === 0) {
                return console.log("hmm.. no images at all?");
            }
            const randomImages = [];
            const numImagesToSelect = 7;

            for (let i = 0; i < numImagesToSelect; i++) {
                const randomSix = Math.floor(Math.random() * heroImages.length);
                randomImages.push(heroImages[randomSix].secure_url);
            }
            return randomImages;
        } else {
            return [];
        }
    };
    const randoImg = getHeroImages();

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

    // logic to get rando star pics
    const getRandoStar = () => {
        if (getImages.resources) {
            const starImages = getImages.resources.filter(
                (image) => image.folder === "photography/stars"
            );

            if (starImages.length === 0) {
                return console.log("The sky is falling! :(");
            }

            const randomIndex = Math.floor(Math.random() * starImages.length);
            return starImages[randomIndex].secure_url;
        }
    };
    const randoStarImg = getRandoStar();

    // logic to get rando mts pics
    const getRandoMts = () => {
        if (getImages.resources) {
            const mtsImages = getImages.resources.filter(
                (image) => image.folder === "photography/mountians"
            );

            if (mtsImages.length === 0) {
                return console.log("No big rocks to show! :(");
            }

            const randomIndex = Math.floor(Math.random() * mtsImages.length);
            return mtsImages[randomIndex].secure_url;
        }
    };
    const randoMtsImg = getRandoMts();

    // Logic here to get folder name and capitalize
    const getCategoryName = (folder) => {
        // Split the folder string by "/" and return the last part then capitalize
        const parts = folder.split("/");
        // Remove the first half
        const categoryName = parts[parts.length - 1];
        // Return that, capitailize first
        return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    };
    const landscapes = getCategoryName("photography/landscapes");
    const animals = getCategoryName("photography/animals");
    const stars = getCategoryName("photography/stars");
    const mts = getCategoryName("photography/mountians");

    return (
        <main>
            <Hero randoImg={randoImg} />
            <ImgText
                currentImg={randoLandscapeImg}
                reverseOrder={false}
                categoryName={landscapes}
            />
            <ImgText currentImg={randoAnimalImg} reverseOrder={true} categoryName={animals} />
            <Banner currentImg={randoStarImg} categoryName={stars} />
            <Banner currentImg={randoMtsImg} categoryName={mts} />
        </main>
    );
}

export default Homepage;
