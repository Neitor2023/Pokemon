import { useNavigate, useParams } from 'react-router-dom';

const TeamDetail = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate(-1)}> Regresar </button>
            <h1>Soy el detalle de un colaborador</h1>
            <h2>El Nombre nuestro colaborador es {name} </h2>
        </div>
    );
};

export default TeamDetail;