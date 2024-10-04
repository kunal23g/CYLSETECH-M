import React, { useState } from 'react';

const Card = ({ title, content, color, isFlipped, onClick }) => (
  <div
    className="w-full h-full relative cursor-pointer overflow-hidden rounded-xl"
    onClick={onClick}
  >
    <div
      className={`w-full h-full absolute ${color} flex items-center justify-center p-6 transition-opacity duration-300 ${
        isFlipped ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <span className="font-foundersGrotesk text-4xl sm:text-5xl lg:text-7xl text-center text-white">
        {title}
      </span>
    </div>
    <div
      className={`w-full h-full absolute bg-[#192826] flex items-center justify-center p-6 transition-opacity duration-300 ${
        isFlipped ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ul className="font-foundersGrotesk text-lg sm:text-xl lg:text-2xl text-left text-white list-disc space-y-4">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Cards = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const cards = [
    {
      title: 'Helping Small-Scale Businesses',
      content: [
        'Process Optimization .',
        'Affordable Technology Integration .',
        'Digital Marketing & Branding .'
      ],
      color: 'bg-[#004D43]'
    },
    {
      title: 'Supporting Well-Established Companies',
      content: [
        'Automation & AI Solutions .',
        'Custom Technology Integration .',
        'Data-Driven Marketing & Analytics .'
      ],
      color: 'bg-[#192826]'
    },
    {
      title: 'Fueling High-Growth Companies',
      content: [
        'Scalable Cloud & Automation Solutions .',
        'Growth Strategy Consulting .',
        'Innovative Tech Adoption .'
      ],
      color: 'bg-[#192826]'
    },
  ];

  return (
    <div id='services' className=" w-full min-h-screen p-4 sm:p-10 flex flex-col justify-center items-center bg-zinc-100">
      <div className="border-b border-zinc-700 pb-6 sm:pb-10 mb-6 sm:mb-10 w-full max-w-7xl">
        <h1 className=" mt-5 text-4xl lg:text-7xl font-neueMontreal tracking-tight text-black ">
          Our Services
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 w-full max-w-7xl">
        {cards.map((card, index) => (
          <div key={index} className="h-96 font-foundersGrotesk sm:h-112 lg:h-128">
            <Card
              title={card.title}
              content={card.content}
              color={card.color}
              isFlipped={flippedCard === index}
              onClick={() => handleCardClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;