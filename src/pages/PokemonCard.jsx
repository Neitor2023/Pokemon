import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PokemonCard = ({ url }) => {
    const trainer = useSelector(state => state.trainer)
    const [poke, setPoke] = useState({})
    useEffect(() => {
        axios
            .get(url)
            .then(resp => setPoke(resp.data))
            .catch(error => console.error(error))
    }, [])
    console.log("llegue")
    return (
        <div>
            {poke.name}
            <img width={"150px"} src={poke.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokemonCard;