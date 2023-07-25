import React from 'react';
import '../styles/All_Categories.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import img1 from '../images/img1.jpg';
import img5 from '../images/img5.jpg';
import img7 from '../images/img7.jpg';
import Rating from '../components/Rating/Ratings';

const AirConditioner = () => {
  const cards = [
    {
      imgSrc: img1,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 4, // Replace this with the actual rating for the first card
    },
    {
      imgSrc: img5,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 5, // Replace this with the actual rating for the second card
    },
    {
      imgSrc: img7,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 3, // Replace this with the actual rating for the third card
    },
  ];

  return (
    <section id="Categories">
      <div className="CardContainer">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="cardimg">
              <img src={card.imgSrc} alt="" />
            </div>

            <div className="cardDetails">
              <h1>{card.title}</h1>
              <p style={{ position: 'relative', top: '20px', left: '10px', textAlign: 'justify', width: '315px' }}>
                <Rating rating={card.rating} /> {/* Add the Rating component with the rating */}
                {card.description}
              </p>

              <div className="btn1">
                <button>
                  Read More <AiOutlineArrowRight id="arrow" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AirConditioner;
