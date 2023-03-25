import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FooterComponent from './components/FooterComponent'
import TeamDetail from './pages/TeamDetail';
import Characters from './pages/Characters';
import RickMortyLists from './pages/RickMortyLists';
import RickMortyDetail from './pages/RickMortyDetail';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
    return (
        <HashRouter>
            <div className='App'>
                {/* <Nav /> */}
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />} />
                    <Route
                        path="/about"
                        element={<About />} />
                    <Route
                        path="/about/:name"
                        element={<TeamDetail />} />
                    <Route
                        path="/contact"
                        element={<Contact />} />
                    <Route
                        path='/Login'
                        element={<Login />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route
                            path='/characters'
                            element={<Characters />} />

                        <Route element={<MainLayout />}>
                            <Route
                                path='/rickMorty'
                                element={<RickMortyLists />}
                            >
                            </Route>
                            <Route
                                path='/rickMorty/:id'
                                element={<RickMortyDetail />}
                            >
                            </Route>
                        </Route>
                    </Route>
                </Routes>
                <FooterComponent />
            </div>
        </HashRouter>
    );
}
export default App;