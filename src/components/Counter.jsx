import { useDispatch } from 'react-redux';
import { increment, decrement } from './store/slices/counter.slice';


const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const decrementCounter = () => {
        dispatch(decrement())
    }
    const incrementCounter = () => {
        dispatch(increment())
    }

    return (
        <div>
            {counter}
        <button onClick={incrementCounter}>Incrementar</button>
        <button onClick={decrementCounter}>Incrementar</button>
            </div>

    )
}
export default Counter;