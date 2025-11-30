import React, {useState} from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProject = () =>{

    const navigate = useNavigate();

    //quick check whether user is admin
    const token = localStorage.getItem('adminToken');
    if(!token){
        navigate('/admin/login')
    }

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technologies: '',
        liveUrl: '',
        githubUrl: '',
    });

    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false); 

    //input handling
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        setStatus('');
        
        try{
            //make , seperated technologies in an array
            const technologiesArray = formData.technologies.split(',').map(tech => tech.trim()); //make , seperated technologies in an array

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            const payload = {...formData, technologies: technologiesArray};

            const response = await axios.post('/api/projects',payload,config);
            setStatus('success');

            setFormData({title: '', description: '', technologies: '', liveUrl: '', githubUrl: ''});
            console.log('Project added:', response.data);
        }
        catch(error){
            console.error('Project Submission Error:', error.response ? error.response.data : error);
            setStatus('error');
        }
         finally{
            setLoading(false);
        }
    };

    return(
        <section
        style={{
            padding: '40px',
            maxWidth: '700px',
            margin: '50px auto'
        }}>

            <h1>Add New Project</h1>
            {status === 'success' && <p style={{ color: 'green' }}>Project added successfully!</p>}
            {status === 'error' && <p style={{ color: 'red' }}>Error adding project.</p>}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />

                <label>Description:</label>
                <textarea name="description" rows="5" value={formData.description} onChange={handleChange} required />

                <label>Technologies (Comma-separated: e.g., React, Node, MongoDB):</label>
                <input type="text" name="technologies" value={formData.technologies} onChange={handleChange} required />

                <label>GitHub URL:</label>
                <input type="url" name="githubUrl" value={formData.githubUrl} onChange={handleChange} required />

                <label>Live URL (Optional):</label>
                <input type="url" name="liveUrl" value={formData.liveUrl} onChange={handleChange} />

                <button type="submit" disabled={loading} style={{ padding: '10px', backgroundColor: loading ? '#ccc' : '#007bff', color: 'white' }}>
                    {loading ? 'Adding Project...' : 'Add Project'}
                </button>
            </form>
            <div style={{ marginTop: '20px' }}>
                <a href="/admin/dashboard">Back to Dashboard</a>
            </div>
        </section>
    );
};

export default AddProject;