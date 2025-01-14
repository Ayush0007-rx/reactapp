import React from 'react';
import Header from './Header';
import './App.css';
import exampleImage from './image1.jpg';
import exampleimage from './image3.jpg';
import exampleimage4 from './image4.jpg';
import exampleimage5 from './image5.jpg';


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
       <div className="row" style={{ border: '1px solid black' , display: 'flex', flexDirection: 'row', alignItems: 'centre', paddingLeft: '10px', paddingRight: '10px' }}>
          <div className="box" style={{ paddingRight: '10px' }}>
            <strong>Students and Professionals</strong>
            <p>Unlock Your Potential: Compete,Build Resume,Grow and get Hired!</p>
          </div>
          <div>
          <img src={exampleimage} alt="Example" style={imageStyle1} />
          </div>
        </div>
        <div className="row" style={{ border: '1px solid black' , display: 'flex', flexDirection: 'row', alignItems: 'centre', paddingLeft: '10px', paddingRight: '10px' }}>
        <div className="box">
          <strong>Company and Recruters</strong>
          <p>Discover RIght Talent: Hire,Engage and Brand Like Never Before!</p>
        </div>
        <img src={exampleimage4} alt="Example" style={imageStyle2} />
        </div>
        <div className="row" style={{ border: '1px solid black' , display: 'flex', flexDirection: 'row', alignItems: 'centre', paddingLeft: '10px', paddingRight: '10px' }}>
        <div className="box">
          <strong>Colleges</strong>
          <p>Bridge Academia and Industry: Empower STudents with Real-World Opportunities!</p>
        </div>
        <img src={exampleimage5} alt="Example" style={imageStyle3} />
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

const imageStyle1 = {
  width: '70px',
  height: '60px' // Optional: Add some margin to separate the image from the header
};

const imageStyle2 = {
  width: '70px',
  height: '60px' // Optional: Add some margin to separate the image from the header
};

const imageStyle3 = {
  width: '70px',
  height: '60px' // Optional: Add some margin to separate the image from the header
};


export default App;