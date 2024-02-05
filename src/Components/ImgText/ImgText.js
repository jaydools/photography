import React from "react";
import "./ImgText.scss";

function ImgText({ landscapeImg }) {
    // console.log(currentImages);

    return (
        <section className="img-text-container">
            {/* map through object and display the secureUrl as the image src  src={currentImages.secure_url}
            {landscapeImg.map((image) => (
                <img src={image.secure_url} alt="placeholder" />
            ))} */}
            <div className="text-container">
                <h2 className="text-container__header">Landscapes</h2>
                <button className="text-container__button">View</button>
            </div>
        </section>
    );
}

export default ImgText;
