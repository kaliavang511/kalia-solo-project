import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import './TributePage.css';

function TributePage() {
  const tributeItems = useSelector((store) => store.tribute);
  const dispatch = useDispatch();
  const history = useHistory(); 

  const [selectedItem, setSelectedItem] = useState(null);
  //created state for selecting item. 
  //null = nothing is automatically selected 

  const handleDelete = (itemId) => {
    dispatch({ type: 'DELETE_ITEM', payload: itemId });
    //need to pass itemId in order to know what is being selected to delete
  };

  const handleEdit = () => {
    history.push('/EditPage'); 
    //takes us to edit page
  };

  const handleConfirm = (item) => {
    setSelectedItem(item);
    history.push({
      pathname: '/tributePageCon',
      state: { item }
  //passing selected item as a part of state. So the next page can have access to it
    });
  };

  return (
<div>
      {tributeItems.map((item) => (
        <div key={item.id}>
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
          <Col>
            <p> {item.date_of_birth} - {item.date_of_death}</p>
          </Col>
          
          <Row>
            <Col>
              <p> {item.obituary}</p>
            </Col>
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
              //iframe allow to display content from Viemo 
              //need to split and pop in order to get the video ID for video url
            )}
          </Col>
        </Row>
      </div>
    </Container>

    <Row className="mt-2">
    <Col>
    <button className="backBtn" onClick={handleEdit}>Back</button>
    </Col>
    <Col> 
    <button className="deleteBtn" onClick={() => handleDelete(item.id)}>Delete</button>
    </Col>
    <Col>
    <button className="confirmBtn" onClick={() => handleConfirm(item)}>Confirm</button>
    </Col>
     </Row>
    
  
    </div>
      ))}
    </div> 
  );
}

export default TributePage;
