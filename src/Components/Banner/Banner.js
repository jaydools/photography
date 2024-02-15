import React, { useEffect, useRef } from "react";
import "./Bannser.scss";
import { Link } from "react-router-dom";

function Banner({ currentImg, categoryName }) {
    const sectionRef = useRef(null);

    console.log(currentImg);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            console.log(scrollPosition);

            if (sectionRef.current) {
                const offset = scrollPosition * 0.5;
                sectionRef.current.style.backgroundPositionY = `${offset}px`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            className="banner-container"
            ref={sectionRef}
            style={{ backgroundImage: `url(${currentImg})` }}
        >
            <div className="banner-container__button-wrapper">
                <h2 className="banner-container__text">{categoryName}</h2>
                <Link to="/stars" className="hidden">
                    <button className="banner-container__button">View</button>
                </Link>
            </div>
        </section>
    );
}

export default Banner;
