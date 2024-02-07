import React from "react";
import "./Hero.scss";

function Hero({ randoImg }) {
    console.log(randoImg);
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
