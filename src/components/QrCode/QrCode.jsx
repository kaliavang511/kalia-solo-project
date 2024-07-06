import React from 'react';
import './QrCode.css';

function QrCode() {
  return (
    <>
      <h1 className='qrTitle'>QR Code ready</h1>
      <img className='qrCode' src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="QR Code" />  
      <button className='QrBtn'> Share </button>


       </>
  );
}

export default QrCode;
