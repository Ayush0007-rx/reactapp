import React from 'react';
import Header from './Header';
import './App.css';
import exampleImage from './image1.jpg';

function App() {
  return (
    <div className="App left-align with-padding">
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'right', paddingRight: '100px', paddingTop: '50px' }}>
        <div style={{ alignItems: 'left', paddingRight: '350px', paddingTop: '10px', paddingLeft: '250px' }}>
          <p className="large-text" style={{ marginTop: '100px'}}><b>Unlock Your Career!</b></p>
          <p className="small-text">Get the help you need to move forward in your career.</p>
        </div>
        <img src={exampleImage} alt="Example" style={imageStyle} />
      </div>
      <div>
      <h2 style={{ marginLeft: '250px' }}>Who's Using Unstop..?</h2>
      </div>
      <div className="boxes-container">
        <div className="box">
          <strong>Students and Professionals</strong>
          <p>hii</p>
        </div>
        <div className="box">
          <strong>Company and Recruters</strong>
        </div>
        <div className="box">
          <strong>Colleges</strong>
        </div>
      </div>
    </div>
  );
}

const imageStyle = {
  width: '36%',
  height: 'auto',
  marginTop: '20px' // Optional: Add some margin to separate the image from the header
};

export default App;