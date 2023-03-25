import React from 'react';
import { useSelector } from 'react-redux';

const PokemonCard = () => {
    const trainer = useSelector(state => state.trainer)
    return (
        <div>
            <h1>PokemonCard</h1>
            <h2> {trainer} </h2>
        </div>
    );
};

export default PokemonCard;