import React, { Component, useState, useRef, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Confetti from "react-confetti";
import useWindowDimensions from './useWindowDimensions.js';

import './App.scss';
import AppFooter from './Footer';

import titleCard from '../src/images/1.jpg';
import letter1 from '../src/images/2.jpg';
import letter2 from '../src/images/3.jpg';
import letter3 from '../src/images/4.jpg';
import letter4 from '../src/images/5.jpg';
import letter5 from '../src/images/6.jpg';
import letter6 from '../src/images/7.jpg';

function App() {

  // Hooks
  const { s_height, s_width } = useWindowDimensions();
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(1500);
    setWidth(s_width);
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }
    return(
      <div className='App'>
        

        <div style={{paddingTop: '2200px', paddingBottom: '100px'}}>
        <Grid size={2}>
          <Grid size={3} spacing={2}>

          <div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}

        className="confetti-wrap"
        ref={confettiRef}>
        
        <Grid size={4} spacing={3}>
                <div style={{paddingTop: '50px'}}></div>

                <img alt="title card" src={titleCard} class="stickyNote" className="container hoverable"/>
                <div style={{paddingBottom: '50px'}}></div>
                
                <img alt="Letter" src={letter1} class="stickyNote" className="container hoverable"/>
                <div style={{paddingBottom: '50px'}}></div>

                <img alt="Letter" src={letter2} class="stickyNote" className="container hoverable" />
                <div style={{paddingBottom: '50px'}}></div>

                <img alt="Letter" src={letter3} class="stickyNote" className="container hoverable"/>
                <div style={{paddingBottom: '50px'}}></div>

                <img alt="Letter" src={letter4} class="stickyNote" className="container hoverable"/>
                <div style={{paddingBottom: '50px'}}></div>

                <img alt="Letter" src={letter5} class="stickyNote" className="container hoverable"/>
                <div style={{paddingBottom: '50px'}}></div>

                <img alt="Letter" src={letter6} class="stickyNote" className="container hoverable"/>
                <div style={{paddingBottom: '50px'}}></div>

            </Grid>

        <Confetti
          recycle={show}
          numberOfPieces={400}
          width={width}
          height={height}
        />
      </div>

            


            </Grid>  
            </Grid>

        </div>
       
              
           
        <AppFooter>
              <p>
              © 2021 • Developed by Harry Zhu | Made with ReactJS
              </p>
            </AppFooter>
      </div>
    )
}




export default App;