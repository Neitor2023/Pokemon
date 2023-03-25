import React from 'react';
import { useSelector } from 'react-redux';

const PokedexType = () => {
    const trainer = useSelector(state => state.trainer)
    return (
        <div>
            <h1>PokedexType</h1>
            <h2> {trainer} </h2>
        </div>
    );
};

export default PokedexType;