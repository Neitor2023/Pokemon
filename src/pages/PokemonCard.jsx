import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './PokemonCard.css'

const PokemonCard = ({ url }) => {
    const trainer = useSelector(state => state.trainer)
    const [poke, setPoke] = useState({})

    useEffect(() => {
        axios
            .get(url)
            .then(resp => setPoke(resp.data))
            .catch(error => console.error(error))
    }, [])
// console.log("data", poke.types?.[0].type.name)
console.log("data", poke.stats?.[1].stat.name)
// console.log("data", poke.stats?.[0].base_stat)
console.log("data", poke)
    return (
        
        <div className='container_card'>
        <div 
        className="card animated"
        // style={{ backgroundImage: `url(${poke.sprites?.other.dream_world.front_default ? poke.sprites?.other.dream_world.front_default : "https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"})` }}
        style={{ backgroundImage: `url("https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg")` }}
        >

            {poke.name} <br />
            Type : 
            {poke.types?.[0].type.name} <br />
            {/* {poke.types?.[1].type.name ? poke.types?.[0].type.name : ""} */}            
            {poke.stats?.[0].stat.name} : {poke.stats?.[0].base_stat} <br />
            {poke.stats?.[1].stat.name} : {poke.stats?.[1].base_stat} <br />
            {poke.stats?.[2].stat.name} : {poke.stats?.[2].base_stat} <br />
            {poke.stats?.[5].stat.name} : {poke.stats?.[5].base_stat}
            {/* <img className='img_card' width={"100px"} src={"https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"} alt="" /> */}
            <img className='img_card' width={"100px"} src={poke.sprites?.other.dream_world.front_default} alt="" />
        </div>
        <div 
        className="img_pokedex"
        style={{ backgroundImage: `url("https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg")` }}
        >

        </div>
            </div>
    );
};

export default PokemonCard;

// <div>
// <section>
// <div 
// className="card animated"
// style={{ backgroundImage: `url(${poke.sprites?.other.dream_world.front_default ? poke.sprites?.other.dream_world.front_default : "https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"})` }}
// >            
// <img width={"150px"} src={poke.sprites?.other.dream_world.front_default} alt="" />
// </div>
// </section>
// <style className="hover"></style>
// </div>
