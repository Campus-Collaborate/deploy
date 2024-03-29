import React from 'react';
import Card from './Card';

const Panel = ({prop}) => {
  
  const cardData = [
    {
      title: "Card 1",
      content: "Content for Card 1",
      image: "./Vector.png",
    },
    {
      title: "Card 2",
      content: "Content for Card 2",
      image: "./src/Vector.png",
    },
    {
        title: "Card 2",
        content: "Content for Card 2",
        image: "./aa.jpg",
      },
      {
        title: "Card 2",
        content: "Content for Card 2",
        image: "./aa.jpg",
      },
      {
        title: "Card 2",
        content: "Content for Card 2",
        image: "./aa.jpg",
      },
      {
        title: "Card 2",
        content: "Content for Card 2",
        image: "./aa.jpg",
      },
      {
        title: "Card 2",
        content: "Content for Card 2",
        image: "./aa.jpg",
      },
      {
        title: "Card 2",
        content: "Content for Card 2",
        image: "./aa.jpg",
      },
    
  ];

  return (
    <div className={prop}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default Panel;
