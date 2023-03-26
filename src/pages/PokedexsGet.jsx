import React from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import Pokedextype from './PokedexType'
import axios from 'axios';
import { Link } from 'react-router-dom'

const PokedexsGet = ({ pokedex, setPokedex }) => {
    const trainer = useSelector(state => state.trainer)
    const getType = (url) => {
        axios
            .get(url)
            .then(resp => setPokedex(resp.data))
            console.log(url)            
    }

    let shortPokedex
    let shortCount
    const rout = () => {
        if (pokedex?.results) {
            shortPokedex = pokedex?.results
            shortCount = pokedex?.count
        } else {
            shortPokedex = pokedex?.pokemon
            shortCount = pokedex.pokemon?.length        
        }
    }
    rout()
    console.log("ruta ",shortPokedex)
    return (
        <div>
            <h2> {trainer} </h2>
            <h1>PokedexsGet</h1>
            {/* key={shortPokedex?.url ? shortPokedex?.url : shortPokedex.pokemons?.url}             */}
            <Pokedextype getType={getType} />
            {/* {pokedex.results?.map((poke) => ( */}
            <ul>
            {
            shortPokedex?.map((poke) => (
                    <Link key={Date.now()} to={`/pokemoncard/${poke.url ? poke?.url : poke.pokemons?.url}`} >
                        <li> {poke.name} </li>
                        
                    </Link>
                    ))
            }
            </ul>
        </div>
    );
};

export default PokedexsGet;
// <PokemonCard url={poke.url} key={poke.url} />
{/* <PokemonCard 
url={poke.url ? poke?.url : poke.pokemons?.url} 
key={poke.url ? poke?.url : poke.pokemons?.url} 
/> */}
