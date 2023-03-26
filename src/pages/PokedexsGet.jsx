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
        // console.log("url",url)
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

    // console.log("shortPokedex ",shortPokedex)
    console.log("pokedex", pokedex)

    rout()
    return (
        <div>
            <h2> {trainer} </h2>
            <h1>PokedexsGet</h1>
            <Pokedextype getType={getType} />
            <ul>
                {shortPokedex?.map((poke) => (
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
