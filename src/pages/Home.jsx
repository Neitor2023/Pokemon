import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTrainerName } from '../store/slices/trainer.slice';
import UserName from '../components/userName';
import '../pages/Home.css'

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
      <h1>Hello trainer!</h1>
      <h3>Give me your name to start</h3>
      <div className="container">
        <div className="red">
        <input className='input_b' type="text"
        value={name}
        placeholder='Enter your name'
        onChange={e => setName(e.target.value)}
        />
        </div>
        <div className="half"></div>
        <div className="half_2"></div>
        <div className="white">
        <button className='Btn_b' onClick={() => irPokedex()}>Go</button>
        </div>
      </div>
      
    </div>
  )
}
export default Home