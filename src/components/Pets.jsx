import React from "react";

export default function Pets({ pets }) {
  return (
    <ul>
      <h2>READ Pets Ex</h2>
      {pets.map((pet) => (
        <li key={pet.id}>
          <img src={pet.image} alt={pet.description} />
          <p>Name: {pet.name}</p>
          <p>Type of Pet: {pet.type}</p>
          <p>Age: {pet.age}</p>
          <p>Breed: {pet.breed}</p>
          <p>Description: {pet.description}</p>
        </li>
      ))}
    </ul>
  );
}
