import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './TributePageConfirm.css';


function TributePageConfirm() {
  const location = useLocation();
  //allow TributePageConfirm to access (item) state from being passed from pervious route
  const { item } = location.state  
//Take the item property from location.state. 

  const history = useHistory()

  const handleQrCode = () => {
    history.push('/QrCode'); 
  };

  return (
    <>
    <Container fluid className=" align-items-center justify-content-center text-center">
      <div className="container"> 
        <Row className="mb-2">
          <h1 className="firstName">{item.first_name} {item.middle_name} {item.last_name}</h1>
        </Row>
        <Row className="mt-2">
          <Col md={6}>
            {item.image && (
              <img 
                src={item.image} 
                alt={`${item.first_name} ${item.last_name}`} 
                className="tributeImage" 
              />
            )}
          </Col>

          <Row>
            <p> {item.date_of_birth} - {item.date_of_death}</p>
          </Row>
          
            <Row>
              <p> {item.obituary}</p>
            </Row>
          <Col md={6}>
            {item.video && (
              <div className="video-container">
                <iframe
                  title="Vimeo Video"
                  src={`https://player.vimeo.com/video/${item.video.split("/").pop()}`}
                  className="video"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Container>
    <div>
        <button className='QrBTN' onClick={handleQrCode}> Ready for QR code</button>
    </div>
    </>
  );
}

export default TributePageConfirm;
