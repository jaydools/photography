import React from "react";
import "./Hero.scss";

function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-left">
                <h1 className="hero-left__header">Jordan Dooley</h1>
                <h2 className="hero-left__subhead">Photography</h2>
            </div>
            <div className="hero-right">
                <div className="hero-right__img1">1</div>
                <div className="hero-right__img2">2</div>
                <div className="hero-right__img3">3</div>
                <div className="hero-right__img4">4</div>
                <div className="hero-right__img5">5</div>
                <div className="hero-right__img6">6</div>
            </div>
        </section>
    );
}

export default Hero;
