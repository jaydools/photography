import React from "react";
import "./ImgText.scss";
import { Link } from "react-router-dom";

function ImgText({ randoLandscapeImg, reverseOrder, categoryName }) {
    const unoReverse = reverseOrder ? "img-text-container-reverse" : "img-text-container";

    return (
        <section className={unoReverse}>
            <img className="img-container" src={randoLandscapeImg} />
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
