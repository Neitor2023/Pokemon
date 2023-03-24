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
                        path='/characters'
                        element={<Characters />} />
                    <Route
                        path='/rickmorty'
                        element={<RickMortyLists />} />
                    <Route
                        path='/rickMorty/:id'
                        element={<RickMortyDetail />} />
                </Routes>
                <FooterComponent />
            </div>
        </HashRouter>
    );
}
export default App;