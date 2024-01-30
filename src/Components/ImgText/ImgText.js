import React from "react";
import "./ImgText.scss";

function ImgText({ images }) {
    return (
        <section className="img-text-container">
            <div className="img-container">Image side</div>
            <div className="text-container">
                <h2 className="text-container__header">Landscapes</h2>
                <button className="text-container__button">View</button>
            </div>
        </section>
    );
}

export default ImgText;
