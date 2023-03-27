import React from 'react';
import './PokemonCardHoloEffect.css'

const PokemonCardHoloEffect = () => {
    return (
        <div>
            <main id="app">

                <p>Please checkout the newer version of this; <a href="https://codepen.io/simeydotme/pen/abYWJdX" target="_blank">https://codepen.io/simeydotme/pen/abYWJdX</a></p>

                <h1>Pokemon Card, Holo Effect</h1>

                <section className="cards">
                    <div className="card charizard animated"></div>
                    <div className="card pika animated"></div>
                    <div className="card eevee animated"></div>
                    <div className="card mewtwo animated"></div>
                </section>

                <style className="hover"></style>

                <section className="demo">
                    <div className="card">
                        
                    </div>

                    <span className="operator">+</span>

                    <div className="card"><span>color-dodge</span></div>
                    
                    <span className="operator">+</span>
                    
                    <div className="card"><span>color-dodge</span></div>

                </section>

                <p className="bottom">Please checkout the newer version of this; <a href="https://codepen.io/simeydotme/pen/abYWJdX" target="_blank">https://codepen.io/simeydotme/pen/abYWJdX</a></p>

            </main>
        </div>
    );
};

export default PokemonCardHoloEffect;