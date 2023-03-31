import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../pages/PokedexItems.css'

const PokedexItems = () => {
    const trainer = useSelector(state => state.trainer)
    const [poke, setPoke] = useState({})
    const navigate = useNavigate()
    const [ sear , setSear ] = useState({})

    const { id } = useParams();
    // console.log("PokedexItems id ", id)
    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(resp => setPoke(resp.data))
            .catch(error => {
                Search()
                // console.error(error)
            } )
    }, [])

    const Search = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281")
        .then(resp => {
            setSear(resp.data)
            locateName()
        })
        .catch(error => console.error(error))

        const locateName = () => {
            const locateUrl = sear.filter(name => name = id)
            if (locateUrl) {
                alert("Busquedq Exitosa")
            } else {
                alert("No se encontro nada")
            }
        }    

    }

    // console.log("data Item ", poke)
    return (
        <div className='main'>
            <main className='container-main'>
                <div className='Go_Back'>
                <button className='Go_Backbtn_btn' onClick={() => navigate(-1)}>Go Back</button>
                </div>
                <div className="header-main-pokemon">
                    <div className="container-img-pokemon">
                        <img src={poke.sprites?.other.dream_world.front_default} />
                        <br />
                        <h1>{poke.name}</h1>
                    </div>
                </div>
                <div className="container-info-pokemon2">
                    <div className="group-info">
                        <p>
                            {poke.types?.[0].type.name} {poke.types?.length == 2 ? poke.types?.[1].type.name : ""} <br />
                            Types
                        </p>
                    </div>
                    <div className="group-info">
                        <p>
                            <span>{poke.height} m</span> <br />
                            Height
                        </p>
                    </div>
                    <div className="group-info">
                        <p>
                            <span> {poke.weight} Kg</span> <br />
                            Weight
                        </p>
                    </div>
                </div>

                <div className="container-stats">
                    <div className="stats">
                        <div className="stat-group">
                            <span>Hp</span>
                            <div Style={`width:${poke.stats?.[0].base_stat}%`} className="progress-bar"></div>
                            <span className="counter-stat">{poke.stats?.[0].base_stat} %</span>
                        </div>
                        <div className="stat-group">
                            <span >Attack</span>
                            <div Style={`width:${poke.stats?.[1].base_stat}%`} className="progress-bar"></div>
                            <span className="counter-stat">{poke.stats?.[1].base_stat} %</span>
                        </div>
                        <div className="stat-group">
                            <span>Defense</span>
                            <div Style={`width:${poke.stats?.[2].base_stat}%`} className="progress-bar"></div>
                            <span className="counter-stat">{poke.stats?.[2].base_stat} %</span>
                        </div>
                        <div className="stat-group">
                            <span>Special Attack</span>
                            <div Style={`width:${poke.stats?.[3].base_stat}%`} className="progress-bar"></div>
                            <span className="counter-stat">{poke.stats?.[3].base_stat} %</span>
                        </div>
                        <div className="stat-group">
                            <span>Special Defense</span>
                            <div Style={`width:${poke.stats?.[4].base_stat}%`} className="progress-bar"></div>
                            <span className="counter-stat">{poke.stats?.[4].base_stat} %</span>
                        </div>
                        <div className="stat-group">
                            <span>Speed</span>
                            <div Style={`width:${poke.stats?.[5].base_stat}%`} className="progress-bar"></div>
                            <span className="counter-stat">{poke.stats?.[5].base_stat} %</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PokedexItems;

// <main className="container main-pokemon">
// <div className="header-main-pokemon">
//     {/* <span className="number-pokemon">#1</span> */}
//     <div className="container-img-pokemon">
//         <img
//             src={poke.sprites?.other.dream_world.front_default}
//         />
//     </div>

//     <div className="container-info-pokemon">
//         <h1>{poke.name}</h1>
//         <div className="card-types">
//             <span className="grass">
//                 {poke.types?.[0].type.name} {poke.types?.length == 2 ? poke.types?.[1].type.name : ""}
//             </span>
//         </div>
//         <div className="info-pokemon">
//             <div className="group-info">
//                 <p>Height</p>
//                 <span>{poke.height} m</span>
//             </div>
//             <div className="group-info">
//                 <p>Weight</p>
//                 <span> {poke.weight} Kg</span>
//             </div>
//         </div>
//     </div>
// </div>

// <div className="container-stats">
//     <h1>Statistics in percentage</h1>
//     <div className="stats">
//         <div className="stat-group">
//             <span>Hp</span>
//             <div Style={`width:${poke.stats?.[0].base_stat}%`} className="progress-bar"></div>
//             <span className="counter-stat">{poke.stats?.[0].base_stat} %</span>
//         </div>
//         <div className="stat-group">
//             <span >Attack</span>
//             <div Style={`width:${poke.stats?.[1].base_stat}%`} className="progress-bar"></div>
//             <span className="counter-stat">{poke.stats?.[1].base_stat} %</span>
//         </div>
//         <div className="stat-group">
//             <span>Defense</span>
//             <div Style={`width:${poke.stats?.[2].base_stat}%`} className="progress-bar"></div>
//             <span className="counter-stat">{poke.stats?.[2].base_stat} %</span>
//         </div>
//         <div className="stat-group">
//             <span>Special Attack</span>
//             <div Style={`width:${poke.stats?.[3].base_stat}%`} className="progress-bar"></div>
//             <span className="counter-stat">{poke.stats?.[3].base_stat} %</span>
//         </div>
//         <div className="stat-group">
//             <span>Special Defense</span>
//             <div Style={`width:${poke.stats?.[4].base_stat}%`} className="progress-bar"></div>
//             <span className="counter-stat">{poke.stats?.[4].base_stat} %</span>
//         </div>
//         <div className="stat-group">
//             <span>Speed</span>
//             <div Style={`width:${poke.stats?.[5].base_stat}%`} className="progress-bar"></div>
//             <span className="counter-stat">{poke.stats?.[5].base_stat} %</span>
//         </div>
//     </div>
// </div>
// </main>