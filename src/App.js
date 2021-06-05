import React, { useState, useRef, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Confetti from "react-confetti";
import ReactAudioPlayer from 'react-audio-player';

import './App.scss';
import AppFooter from './Footer';

import titleCard from '../src/images/1.jpg';
import letter1 from '../src/images/2.jpg';
import letter2 from '../src/images/3.jpg';
import letter3 from '../src/images/4.jpg';
import letter4 from '../src/images/5.jpg';

import music from './lobby.mp3';


const App = ({ url }) => {
  
  // Hooks
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(1500);
    setWidth(2000);
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }
    return(
      <div className='App'>
        
        <ReactAudioPlayer
          src={music}
          autoPlay={true}
          volume={0.35}
          loop={true}
        />

        <div style={{paddingTop: '1500px', paddingBottom: '100px'}}>
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
              © 2021 • Happy Birthday, Jennifer!
              </p>
            </AppFooter>
      </div>
    )
}




export default App;