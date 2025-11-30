const Project = require('../models/projectModel');

const getProjects = async(req, res) => {
    try{
        //find all docs in projecyt collecion
        const projects = await Project.find({});

        //Send the data back as JSON res
        res.status(200).json(projects);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const createProject = async(req, res) => {
    
    const {title, description, technologies,liveUrl, githubUrl} = req.body;

    if(!title || !description || !githubUrl){
        return res.status(400).json({message: 'title, description, githubUrl fields are required'});
    }

    try{
        //creating new project
        const newProject = await Project.create({title, description, technologies: technologies || [], liveUrl, githubUrl});
        res.status(201).json(newProject);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {getProjects, createProject};