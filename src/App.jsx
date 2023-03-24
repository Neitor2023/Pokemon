import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom'
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Projects from './assets/pages/Projects';
import Technologies from './assets/pages/Technologies';
import FooterComponent from './assets/components/FooterComponent';
import Nav from './assets/components/Nav';

function App() {
    return (
        <HashRouter>
            <div className='App'>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />} />
                    <Route
                        path="/about"
                        element={<About />} />
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
                </Routes>
                <FooterComponent />
            </div>
        </HashRouter>
    );
}
export default App;