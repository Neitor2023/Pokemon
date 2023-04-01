import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import Pokedextype from './PokedexType'
import Pagination from '../components/Pagination';
import axios from 'axios';

const PokedexsGet = ({ pokedex, setPokedex }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);
    const [numpages, SetNumpages] = useState(4)
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

    function changeNumPage(e) {
        setPostsPerPage(e.target.value)
    }
    return (
        <div className='Container'>
            <Pokedextype getType={getType} />
            <div className='Title'>
                <h3>Seleccione cantidad de pokemones : <select value={postsPerPage} onChange={changeNumPage}>
                    <option>4</option>
                    <option>8</option>
                    <option>12</option>
                    <option>16</option>
                    <option>20</option>
                </select></h3>

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