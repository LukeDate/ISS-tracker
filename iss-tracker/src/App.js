import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';


import { getServerData } from './redux/actions/issActions';

function App() {

  const initState = {
    data: []
  }

  const dispatch = useDispatch();
  const data = useSelector((state = initState) => state);
  useEffect(() => {

    const timer = setInterval(() => {
      dispatch(getServerData())

    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App">
      {/* {console.log(data.data.iss_position)} */}
      <img src="/graphs/issplot.png" />
      <button onClick={() => dispatch(getServerData())}>CLICK FOR GRAPH</button>
      {/* <div>Longitude: {data.data.iss_position && data.data.iss_position.longitude}</div>
      <div>Latitude: {data.data.iss_position && data.data.iss_position.latitude}</div> */}
    </div>
  );
}

export default App;
