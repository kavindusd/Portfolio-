
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import InfoCard from '../components/infoCard';
import DownloadCV from '../components/DownloadCV';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  const cvPath = '../../public/samplecv.pdf';
  return (
    <div>
          <Container>
            <Row>
              <Col>
                <InfoCard />
              </Col>
            </Row>
          </Container>
          <DownloadCV cvFilePath={cvPath}/>
        </div>
  );
};

export default Home;

