import axios from 'axios';
import React, { useEffect } from 'react';

const ListsRickandMorty = () => {
    useEffect(()=> {
        axios
        .get("https://rickandmortyapi.com/api/location/")
        .then((resp)=> console.log(resp))
        .catch(error => console.error(error))
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default ListsRickandMorty;