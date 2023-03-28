import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counter.slice'; //Lo importamos
import trainer from './slices/trainer.slice';
import userName from './slices/userName.slice';

export default configureStore({
    reducer: {
        counter, // Lo añadimos
        trainer,
        userName
    }
})