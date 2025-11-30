import React, {use, useState} from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
   
  //define the states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  //capturing user inputs
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };


  //connection with Backend
  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus('');

    try{

      const response = await axios.post('/api/messages', formData);
      setStatus('success');
      setFormData({name: '', email: '', message: ''});
      console.log('Message sent successfully: ', response.data);
    }

    catch(error){
      setStatus('error');
      console.error('submission Error: ',error);
    }

    finally{
      setLoading(false);
    }
  };

  const renderStatusMessage = () => {
    if (status === 'success') {
      return <p className="success-message">Message sent successfully!</p>;
    } else if (status === 'error') {
      return <p className="error-message">Failed to send message. Please try again later.</p>;
    }
    return null;
  };

  return (
        <Container className="my-5">
            <div className="p-4 rounded-4 shadow bg-white mx-auto" style={{ maxWidth: '800px' }}>
                <h1 className="text-center mb-4" style={{ fontSize: '3.5rem', color: '#007BFF' }}>Contact Me</h1>
                <p className="text-center mb-4">Please use the form below to send me a message.</p>

                {renderStatusMessage()}
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 fw-bold" controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 fw-bold" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 fw-bold" controlId="formMessage">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={loading} className="w-100">
                        {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                </Form>
            </div>
        </Container>
    );
};


export default Contact;
