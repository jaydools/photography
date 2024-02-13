import React, { useEffect, useRef } from "react";
import "./Hero.scss";

function Hero({ randoImg }) {
    const imagesRef = useRef([]);
    const backgroundRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollers = imagesRef.current;
            const background = backgroundRef.current;

            if (scrollers && scrollers.length > 0) {
                scrollers.forEach((image) => {
                    const translateY = -150 * (scrollPosition / window.innerHeight);
                    image.style.transform = `translateY(${translateY}px)`;
                });
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="hero-container" style={{ backgroundImage: `url(${randoImg[0]})` }}>
            <h1 className="hero-container__header">Jordan Dooley</h1>
            <h2 className="hero-container__subhead">
                Website Design <br></br>Software Engineering
            </h2>
            <h3 className="hero-container__subhead--small">(Photo Gallery Website)</h3>

            <div className="hero-right">
                {randoImg.map((imageUrl, index) => (
                    <img
                        key={index}
                        //impliment scroll movement with ref
                        ref={(el) => (imagesRef.current[index] = el)}
                        className={`hero-right__img${index + 1}`}
                        src={imageUrl}
                        alt={`Random Image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Hero;
