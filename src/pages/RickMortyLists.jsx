import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const RickMortyLists = () => {
    const navigate = useNavigate();
    const [dataRick, setDataRick] = useState({})
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            // .then((resp) => console.log(resp.data))
            .then((resp) => setDataRick(resp.data))
            // .then((resp) => setDataRick(resp.data.results))
            .catch(error => console.error(error))
    }, [])

    // console.log(dataRick.info?.next)
    // console.log(dataRick.info?.prev)
    // console.log(dataRick.results)
    return (
        <div>
            <h1>Listado Rick and Morty</h1>
            <Link to={`/RickMortyLists/${dataRick.info?.next}`} >
                <li> Siguiente </li>
            </Link>
            <Link to={`/RickMortyLists/${dataRick.info?.prev}`} >
                <li> Anterior </li>
            </Link>
            <ul>
                {
                    dataRick.results?.map(elem => (
                        <Link key={elem.id} to={`/RickMortyDetail/${elem.id}`} >
                            <li> {elem.name} </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
};

export default RickMortyLists;