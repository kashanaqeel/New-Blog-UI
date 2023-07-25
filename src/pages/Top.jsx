import data from '../data';
import '../styles/Top.css';
import React, { useState, useEffect } from 'react'

const Top = () => {

    const [people] = useState(data);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);



    return (
        <section className="section">
            {/* <div className="title">
                <h2>Testimonials</h2>
            </div> */}
            <div className="section-center">
                {people.map((item, indexPeople) => {
                    const { id, image, name, title, quote } = item;
                    let position = "nextSlide";
                    if (indexPeople === index) {
                        position = "activeSlide";
                    }
                    if (
                        indexPeople === index - 1 ||
                        (index === 0 && indexPeople === people.length - 1)
                    ) {
                        position = "lastSlide";
                    }
                    return (
                        <article className={position} key={id}>

                            <div className="image" style={{ position: 'relative' }}>
                                <h4>{name}</h4>

                                <h1>{title}</h1>

                                <p>{quote}</p>

                                <div className="btn">
                                    <button>Design</button>
                                    <button>Research</button>
                                    <button>Presentation</button>
                                </div>


                                <img src={image} alt="" className="person-img" />

                            </div>

                            {/* <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p> */}
                            
                        </article>
                    );
                })}
                {/* <button className="prev" onClick={() => setIndex(index - 1)}>
                    <i className="fas fa-arrow-left" />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <i className="fas fa-arrow-right" />
                </button> */}
            </div>
        </section>
    )
}

export default Top