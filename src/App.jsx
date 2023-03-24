import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import FooterComponent from './components/FooterComponent'
import TeamDetail from './pages/TeamDetail';
import Characters from './pages/Characters';
import ListsRickandMorty from './pages/ListsRickandMorty';

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
                        path="/projects"
                        element={<Projects />} />
                    <Route
                        path="/projects/:id"
                        element={<Projects />} />
                    <Route
                        path="/technologies"
                        element={<Technologies />} />
                    <Route
                        path='/characters'
                        element={<Characters />} />
                    <Route
                        path='/listsRickandMorty'
                        element={<ListsRickandMorty />} />
                </Routes>
                <FooterComponent />
            </div>
        </HashRouter>
    );
}
export default App;