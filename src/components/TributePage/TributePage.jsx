import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import './TributePage.css';

function TributePage() {
  const tributeItems = useSelector((store) => store.TributeReducer);
  const dispatch = useDispatch();
  const history = useHistory(); 

  const handleDelete = (itemId) => {
    dispatch({ type: 'DELETE_ITEM', payload: itemId });
  };

  const handleEdit = () => {
    history.push('/EditPage'); 
  };

  const handleConfirm = () => {
    history.push('/QrCode'); 
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center text-center min-vh-10">
      <Form>
        {tributeItems.map((item) => (
          <div key={item.id}>
            <Row className="mb-2">
              <h1 className="firstName">{item.first_name} {item.middle_name} {item.last_name}</h1>
              <Col>
                <p> {item.date_of_birth} - {item.date_of_death}</p>
              </Col>
              
              <Row>
                <Col>
                  <p> {item.obituary}</p>
                </Col>
              </Row>
            </Row>
            <Row className="mt-2">
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={`${item.first_name} ${item.last_name}`} 
                    className="tributeImage" 
                  />
                )}
          
              <Col>
                <div className="item-media">
                  {item.video && (
                    <div className="video-container">
                      <iframe
                        title="Vimeo Video"
                        src={`https://player.vimeo.com/video/${item.video.split("/").pop()}`}
                        className="video"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </Col>
            </Row>

            <Row className="mt-2" >
              <Col>
                <Button variant="primary" onClick={handleEdit}>Back</Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                <Button variant="success" onClick={handleConfirm}>Confirm</Button>
              </Col>
            </Row>
          </div>
        ))}
      </Form>
    </Container>
  );
}

export default TributePage;
