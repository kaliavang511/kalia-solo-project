import React from 'react';
import QRCode from 'qrcode.react';
import './QrCode.css';

function QrCode() {
  const tributePageUrl = "https://qr-code-for-gravestones-90b039d8fe07.herokuapp.com/#/user";
  //hardcoded url link of app
  return (
    <>
      <h1 className='qrTitle'>QR Code Ready</h1>
      <div className='qrCodeContainer'>
        <QRCode value={tributePageUrl} size={256} />
      </div>
    </>
    //turning url into a QR code
  );
}

export default QrCode;
