import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const AdminDashboard = () => {

    if(!localStorage.getItem('adminToken')){
        return <h1 style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>Access Denied. Please Login.</h1>
    }

return (
        <Container className="my-5">
            <Card className="shadow p-4">
                <h1 className="mb-3">Admin Dashboard</h1>
                <p className="lead">Welcome back, Administrator. Manage your portfolio content below:</p>
                
                <div className="d-flex flex-wrap gap-3 mt-4">
                    <Button as={Link} to="/admin/add-project" variant="primary">
                        Add New Project
                    </Button>
                    <Button as={Link} to="/admin/messages" variant="success">
                        View Contact Messages
                    </Button>
                    <Button 
                        onClick={() => { 
                            localStorage.removeItem('adminToken');
                            window.location.href = '/admin/login';
                        }}
                        variant="danger"
                    >
                        Logout
                    </Button>
                </div>
            </Card>
        </Container>
    );
};

export default AdminDashboard;