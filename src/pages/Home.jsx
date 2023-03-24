import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Hola soy Home</h1>
      <Link to="/Characters">Ir a Characters</Link>
    </div>
  )
}
export default Home