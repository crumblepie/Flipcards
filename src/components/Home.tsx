import * as React from "react";
import {useNavigate} from 'react-router-dom';


const Home = () => (
    <>
      <div></div>
      <h1>Plant flash cards</h1>
      <button onClick={() => navigate('/play')}>Start Now</button>
      <div></div>
    </>
);