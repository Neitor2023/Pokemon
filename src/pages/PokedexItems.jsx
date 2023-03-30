import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import 'PokedexItems.css'

const PokedexItems = () => {
    const trainer = useSelector(state => state.trainer)
    const [poke, setPoke] = useState({})
    const navigate = useNavigate()

    const { id } = useParams();
    console.log("PokedexItems id ", id)
    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(resp => setPoke(resp.data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <h1>PokedexItems</h1>
            <h2> {trainer} </h2>
            {poke.name}
            <img width={"150px"} src={poke.sprites?.other.dream_world.front_default} alt="" />
            <main class="container main-pokemon">
			<div class="header-main-pokemon">
				<span class="number-pokemon">#1</span>
				<div class="container-img-pokemon">
					<img
						src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
						alt="pokemon bulbasaur"
					/>
				</div>

				<div class="container-info-pokemon">
					<h1>Bulbasaur</h1>
					<div class="card-types">
						<span class="grass">Planta</span>
					</div>
					<div class="info-pokemon">
						<div class="group-info">
							<p>Altura</p>
							<span>0.7m</span>
						</div>
						<div class="group-info">
							<p>Peso</p>
							<span>6.9Kg</span>
						</div>
					</div>
				</div>
			</div>

			<div class="container-stats">
                <h1>Estadísticas</h1>
                <div class="stats">
                    <div class="stat-group">
                        <span>Hp</span>
                        <div class="progress-bar"></div>
                        <span class="counter-stat">45</span>
                    </div>
                    <div class="stat-group">
                        <span>Attack</span>
                        <div class="progress-bar"></div>
                        <span class="counter-stat">49</span>
                    </div>
                    <div class="stat-group">
                        <span>Defense</span>
                        <div class="progress-bar"></div>
                        <span class="counter-stat">49</span>
                    </div>
                    <div class="stat-group">
                        <span>Special Attack</span>
                        <div class="progress-bar"></div>
                        <span class="counter-stat">65</span>
                    </div>
                    <div class="stat-group">
                        <span>Special Defense</span>
                        <div class="progress-bar"></div>
                        <span class="counter-stat">65</span>
                    </div>
                    <div class="stat-group">
                        <span>Speed</span>
                        <div class="progress-bar"></div>
                        <span class="counter-stat">45</span>
                    </div>
                </div>
            </div>
		</main>            
        </div>
    );
};

export default PokedexItems;