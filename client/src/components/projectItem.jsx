
import React, {useState} from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import { ChevronDown, ChevronUp, Github } from 'react-bootstrap-icons';

const ProjectItem = ({ project }) => {

    const [ open, setOpen ] = useState(false);

    const getShortDescription = (text, maxLength) =>{
        if(!text || text.length <= maxLength){
            return text;
        }

        const shortText = text.substring(0, maxLength);
        const lastSpace = shortText.lastIndexOf(' ');

        return lastSpace > 0 ? shortText.substring(0, lastSpace)+ '...': shortText + '...';
    }

    const shortDescription = getShortDescription(project.description, 100);

    return (
        <Card className="shadow-sm h-100 rounded-4"
        style={{transition: 'all 0.3s ease-in-out', 
        ':hover': { transform: 'translateY(-5px)', 
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'}}}>
            <Card.Body>
                <Card.Title className="fw-bold proj-title">{project.title}</Card.Title>
                <Card.Text className='proj-text'>{open ? project.description: shortDescription}</Card.Text>
                
                <Collapse in={open}>
                    <div id={`collapse-details-${project._id}`}>
                        <hr />
                        <p className="techstack">
                            <strong>Tech Stack:</strong> {project.technologies && project.technologies.join(', ')}
                        </p>
                        
                        <div className="d-flex justify-content-between mt-3">
                            <Button 
                                variant="dark" 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-100 me-2"
                            >
                                <Github size={16} className="me-1"/>
                                GitHub
                            </Button>
                            {project.liveUrl && (
                                <Button 
                                    variant="outline-primary"
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-100"
                                >
                                    Live Demo
                                </Button>
                            )}
                        </div>
                    </div>
                </Collapse>

                <div className="d-flex justify-content-center pt-3">
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls={`collapse-details-${project._id}`}
                        aria-expanded={open}
                        variant="link" 
                        className="text-decoration-none"
                    >
                        {open ? (
                            <>Show Less <ChevronUp size={16} /></>
                        ) : (
                            <>Show More <ChevronDown size={16} /></>
                        )}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProjectItem;