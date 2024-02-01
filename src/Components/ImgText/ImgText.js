import React from "react";
import "./ImgText.scss";

function ImgText({ currentImages }) {
    // console.log(currentImages);
    return (
        <section className="img-text-container">
            <img className="img-container" src={currentImages} />
            <div className="text-container">
                <h2 className="text-container__header">Landscapes</h2>
                <button className="text-container__button">View</button>
            </div>
        </section>
    );
}

export default ImgText;
