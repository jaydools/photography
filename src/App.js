import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ImgText from "./Components/ImgText/ImgText";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    // write logic here for both ImgText's and pass to each and flex reverse one
    // const [isReversed, setIsReversed] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            try {
                let res = await axios.get(
                    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}`,
                    {
                        headers: {
                            Authorization: `Basic ${Buffer.from(
                                process.env.CLOUDINARY_API_KEY +
                                    ":" +
                                    process.env.CLOUDINARY_API_SECRET
                            ).toString("base64")}`,
                        },
                    }
                );

                const { resources } = res.data;
                const images = resources.map((resource) => {
                    return {
                        id: resource.asset_id,
                        title: resource.public_id,
                        image: resource.secure_url,
                    };
                });

                setCurrentImages(images);
            } catch (err) {
                console.error("unknown error... initiate self destruct", err);
            }
        };

        getImages();
    }, []);

    return (
        <div>
            <Navbar />
            <Hero />
            <ImgText images={currentImages} />
            <ImgText images={currentImages} />
        </div>
    );
}

export default App;
