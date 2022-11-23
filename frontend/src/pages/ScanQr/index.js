import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import Heading from "../../components/Heading";
import Primary from "../../components/Buttons/Primary";

const ScanQr = () => {
  const vidRef = useRef();
  const qrScanner = useRef(null);
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [scan, setScan] = useState(true);

  useEffect(() => {
    qrScanner.current = new QrScanner(vidRef.current, (result) => {
      setResult(result);
    });

    return () => {
      qrScanner.current.destroy();
      qrScanner.current = null;
    };
  }, []);

  useEffect(() => {
    if (scan) {
      qrScanner.current.start();
    } else {
      qrScanner.current.stop();
    }
  }, [scan]);

  useEffect(() => {
    if (result) {
      setScan(false);
      navigate(`/productinfo/${result}`);
    }
  }, [result, navigate]);

  return (
    <div className={`${style["scan-qr-page"]} page`}>
      <Heading>Scan QR</Heading>
      <video ref={vidRef}></video>
      <Primary
        onClick={() => {
          navigate("/verifyproduct");
        }}
      >
        Use Existing Image
      </Primary>
      <Primary
        onClick={() => {
          navigate("/verifyproduct");
        }}
      >
        Verify with Ref Id
      </Primary>
    </div>
  );
};

export default ScanQr;
