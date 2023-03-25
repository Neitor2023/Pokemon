import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counter.slice'; //Lo importamos

export default configureStore({
    reducer: {
        counter // Lo añadimos
    }
})