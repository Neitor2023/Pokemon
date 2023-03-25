import React from 'react';
import { useSelector } from 'react-redux';

const PokedexsGet = () => {
    const trainer = useSelector(state => state.trainer)
    return (
        <div>
            <h1>PokedexsGet</h1>
            <h2> {trainer} </h2>
        </div>
    );
};

export default PokedexsGet;