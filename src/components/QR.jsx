import { QRCodeSVG } from "qrcode.react";
export default function QR() {
  return (
    <>
      <QRCodeSVG  value="https://github.com/Dawka86" size={100}/>
    </>
  );
}
