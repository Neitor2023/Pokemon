import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RickMortyDetail = () => {
    const { id } = useParams()
    const [dataRick, setDataRick] = useState([])
    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((resp) => console.log(resp.data))
            // .then((resp) => setDataRick(resp.data))
            .catch(error => console.error(error))
    }, [id])

    return (
        <div>
            <h1>ID Rick and Morty</h1>
            <h3> {dataRick.location?.name} </h3>
            <h3> {dataRick.gender} </h3>
            <img src={dataRick.image} alt="" />
        </div>
    );
};

export default RickMortyDetail;