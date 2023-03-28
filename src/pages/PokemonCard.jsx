import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './PokemonCard.css'

const PokemonCard = ({ url }) => {
    const trainer = useSelector(state => state.trainer)
    const [poke, setPoke] = useState({})
    const [color, setColor ] = useState("black")

    useEffect(() => {
        axios
            .get(url)
            .then(resp => {
                setPoke(resp.data)
                getColor(poke.game_indices?.[1].version.name)
            })
            .catch(error => console.error(error))
            // getColor()
        }, [])
            
            
            // console.log("data", poke.types?.[0].type.name)
        // console.log("data", poke.stats?.[1].stat.name)
        // console.log("data", poke.stats?.[0].base_stat)
        console.log("data", poke.game_indices?.[1].version.name)
        const getColor = (colorData) =>{
            if (colorData) {
                console.log("colorData ",colorData)
            } else {
                console.log("colorData fallo ",colorData)
                setColor("black")
            }
        }
        // getColor
    return (
        
        <div 
        className="card animated"
        style={{ backgroundColor: poke.game_indices?.[1].version.name }}
        // style={{ backgroundImage: `url(${poke.sprites?.other.dream_world.front_default ? poke.sprites?.other.dream_world.front_default : "https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"})` }}
        // style={{ backgroundImage: `url("https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg")` }}
        >

            {/* <p><strong>{poke.name}</strong></p><br />
            <><strong>Type : </strong>{poke.types?.[0].type.name}<br />
            <strong>{poke.stats?.[0].stat.name} : </strong>{poke.stats?.[0].base_stat}<br />
            <strong>{poke.stats?.[1].stat.name} : </strong>{poke.stats?.[1].base_stat}<br />
            <strong>{poke.stats?.[2].stat.name} : </strong>{poke.stats?.[2].base_stat}<br />
            <strong>{poke.stats?.[5].stat.name} : </strong>{poke.stats?.[5].base_stat}</p><br /> */}

            {/* <p><strong>{poke.name}</strong></p><br />
            <p><strong>Type : </strong>{poke.types?.[0].type.name}</p><br />
            <p><strong>{poke.stats?.[0].stat.name} : </strong>{poke.stats?.[0].base_stat}</p><br />
            <p><strong>{poke.stats?.[1].stat.name} : </strong>{poke.stats?.[1].base_stat}</p><br />
            <p><strong>{poke.stats?.[2].stat.name} : </strong>{poke.stats?.[2].base_stat}</p><br />
            <p><strong>{poke.stats?.[5].stat.name} : </strong>{poke.stats?.[5].base_stat}</p><br /> */}
             
            {/* {poke.types?.[1].type.name ? poke.types?.[0].type.name : ""} */}            
            {/* {poke.stats?.[0].stat.name} : {poke.stats?.[0].base_stat} <br />
            {poke.stats?.[1].stat.name} : {poke.stats?.[1].base_stat} <br />
            {poke.stats?.[2].stat.name} : {poke.stats?.[2].base_stat} <br />
            {poke.stats?.[5].stat.name} : {poke.stats?.[5].base_stat} */}
            <img className='img_card' src={poke.sprites?.other.dream_world.front_default}/>
            <img className='img_back' src={"https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"} alt="" />

            <div className='pok_name'><strong>{poke.name}</strong></div>
            <div className='detail'><strong>type : </strong>{poke.types?.[0].type.name}</div>
            <div className='detail'><strong>specie : </strong>{poke.species?.name}</div>
            <div className='detail'><strong>{poke.stats?.[0].stat.name} : </strong>{poke.stats?.[0].base_stat}</div>
            <div className='detail'><strong>{poke.stats?.[1].stat.name} : </strong>{poke.stats?.[1].base_stat}</div>
            <div className='detail'><strong>{poke.stats?.[2].stat.name} : </strong>{poke.stats?.[2].base_stat}</div>
            <div className='detail'><strong>{(poke.stats?.[3].stat.name).replace("-"," ")} : </strong>{poke.stats?.[3].base_stat}</div>
            <div className='detail'><strong>{(poke.stats?.[4].stat.name).replace("-"," ")} : </strong>{poke.stats?.[4].base_stat}</div>
            <div className='detail'><strong>{poke.stats?.[5].stat.name} : </strong>{poke.stats?.[5].base_stat}</div>


        </div>
    );
};

export default PokemonCard;

// <div>
// <section>
// <div 
// className="card animated"
// style={{ backgroundImage: `url(${poke.sprites?.other.dream_world.front_default ? poke.sprites?.other.dream_world.front_default : "https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"})` }}
// >            
// <img width={"150px"} src={poke.sprites?.other.dream_world.front_default} alt="" />
// </div>
// </section>
// <style className="hover"></style>
// </div>
