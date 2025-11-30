// client/src/pages/ProjectsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectItem from '../components/projectItem';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
    //hold the fetched data
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Fetches data once the component loads
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Axios uses the proxy configured in vite.config.js
                // It calls http://localhost:3001/api/projects
                const response = await axios.get('/api/projects'); 
                setProjects(response.data); 
                setLoading(false); 
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError('Failed to load projects. Check backend/network access.');
                setLoading(false);
            }
        };
        fetchProjects();
    }, []); // Runs only on initial component mount

    // 3. Conditional Rendering (for user feedback)
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <p className="text-center  my-5 fw-bold">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <p className="text-center text-danger my-5 fw-bolder">Error: {error}</p>
            </div>
        );
    }

    // 4. Render the list of projects
    return (
    <Container className="my-5">
        <h1 className="text-center mb-5 " style={{ fontSize: '3.5rem', color: '#007BFF' }}>
            PROJECTS
        </h1>
        
        <Row className="g-4">
            {projects.length > 0 ? (
                projects.map(project => ( 
                    <Col key={project._id} xs={12} md={6} className="mb-4">
                        <ProjectItem project={project} />
                    </Col>
                ))
            ) : (
                <Col xs={12}> 
                    <p className="text-center">No projects found.</p>
                </Col>
            )}
        </Row>
    </Container>
    );
};
export default Projects;