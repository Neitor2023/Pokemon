import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <div>
            <h1>Hola soy el FooterComponent</h1>
            <Link to="/nav">Nav</Link>  
        </div>
    );
};

export default FooterComponent;