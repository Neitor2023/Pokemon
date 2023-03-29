import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './PokemonCard.css'
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {
    const navigate = useNavigate();
    const trainer = useSelector(state => state.trainer)
    const [poke, setPoke] = useState({})

    useEffect(() => {
        axios
            .get(url)
            .then(resp => setPoke(resp.data))
            .catch(error => console.error(error))
    }, [])

    // console.log("data id ", poke.id)
    // console.log("data", poke.stats?.[1].stat.name)
    // console.log("data", poke.stats?.[0].base_stat)
    // console.log("data", poke.game_indices?.[1].version.name)

    return (

        <div
            className="card animated"
            style={{ backgroundColor: poke.game_indices?.[1].version.name }}
            onClick={() => navigate(`/pokedexitems/${poke.id}`)}
            >
            <img className='img_card' src={poke.sprites?.other.dream_world.front_default} />
            <img className='img_back' src={"https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"} alt="" />

            <div className='pok_name'><strong>{poke.name}</strong></div>
            <div className='detail'><strong>type : </strong>{poke.types?.[0].type.name} {poke.types?.length == 2 ? poke.types?.[1].type.name : ""}</div>
            <div className='detail'><strong>specie : </strong>{poke.species?.name}</div>

            <div className='detail'><strong>Id : </strong>{poke.id}</div>

            <div className='detail'><strong>{poke.stats?.[0].stat.name} : </strong>{poke.stats?.[0].base_stat}</div>
            <div className='detail'><strong>{poke.stats?.[1].stat.name} : </strong>{poke.stats?.[1].base_stat}</div>
            <div className='detail'><strong>{poke.stats?.[2].stat.name} : </strong>{poke.stats?.[2].base_stat}</div>
            <div className='detail'><strong>{poke.stats?.[3].stat.name ? (poke.stats?.[3].stat.name).replace("-", " ") : ""} : </strong>{poke.stats?.[3].base_stat}</div>
            <div className='detail'><strong>{poke.stats?.[4].stat.name ? (poke.stats?.[4].stat.name).replace("-", " ") : ""} : </strong>{poke.stats?.[4].base_stat}</div>
            <div className='detail'><strong>{poke.stats?.[5].stat.name} : </strong>{poke.stats?.[5].base_stat}</div>
        </div>
    );
};

export default PokemonCard;