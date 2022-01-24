import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";
import people from "./data";
function App() {
    const reviews = data;
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if (index > people.length - 1) {
                index = 0;
            }
            return index;
        });
    };
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1;
            if (index < 0) {
                index = people.length - 1;
            }
            return index;
        });
    };

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1;
                if (index > people.length - 1) {
                    index = 0;
                }
                return index;
            });
        }, 5000);
        return () => clearInterval(slider);
    }, [index]);

    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span> Reviews
                </h2>
            </div>
            <div className="section-center">
                {reviews.map((review, reviewIndex) => {
                    const { id, image, title, name, quote } = review;
                    let position = "nextSlide";
                    if (reviewIndex === index) {
                        position = "activeSlide";
                    }
                    if (
                        reviewIndex === index - 1 ||
                        (index === 0 && reviewIndex === reviews.length - 1)
                    ) {
                        position = "lastSlide";
                    }
                    return (
                        <article key={id} className={position}>
                            <img
                                src={image}
                                alt="name"
                                className="person-img"
                            />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    );
                })}
                <button className="prev" onClick={prevSlide}>
                    <FaChevronLeft />
                </button>
                <button className="next" onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
}

export default App;
