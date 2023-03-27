import React from 'react';
import { useSelector } from 'react-redux';


const Pagination2 = () => {
    const trainer = useSelector(state => state.trainer)
    return (
        <div>
            <h1>Pagination</h1>
            <h2> {trainer} </h2>
        </div>
    );
};

export default Pagination2;