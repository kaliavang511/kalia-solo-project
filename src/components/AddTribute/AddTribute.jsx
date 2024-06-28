import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function AddTribute(){
    const dispatch = useDispatch()
    const history = useHistory()
    const[firstName, setFirstName]=useState('')
    const[middleName, setMiddleName]=useState('')
    const[lastName,setLastName]=useState('')
    const[obituary,setObituary]=useState('')
    const[image,setImage]=useState('')
    const[video, setVideo]=useState('')
    const[dateOfBirth, setDateofBirth]=useState('')
    const[dateOfDeath, setDateOfDeath]=useState('')
  
 
  
    const handleSubmit = (event)=>{
      event.preventDefault()
      
      dispatch({
        type: 'ADD_TRIBUTE',
        payload: {
          firstName,
          middleName,
          lastName,
          obituary,
          image_url: image,
          video_url: video,
          dateOfBirth,
          dateOfDeath
        }
      });
  
      setFirstName('');
      setMiddleName('');
      setLastName('');
      setObituary('');
      setImage('');
      setVideo('');
      setDateofBirth('');
      setDateOfDeath('');

      history.push('/editpage')
    };


    return(
        <>
     <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='First Name'
        value={firstName}
        onChange={(event)=> setFirstName(event.target.value)}
        />

        <input
        type='text'
        placeholder='Middle Name '
        value={middleName}
        onChange={(event)=> setMiddleName(event.target.value)}
        />
      
      <input
        type='text'
        placeholder='Last Name'
        value={lastName}
        onChange={(event)=> setLastName(event.target.value)}
        />
      <input
        type='text'
        placeholder='obituary'
        value={obituary}
        onChange={(event)=> setObituary(event.target.value)}
        />
      <input
        type='text'
        placeholder='image'
        value={image}
        onChange={(event)=> setImage(event.target.value)}
        />
      <input
        type='text'
        placeholder='video'
        value={video}
        onChange={(event)=> setVideo(event.target.value)}
        />
      <input
        type='text'
        placeholder='Date of Birth'
        value={dateOfBirth}
        onChange={(event)=> setDateofBirth(event.target.value)}
        />
         <input
        type='text'
        placeholder='Date of Death'
        value={dateOfDeath}
        onChange={(event)=> setDateOfDeath(event.target.value)}
        />

        <button type='submit'>Submit</button>


      </form>
        </>
    )
}

export default AddTribute