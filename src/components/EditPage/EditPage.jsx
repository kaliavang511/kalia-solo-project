import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './EditPage.css';
import { Row,Col,Container } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditPage() {
  const tributeItems = useSelector((store) => store.tribute);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_TRIBUTE' });
  }, [dispatch]);

  const history =useHistory()

  const handleSubmitToTributePage = () => {
    history.push('/tributePage'); 
  };

  return (
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
    <div className='editLink'>
    <Link to={`/edittribute/${item.id}`}> Click here to Edit</Link>
    </div>
    <div>
    <button className="editBtn" onClick={handleSubmitToTributePage}> Submit </button>
    </div>
  
    </div>
      ))}
    </div> 
    </>
    
  );
}

export default EditPage;
