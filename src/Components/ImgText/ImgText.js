import React, { useEffect, useRef, useState } from "react";
import "./ImgText.scss";
import { Link } from "react-router-dom";

function ImgText({ currentImg, reverseOrder, categoryName }) {
    const unoReverse = reverseOrder ? "img-text-container-reverse" : "img-text-container";
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entery) => {
                    if (entery.isIntersecting && entery.intersectionRatio >= 0.15) {
                        setVisible("entering");
                    } else if (!entery.isIntersecting && entery.intersectionRatio < 0.15) {
                        setVisible("exiting");
                    }
                });
            },
            { threshold: [0.15, 0.85] }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className={unoReverse} ref={sectionRef}>
            <img
                className={`img-container ${
                    visible === "entering"
                        ? "img-container--entering"
                        : visible === "exiting"
                        ? "img-container--exiting"
                        : ""
                }`}
                src={currentImg}
            />
            <div className="text-container">
                <h2 className="text-container__header">{categoryName}</h2>
                <Link to="/landscapes">
                    <button className="text-container__button">View</button>
                </Link>
            </div>
        </section>
    );
}

export default ImgText;
