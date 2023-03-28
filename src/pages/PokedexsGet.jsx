import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import PokemonCard from './PokemonCard';
import Pokedextype from './PokedexType'
import Pagination from '../components/Pagination';
import axios from 'axios';
// import PokemonCardHoloEffect from './PokemonCardHoloEffect';

const PokedexsGet = ({ pokedex, setPokedex }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const [page, setPage] = useState(1)
    const trainer = useSelector(state => state.trainer)
    const getType = (url) => {
        axios
            .get(url)
            .then(resp => setPokedex(resp.data))
        setCurrentPage(1)
    }

    let shortPokedex
    let pokedexShow
    let totalPages
    let shortCount
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
        // perPage = 20
        // last_I = perPage * page
        // totalPages = Math.ceil(shortCount / perPage)
        // console.log("page ", page)
        // console.log("perPage ", perPage)
        // console.log("last_I ", last_I)
        // pokedexShow = shortPokedex?.slice(last_I - perPage, last_I)
        const lastPostIndex = currentPage * postsPerPage;
        const firstPostIndex = lastPostIndex - postsPerPage;
        pokedexShow = shortPokedex?.slice(firstPostIndex, lastPostIndex);
    }

    rout()
    return (
        <div>
            <h2> {trainer} </h2>
            <h1>PokedexsGet</h1>
            {/* 
            <h4>//////// ANTES ////////</h4>
            <PokemonCardHoloEffect /><br />
            <h4>//////// DESPUES ////////</h4>
            */}
            <Pokedextype getType={getType} />
            <div>
                <Pagination
                    totalPosts={shortCount}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div >
            <div className="cards">

            {/* <ul> */}
                {pokedexShow?.map((poke) => (
                    <Link key={poke.url ? poke?.url : poke.pokemon?.url} to={`/pokemoncard/${poke.url ? poke?.url : poke.pokemon?.url}`} >
                        {/* <li> */}
                            <PokemonCard
                                url={poke.url ? poke?.url : poke.pokemon?.url}
                                />
                        {/* </li> */}
                    </Link>
                ))
            }
            {/* </ul> */}
            </div>
        </div>
    );
};

export default PokedexsGet;
// <PokemonCard url={poke.url} key={poke.url} />
{/* <PokemonCard 
url={poke.url ? poke?.url : poke.pokemons?.url} 
key={poke.url ? poke?.url : poke.pokemons?.url} 
/> */}
