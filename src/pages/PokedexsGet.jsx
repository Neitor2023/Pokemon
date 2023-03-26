import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import Pokedextype from './PokedexType'
import axios from 'axios';
import { Link } from 'react-router-dom'

const PokedexsGet = ({ pokedex, setPokedex }) => {
    const [page, setPage ] = useState(1)
    const trainer = useSelector(state => state.trainer)
    const getType = (url) => {
        axios
        .get(url)
        .then(resp => setPokedex(resp.data))
        // console.log("url",url)
    }
    
    let shortPokedex
    let shortCount
    let pokedexShow
    let perPage
    let last_I

    const rout = () => {
        if (pokedex?.results) {
            shortPokedex = pokedex?.results
            shortCount = pokedex?.count
        } else {
            shortPokedex = pokedex?.pokemon
            shortCount = pokedex.pokemon?.length
        }
        perPage = 20
        last_I = perPage * page
    
        console.log("page ", page)
        console.log("perPage ", perPage)
        console.log("last_I ",last_I)
        pokedexShow = shortPokedex?.slice(last_I - perPage, last_I)
        
        
        // fullbuttons
    }

    // console.log("shortPokedex ",shortPokedex)
    // const pokemonsToShow = shortRoutePokemons?.slice(lastIndex - perPage, lastIndex)
    console.log("pokedexShow", pokedexShow)

    rout()
    return (
        <div>
            <h2> {trainer} </h2>
            <h1>PokedexsGet</h1>
            <Pokedextype getType={getType} />
            <ul>
                {pokedexShow?.map((poke) => (
                    <Link key={poke.url ? poke?.url : poke.pokemon?.url} to={`/pokemoncard/${poke.url ? poke?.url : poke.pokemon?.url}`} >
                        <li>
                            {/* punto
                            {poke.pokemons?.length} <br />
                            shortCount {shortCount} <br />
                            shortPokedex {shortPokedex[0].name} */}
                            <PokemonCard
                            url={poke.url ? poke?.url : poke.pokemon?.url}
                            />
                        </li>
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
