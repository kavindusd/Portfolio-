import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import { Download } from 'react-bootstrap-icons';

const DownloadCV = ({cvFilePath}) => {

    return(
        <Container className='py-5 my-5 shadow rounded-4'>
            <Row className='align-item-right justify-content-center text-center text-md-3'>
                <Col md={8}>
                    <p className=" mb-0 fs-6 d-flex justify-content-center">
                        Download my complete curriculum vitae to see detailed experience and achievements.
                    </p>
                </Col>

                <Col md={4} className="mt-3 mt-md-0 d-flex justify-content-center justify-content-md-3">
                    <Button
                        variant='outline-success'
                        size='m'
                        href='../../public/samplecv.pdf'
                        download
                        className='shadow-sm'>
                            <Download className='me-2'/> Download CV
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DownloadCV;