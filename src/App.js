import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './App.scss';
import Typer from './Typer';
import AppFooter from './Footer';

import titleCard from '../src/images/1.svg';
import letter1 from '../src/images/2.svg';
import letter2 from '../src/images/3.svg';
import letter3 from '../src/images/4.svg';
import letter4 from '../src/images/5.svg';
import letter5 from '../src/images/6.svg';
import letter6 from '../src/images/7.svg';

class App extends Component {
  render() {
    return(
      <div className='App'>

        {/* TITLE */}
        <Grid spacing={3} xs={12} justify="flex-end" style={{position: 'absolute'}}>
          <Grid item xs={12} sm={6}>
            <Grid item xs={12} style={pageIntro}>
              <h2 style={pageTitle}>
                <Typer dataText={["Happy Birthday, Nico!!"]}/>
              </h2>
              <h3 style={mainSubTitleStyle}>
                <Typer dataText={["You're the homie!!"]}/>
              </h3>
            </Grid>
          </Grid>
        </Grid>

        <div style={{paddingTop: '2000px', paddingBottom: '100px'}}>
        <Grid size={2}>
          <Grid size={3} spacing={2}>
            <Grid size={4} spacing={3}>
              <Grid>
                <img alt="title card" src={titleCard} class="stickyNote" className="container hoverable"/>
              </Grid>
                <img alt="Letter" src={letter1} class="stickyNote" className="container hoverable"/>
                <img alt="Letter" src={letter2} class="stickyNote" className="container hoverable" />
                <img alt="Letter" src={letter3} class="stickyNote" className="container hoverable"/>
                <img alt="Letter" src={letter4} class="stickyNote" className="container hoverable"/>
                <img alt="Letter" src={letter5} class="stickyNote" className="container hoverable"/>
                <img alt="Letter" src={letter6} class="stickyNote" className="container hoverable"/>
            </Grid>
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
}

const pageIntro={
  textAlign: 'left',
  paddingTop: '50px',
}

const mainSubTitleStyle = {
  fontFamily: 'Comfortaa',
  fontStyle: 'normal',
  fontSize: '18px',
  lineHeight: 'normal',
  padding: '10px',
  display: 'flex',
  margin: 'auto',
  alignItems: 'left',
  textAlign: 'left',
  color: '#353535',
  justifyContent: 'left',
  paddingBottom: '50px'
}


const pageTitle={
  fontFamily: 'Abril Fatface', cursive: true,
  fontStyle: 'normal',
  fontSize: '36px',
  lineHeight: 'normal',
  margin: 'auto',
  paddingTop: '500px',
  marginTop: '100px',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'left',
  textAlign: 'left',
  color: '#353535'
}

export default App;
