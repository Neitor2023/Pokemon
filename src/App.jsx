import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom'
// import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
// import FooterComponent from './assets/components/FooterComponent';
import Nav from './assets/components/Nav';
import FooterComponent from './components/FooterComponent';

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