import React from "react";
import "./ImgText.scss";
import { Link } from "react-router-dom";

function ImgText({ randoLandscapeImg }) {
    // console.log(currentImages);
    return (
        <section className="img-text-container">
            <img className="img-container" src={randoLandscapeImg} />
            <div className="text-container">
                <h2 className="text-container__header">Landscapes</h2>
                <Link to="/landscapes">
                    <button className="text-container__button">View</button>
                </Link>
            </div>
        </section>
    );
}

export default ImgText;
