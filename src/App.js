import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './App.scss';
import Typer from './Typer';
import AppFooter from './Footer';

import titleCard from '../src/images/1.jpg';
import letter1 from '../src/images/2.jpg';
import letter2 from '../src/images/3.jpg';
import letter3 from '../src/images/4.jpg';
import letter4 from '../src/images/5.jpg';
import letter5 from '../src/images/6.jpg';
import letter6 from '../src/images/7.jpg';

class App extends Component {
  render() {
    return(
      <div className='App'>

        <div style={{paddingTop: '2200px', paddingBottom: '100px'}}>
        <Grid size={2}>
          <Grid size={3} spacing={2}>
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
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'left',
  textAlign: 'left',
  color: '#353535'
}

export default App;
