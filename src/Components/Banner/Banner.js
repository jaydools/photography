import React, { useEffect, useRef } from "react";
import "./Bannser.scss";
import { Link } from "react-router-dom";

function Banner({ currentImg, categoryName }) {
    const imagesRef = useRef(null);
    const backgroundRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const image = imagesRef.current;

            if (image) {
                const translateY = -150 * (scrollPosition / window.innerHeight);
                image.style.transform = `translateY(${translateY}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="banner-container">
            <div className="banner-container__button-wrapper">
                <h2 className="banner-container__text">{categoryName}</h2>
                <Link to="/stars" className="hidden">
                    <button className="banner-container__button">View</button>
                </Link>
            </div>
            <img
                className="banner-container__img"
                src={currentImg}
                alt="star image"
                ref={(el) => (imagesRef.current = el)}
            />
        </section>
    );
}

export default Banner;
