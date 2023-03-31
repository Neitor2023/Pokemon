import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import Pokedextype from './PokedexType'
import Pagination from '../components/Pagination';
import axios from 'axios';

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
    let shortCount

    const rout = () => {
        if (pokedex?.results) {
            shortPokedex = pokedex?.results
            shortCount = pokedex?.count
        } else {
            shortPokedex = pokedex?.pokemon
            shortCount = pokedex.pokemon?.length
        }
        const lastPostIndex = currentPage * postsPerPage;
        const firstPostIndex = lastPostIndex - postsPerPage;
        pokedexShow = shortPokedex?.slice(firstPostIndex, lastPostIndex);
    }

    rout()
    return (
        <div className='Container'>
            <Pokedextype getType={getType} />
            <div className='Title'>
                <h1>PokedexsGet</h1>
                <Pagination
                    totalPosts={shortCount}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div >
            <div className="cards">
                {pokedexShow?.map((poke) => (
                    <ul key={poke.url ? poke?.url : poke.pokemon?.url}>
                        <PokemonCard
                            url={poke.url ? poke?.url : poke.pokemon?.url}
                        />
                    </ul>
                ))
                }
            </div>
        </div>
    );
};

export default PokedexsGet;