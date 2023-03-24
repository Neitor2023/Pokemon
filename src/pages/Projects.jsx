import React from 'react';
import { useParams } from 'react-router-dom';

const Projects = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>projects</h1>
            <h2>El codigo del producto es: {id} </h2>
        </div>
    );
};

export default Projects;