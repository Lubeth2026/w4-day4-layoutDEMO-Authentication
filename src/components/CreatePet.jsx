
import React, { useState } from 'react'
import { supabase } from '../utils/supabase'

export default function CreatePet() {
      const [name, setName] = useState("");
      const [type, setType] = useState("");
      const [age, setAge] = useState("");
      const [breed, setBreed] = useState("");
      const [image, setImage] = useState("");
      const [description, setDescription] = useState("");
    
    async function addPet(event) {
        event.preventDefault();
        try {
        const newPet = { name, type, age, breed, image, description };
        console.log(newPet);
        const { data, error } = await supabase.from("pets").insert(newPet)
    } catch (error) {
        console.log("Couldn't Create Pet"); 
    }
   }

  return (
    <div>
      <form onSubmit={addPet}>
        <label htmlFor="name">Name:
          <input type="text" name="name" id="name" value={name} onChange={(event)=> setName(event.target.value)}/>
        </label>
        <label htmlFor="type">Type of Pet:
          <input type="text" name="type" id="type" value={type} onChange={(event)=> setType(event.target.value)}/>
        </label>
        <label htmlFor="age">Age:
          <input type="number" name="age" id="age" value={age} onChange={(event)=> setAge(event.target.value)}/>
        </label>
        <label htmlFor="breed">Breed:
          <input type="text" name="breed" id="breed" value={breed} onChange={(event)=> setBreed(event.target.value)}/>
        </label>
        <label htmlFor="name">Image URL:
          <input type="text" name="name" id="name" value={image} onChange={(event)=> setImage(event.target.value)}/>
        </label>
        <label htmlFor="description">Description:
          <input type="text" name="description" id="description" value={description} 
          onChange={(event)=> setDescription(event.target.value)}/>
        </label>
        <button>Add Pet</button>
      </form>
    </div>
  );
}
