import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTrainerName } from '../store/slices/trainer.slice';
import UserName from '../components/userName';
// import Counter from '../components/Counter';
// import { useSelector } from 'react-redux';
// const userName = useSelector(state => state.counter)
const Home = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const irPokedex = () => {
    dispatch(getTrainerName(name));
    navigate("/pokedex")
  }

  return (
    <div>
      <h1>Home! Bienvenido a nuestra plataforma!</h1>
      <UserName />
      {/* <Counter /> */}
      <input type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button onClick={() => irPokedex()}>Go</button>
    </div>
  )
}
export default Home