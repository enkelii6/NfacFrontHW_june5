"use client";
import { Card } from "../components/card"
import { useState, useEffect } from "react";

export default function page() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setCards(data);
        } else {
          throw new Error('Fetched data is not an array');
        }
      } catch (error) {
        console.error('Error fetching the data:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
        <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        {cards.map(card => (
          <Card key={card.id} title={card.title} description={card.description} id={card.id} />
        ))}
      </div>
    </div>
    </div>
  )
}
