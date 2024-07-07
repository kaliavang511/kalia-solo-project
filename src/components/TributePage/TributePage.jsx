import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Container } from 'react-bootstrap';
import './TributePage.css';

function TributePage() {
  const tributeItems = useSelector((store) => store.tribute);
  const dispatch = useDispatch();
  const history = useHistory(); 

  const [selectedItem, setSelectedItem] = useState(null);
  //created state for selecting item. //null = nothing is automatically selected 

  const handleDelete = (itemId) => {
    dispatch({ type: 'DELETE_ITEM', payload: itemId });
  };

  const handleEdit = () => {
    history.push('/EditPage'); 
  };

  const handleConfirm = (item) => {
    setSelectedItem(item);
    history.push({
      pathname: '/tributePageCon',
      state: { item }

  //handleConfirm will get the item we selected and push it to tributePageCon
  //The state there will be the current item selected
    });
  };

  return (
    <div> 
    {/* <Container fluid className="d-flex align-items-center justify-content-center text-center">
      <Form>
        <h1>All Tribute Pages </h1>
        <div className="container"> 
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
                <Col md={6}>
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={`${item.first_name} ${item.last_name}`} 
                      className="tributeImage" 
                    />
                  )}
                </Col>
                <Col md={6}>
                  {item.video && (
                    <div className="video-container">
                      <iframe
                        title="Vimeo Video"
                        src={`https://player.vimeo.com/video/${item.video.split("/").pop()}`}
                        //extract the video ID from a full Vimeo video URL
                        
                        className="video"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </Col>
              </Row>

              <Row className="mt-2">
                <Col className="d-flex justify-content-between">
                  <button className="backBtn" onClick={handleEdit}>Back</button>
                  <button className="deleteBtn" onClick={() => handleDelete(item.id)}>Delete</button>
                  <button className="confirmBtn" onClick={() => handleConfirm(item)}>Confirm</button>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Form>
    </Container> */}


<>

<div>
      {tributeItems.map((item) => (
        <div key={item.id} className="item-container">
<Container fluid className="d-flex align-items-center justify-content-center text-center">
      <div className="container"> 
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
          <Col md={6}>
            {item.image && (
              <img 
                src={item.image} 
                alt={`${item.first_name} ${item.last_name}`} 
                className="tributeImage" 
              />
            )}
          </Col>
          <Col md={6}>
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
          </Col>
        </Row>
      </div>
    </Container>
    <Row className="mt-2">
    <Col className="d-flex justify-content-between">
    <button className="backBtn" onClick={handleEdit}>Back</button>
    <button className="deleteBtn" onClick={() => handleDelete(item.id)}>Delete</button>
    <button className="confirmBtn" onClick={() => handleConfirm(item)}>Confirm</button>
    </Col>
     </Row>
    
  
    </div>
      ))}
    </div> 
    </>
    
  
    </div>
  );
}

export default TributePage;
