import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
    const { isLoading, page, nbPages, handlePages } = useGlobalContext();
    return (
        <div className="btn-container">
            <button
                // disable button when isLoading is true
                // different cursor is set in css (.btn-container button:disabled)
                disabled={isLoading}
                className="btn"
                onClick={() => handlePages("dec")}
            >
                prev
            </button>
            <p>
                {page + 1} of {nbPages}
            </p>
            <button
                disabled={isLoading}
                className="btn"
                onClick={() => handlePages("inc")}
            >
                next
            </button>
        </div>
    );
};

export default Buttons;
