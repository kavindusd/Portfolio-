import React,{ useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try{

            //call server endpoint
            const response = await axios.post('/api/users/login', {email, password});

            //extract token from endpoint
            const {token} = response.data;

            localStorage.setItem('adminToken', token);

            navigate('/admin/dashboard');
        }

        catch(error){
            setError('Invalid credentials or server error');
            console.error(error);
        }

        finally{
            setLoading(false);
        }
    };
    
    return (
        <Container className="my-5">
            <Card className="shadow mx-auto" style={{ maxWidth: '400px' }}>
                <Card.Header className="text-center bg-dark text-white">
                    <Card.Title className="mb-0 h4">Admin Login</Card.Title>
                </Card.Header>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-4" controlId="formPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        
                        <Button variant="success" type="submit" disabled={loading} className="w-100">
                            {loading ? 'Logging In...' : 'Login'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AdminLogin;