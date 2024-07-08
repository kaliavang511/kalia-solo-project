import React from 'react';
import QRCode from 'qrcode.react';
import './QrCode.css';


function QrCode() {
  const tributePageUrl = `https://qr-code-for-gravestones-90b039d8fe07.herokuapp.com/#/tributePage`
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

