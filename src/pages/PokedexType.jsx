import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PokedexType = ({ getType }) => {
    const trainer = useSelector(state => state.trainer)
    const [pokeTypes, setPokeTypes] = useState({})
    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/type/`)
            .then((resp) => setPokeTypes(resp.data))
            .catch((error) => console.error(error))
    }, [])

    return (
        <div>
            <h3>Seleccione tipos de pokemones :
                <select name="" id="" onChange={e => getType(e.target.value)}>
                    <option value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281">All Pokemons</option>
                    {pokeTypes.results?.map((poketype) => (
                        <option value={poketype.url} key={poketype.url} >{poketype.name}</option>
                    ))
                    }
                </select></h3>
        </div>
    );
};

export default PokedexType;