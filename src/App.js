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
    // console.log(getImages);
    // write logic here for both ImgText's and pass to each and flex reverse one
    // const [isReversed, setIsReversed] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);

    // useEffect(() => {
    //     const getImages = async () => {
    //         try {
    //             let res = await axios.get(
    //                 `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image`,
    //                 {
    //                     headers: {
    //                         Authorization: `Basic ${Buffer.from(
    //                             process.env.REACT_APP_CLOUDINARY_API_KEY +
    //                                 ":" +
    //                                 process.env.REACT_APP_CLOUDINARY_API_SECRET
    //                         ).toString("base64")}`,
    //                     },
    //                 }
    //             );

    //             const { resources } = res.data;
    //             const images = resources.map((resource) => {
    //                 return {
    //                     id: resource.asset_id,
    //                     title: resource.public_id,
    //                     image: resource.secure_url,
    //                 };
    //             });

    //             setCurrentImages(images);
    //         } catch (err) {
    //             console.error("unknown error... initiate self destruct", err);
    //         }
    //     };

    //     getImages();
    // }, []);
    // console.log(currentImages);
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <ImgText currentImages={currentImages} /> */}
            <ImgText />
        </div>
    );
}

export default App;
