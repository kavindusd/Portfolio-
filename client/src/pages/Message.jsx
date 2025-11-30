import React, {useState,  useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Table, Alert } from 'react-bootstrap';

const Message = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem('adminToken');
    if(!token){
        navigate('/admin/login');
    }

    const [messages ,setMessages] = useState([]);
    const [loading, setLoading] = useState(true);   
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMessages = async () =>{
            try{
                const config ={
                    headers:{
                        'Authorization': `Bearer ${token}`,
                    },
                };
                 const response = await axios.get('/api/messages/messages', config);
                 setMessages(response.data);
                 setLoading(false);
            }

            catch(error){
                if(error.response && error.response.status === 401){
                    localStorage.removeItem('adminToken');
                    navigate('/admin/login');
                }
                console.error('Message fetching error:',  error.response ? error.response.data : error);
                setError('Failed to fetch messages');
                setLoading(false);
            }
        };
       fetchMessages();     
    },[token, navigate]);


    //display loading... or error
    if (loading) {
        return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Loading Messages...</h1>;
    }

    if (error) {
        return <h1 style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>Error: {error}</h1>;
    }

    return (
        <Container className="my-5">
            <h1 className="mb-4">Contact Messages ({messages.length})</h1>
            
            {messages.length > 0 ? (
                // Table with Bootstrap classes for styling
                <Table striped bordered hover responsive> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message Preview</th>
                            <th>Date Received</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map(msg => (
                            <tr key={msg._id}>
                                <td>{msg.name}</td>
                                <td>{msg.email}</td>
                                <td>{msg.message.substring(0, 70)}...</td>
                                <td>{new Date(msg.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <Alert variant="info">No messages received yet.</Alert>
            )}

            <Link to="/admin/dashboard" className="btn btn-secondary mt-3">
                Back to Dashboard
            </Link>
        </Container>
    );
};

export default Message;