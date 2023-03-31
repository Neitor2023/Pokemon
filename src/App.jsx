import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './components/MainLayout';
import ProtectedRoutes from './components/ProtectedRoutes';
import Pokedex from './pages/Pokedex';
import PokedexItems from './pages/PokedexItems';
import PokemonCard from './pages/PokemonCard';
import UserName from './components/userName';

function App() {
    return (
        <HashRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />} />
                    <Route
                        path="/username"
                        element={<UserName />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route element={<MainLayout />}>
                            <Route
                                path='/pokedex'
                                element={<Pokedex />}
                            >
                            </Route>
                            <Route
                                path='/pokedexitems/:id'
                                element={<PokedexItems/>}
                            >
                            </Route>
                            <Route
                                path='/pokemoncard/:url'
                                element={<PokemonCard />}
                            >
                            </Route>
                        </Route>
                    </Route>
                </Routes>
        </HashRouter>
    );
}
export default App;