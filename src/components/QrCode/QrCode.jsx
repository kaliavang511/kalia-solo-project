// import React from 'react';
// import QRCode from 'qrcode.react';
// import './QrCode.css';


// function QrCode() {
//   const tributePageUrl = `https://qr-code-for-gravestones-90b039d8fe07.herokuapp.com/#/tributePage`
//   return (
//     <>
//       <h1 className='qrTitle'>QR Code ready</h1>
//       <div className='qrCodeContainer'>
//         <QRCode value={tributePageUrl} size={256} />
//       </div>
//     </>
//   );
// }

// export default QrCode;

import React from 'react';
import QRCode from 'qrcode.react';
import { useLocation } from 'react-router-dom';
import './QrCode.css';

function QrCode() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tributePageUrl = `https://qr-code-for-gravestones-90b039d8fe07.herokuapp.com/#/tributePage?first_name=${searchParams.get('first_name')}&middle_name=${searchParams.get('middle_name')}&last_name=${searchParams.get('last_name')}&date_of_birth=${searchParams.get('date_of_birth')}&date_of_death=${searchParams.get('date_of_death')}&obituary=${searchParams.get('obituary')}&image=${searchParams.get('image')}&video=${searchParams.get('video')}`;

  return (
    <>
      <h1 className='qrTitle'>QR Code ready</h1>
      <div className='qrCodeContainer'>
        <QRCode value={tributePageUrl} size={256} />
      </div>
    </>
  );
}

export default QrCode;
