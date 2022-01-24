import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alter, setAlter] = useState(false);
    const bcg = rgb.join(",");
    const hexValue = `#${hexColor}`;
    // const hex = rgbToHex(...rgb);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlter(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });
    return (
        <article
            className={`color ${index > 9 && "color-light"}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                setAlter(true);
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            {alter && <p className="alert">copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
