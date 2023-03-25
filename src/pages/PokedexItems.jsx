import React from 'react';
import { useSelector } from 'react-redux';

const PokedexItems = () => {
    const trainer = useSelector(state => state.trainer)
    return (
        <div>
            <h1>PokedexItems</h1>
            <h2> {trainer} </h2>
        </div>
    );
};

export default PokedexItems;