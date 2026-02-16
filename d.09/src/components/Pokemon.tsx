import React from 'react'
import { useEffect, useState } from "react";
import "./../App.css";
import "./../index.css"
import axios from "axios";

function Pokemon() {
    const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [display, setDisplay] = useState(false);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  
  const [ability, setAbility] = useState();

  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim().toLowerCase());
  };
  const HandleFetch = async () => {
    try {
      const URL = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
      const res = URL.data;
      if (res.name === inputValue) {
        setName(res.name);
        setHeight(res.height);
        setWeight(res.weight);
     
        setAbility(res.abilities[0].ability.name);
        setImage(res.sprites.front_default);
        setDisplay(true);
 
      }
      if (!URL) {
        setDisplay(false);
        return;
      }
  return;
      }
     catch (err) {
      console.log(err);
 
    }
  };

  useEffect(() => {
    HandleFetch();
  }, []);




  return (
    <>
      <h1 className="text-6xl mt-32 text-gray-300">Pokemon API</h1>

      {display && (
        <div className="bg-gray-600 m-12 rounded-3xl flex flex-col items-center">
          <p className="text-3xl">{name}</p>
          <img className="w-48 h-48 " src={image} alt={name} />
          <p className="p-2 font-bold">Height : {height} </p>
          <p className="p-2 font-bold">weight : {weight}</p>
          <p
  className="p-2 font-bold rounded-full px-6 mt-2"
>
</p>

          
          <p className="p-2 font-bold">Ability : {ability}</p>
        </div>
      )}

      <input
        type="text"
        placeholder="enter a name"
        className="border h-12 w-64 rounded-full bg-gray-600 text-white-400 p-4 mt-6"
        value={inputValue}
        onChange={handleEvent}
      />
      <p className="p-2">your search: {inputValue}</p>


      <button className="mt-4 bg-gray-600 mb-12 p-4" onClick={HandleFetch}>
        search
      </button>
      
    </>
  )
}

export default Pokemon