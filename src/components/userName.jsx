import React from 'react';
import { useSelector } from 'react-redux';

const userName = () => {
    const userName = useSelector(state => state.counter)
    return (
        <div>
            <h1>userName</h1><br />
            <h2> {userName} </h2>
        </div>
    );
};

export default userName;