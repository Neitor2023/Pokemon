import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const PokedexItems = () => {
    const trainer = useSelector(state => state.trainer)
    const [poke, setPoke] = useState({})
    const navigate = useNavigate()

    const { id } = useParams();
    console.log("PokedexItems id ", id)
    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(resp => setPoke(resp.data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <h1>PokedexItems</h1>
            <h2> {trainer} </h2>
            {poke.name}
            <img width={"150px"} src={poke.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokedexItems;