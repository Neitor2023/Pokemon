import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("")

  const redirect = () => {
    navigate("/about")
  }

  const login = e => {
    if (value === "password") {
      navigate("/about/")
    } else {
      alert("Contraseña incorrecta")
    }
    e.preventDefault()
  }

  return (
    <div>
      <h1>Home! Bienvenido a nuestra plataforma!</h1>
      <Link to="/Contact">Contacto</Link><br />

      <button onClick={ redirect } >Llevar a la seccion About</button>

      <form onSubmit={e => login(e)}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type='Submit'></button>
      </form>
    </div>
  )
}
export default Home