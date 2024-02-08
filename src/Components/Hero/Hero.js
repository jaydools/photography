import React, { useEffect, useRef } from "react";
import "./Hero.scss";

function Hero({ randoImg }) {
    const imagesRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollers = imagesRef.current;

            if (scrollers && scrollers.length > 0) {
                scrollers.forEach((image, index) => {
                    const translateY = -150 * (scrollPosition / window.innerHeight);
                    image.style.transform = `translateY(${translateY}px)`;
                    // Apply animation effect dynamically based on scroll position
                    if (scrollPosition > (index + 1) * 100) {
                        image.classList.add("heroUpDown");
                    } else {
                        image.classList.remove("heroUpDown");
                    }
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
        <section className="hero-container">
            <div className="hero-left">
                <h1 className="hero-left__header">Jordan Dooley</h1>
                <h2 className="hero-left__subhead">Photography</h2>
            </div>
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
