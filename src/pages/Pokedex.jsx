import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokedexsGet from './PokedexsGet';

const Pokedex = () => {
    const trainer = useSelector(state => state.trainer)
    const navigate = useNavigate();
    const [pokedex , setPokedex ] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=> {
        getPokedex();
    },[])
    
    const getPokedex = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281")
        .then((resp) => setPokedex(resp.data))
        .catch(error => console.error(error))
    }

    return (
        <div>
            {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
            <h1>Pokedex</h1>
            <h2> {trainer} </h2>
            <input type="text" value={search} onChange={(e => setSearch(e.target.value))} />
            <button onClick={()=> navigate(`/pokedexitems/${search}`)}>Search</button>
            <PokedexsGet pokedex={pokedex} setPokedex={setPokedex}/>
        </div>
    );
};

export default Pokedex;