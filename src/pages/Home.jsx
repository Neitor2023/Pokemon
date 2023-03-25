import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  // const navigate = useNavigate();
  const [name, setName] = useState("")

  // const tologin = e => {
  //   if (value === "password") {
  //     navigate("/about/")
  //   } else {
  //     alert("Contraseña incorrecta")
  //   }
  //   e.preventDefault()
  // }

  return (
    <div>
      <h1>Home! Bienvenido a nuestra plataforma!</h1>

      <input type="text"
      value={name}
      onChange={ e => setName(e.target.value)}
      />

      {/* <button onChange={()=> dispatch(getTrainerName(name))}>Go</button> */}

      {/* <form onSubmit={e => tologin(e)}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type='Submit'></button>
      </form> */}

      {/* <Link to="/Contact">Contacto</Link><br />
      <Link to="/Characters">Characters</Link><br />
      <button onClick={() => navigate("/Pokedex")} >Ir a lstado de Pokedex</button>
      <button onClick={() => navigate("/about")} >Llevar a la seccion About</button> */}
    </div>
  )
}
export default Home