import React from 'react';
import { useSelector } from 'react-redux';

const Pokedex = () => {
    const trainer = useSelector(state => state.trainer)
    return (
        <div>
            <h1>Pokedex</h1>
            <h2> {trainer} </h2>
        </div>
    );
};

export default Pokedex;