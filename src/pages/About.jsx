import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate(-1)}> Regresar </button>
      <h1>Sobre Nosotros</h1>
      <h2>Nuestro Equipo</h2>
      <ul>
        <Link to="/about/Alessandra">
          Alessandra
        </Link>
      </ul>
      <ul>
        <Link to="/about/Vinicio">
          Vinicio
        </Link>
      </ul>
      <ul>
        <Link to="/about/Adan">
          Adan
        </Link>
      </ul>
      <ul>
        <Link to="/about/Elizabeth">
          Elizabeth
        </Link>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, iure facilis temporibus distinctio, sed illo officia dolores veniam vero repellendus, earum praesentium? Beatae molestiae tempore odit repellendus explicabo amet temporibus.</p>
    </div>
  )
}

export default About
