import React from 'react';
import Header from './Header';
import './App.css';
import exampleImage from './image1.jpg';
import exampleimage from './image3.jpg';
import exampleimage4 from './image4.jpg';
import exampleimage5 from './image5.jpg';
import exampleimage6 from './image6.jpg'; 
import exampleimage7 from './image7.jpg';
import exampleimage8 from './image8.jpg';
import exampleimage9 from './image9.jpg';
import exampleimage10 from './image10.jpg';
import exampleimage11 from './image11.jpg';
import exampleimage12 from './image12.jpg';
import exampleimage13 from './image13.jpg';


function App() {
  return (
    <div className="App left-align with-padding">
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'right', paddingRight: '100px', paddingTop: '50px' }}>
        <div style={{ alignItems: 'left', paddingRight: '350px', paddingTop: '10px', paddingLeft: '250px' }}>
          <p className="large-text" style={{ marginTop: '100px'}}><b>Unlock Your Career!</b></p>
          <p className="small-text">Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.</p>
        </div>
        <img src={exampleImage} alt="Example" style={imageStyle} />
      </div>
      <div>
      <h2 style={{ marginLeft: '250px' }}>Who's Using Unstop..?</h2>
      </div>
      <div className="boxes-container">
        <div style={{ paddingLeft: '200px' , paddingRight: '35px' }}>
       <div className="row" style={{ border: '1px solid black' , display: 'flex', flexDirection: 'row', alignItems: 'centre', paddingLeft: '10px', paddingRight: '10px'}}>
          <div className="box" style={{ paddingRight: '10px' }}>
            <strong>Students and Professionals</strong>
            <p>Unlock Your Potential: Compete,Build Resume,Grow and get Hired!</p>
          </div>
          <div>
          <img src={exampleimage} alt="Example" style={imageStyle1} />
          </div>
          </div>
        </div>
        <div style={{ paddingLeft: '35px' , paddingRight: '35px' }}>
        <div className="row" style={{ border: '1px solid black' , display: 'flex', flexDirection: 'row', alignItems: 'centre', paddingLeft: '10px', paddingRight: '10px'}}>
        <div className="box">
          <strong>Company and Recruters</strong>
          <p>Discover RIght Talent: Hire,Engage and Brand Like Never Before!</p>
        </div>
        <img src={exampleimage4} alt="Example" style={imageStyle2} />
        </div>
        </div>
        <div style={{ paddingLeft: '35px' , paddingRight: '200px' }}>
        <div className="row" style={{ border: '1px solid black' , display: 'flex', flexDirection: 'row', alignItems: 'centre', paddingLeft: '10px', paddingRight: '10px' }}>
        <div className="box">
          <strong>Colleges</strong>
          <p>Bridge Academia and Industry: Empower STudents with Real-World Opportunities!</p>
        </div>
        <div className="image-container">
        <img src={exampleimage5} alt="Example" style={imageStyle3} />
          </div>
         </div>
        </div>
      </div>

      <div style={{ padding: '50px' }}></div>



      <div style={{ backgroundColor: '#f0f0f0' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'right', paddingRight: '90px', paddingTop: '10px' }}>
        
        <div>
          <div>
          <p style={{ marginLeft: '50px' }}>Industries veterans</p>
          </div>
          <div>
          <p style={{ marginLeft: '50px'}}><strong>Trust us</strong></p>
          </div>
        
      
      </div>
      <div style={{display: 'flex', listStyleType: 'none', paddingRight: '20px', alignItems: 'center', gap: '40px', paddingLeft: '80px' }}>
         <img src={exampleimage6} alt="Example" style={imageStyle4} />
         <img src={exampleimage7} alt="Example" style={imageStyle4} /> 
         <img src={exampleimage8} alt="Example" style={imageStyle4} />
         <img src={exampleimage9} alt="Example" style={imageStyle4} />
         <img src={exampleimage10} alt="Example" style={imageStyle4} />
         <img src={exampleimage11} alt="Example" style={imageStyle4} />
         <img src={exampleimage12} alt="Example" style={imageStyle4} />
         <img src={exampleimage13} alt="Example" style={imageStyle4} />
       </div>
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

const imageStyle4 = {
  width: '150px',
  height: '90px',
  paddingLeft: '100' // Optional: Add some margin to separate the image from the header
};


export default App;