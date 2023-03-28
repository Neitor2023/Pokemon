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

    return (
        <div>
            <section>
            <div 
            className="card animated"
            style={{ backgroundImage: `url(${poke.sprites?.other.dream_world.front_default ? poke.sprites?.other.dream_world.front_default : "https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"})` }}
            >
            
            
            {/* <img width={"150px"} src={poke.sprites?.other.dream_world.front_default} alt="" /> */}

            </div>
                {/* 
                <div className="card charizard animated"></div>
                <div className="card pika animated"></div>
                <div className="card eevee animated"></div>
                <div className="card mewtwo animated"></div> 
                */}
            </section>
            <style className="hover"></style>
        </div>
    );
};

export default PokemonCard;