import React from 'react';

// Third Party Libraries
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

// Static Assets
import './App.scss';
import favicon from '../src/images/favicon.png';
import music from './yuqi.mp3';

/**
 * This app is the main component of the application.
 * It is responsible for rendering the entire application.
 * @returns {JSX.Element} the DOM element to be rendered
 */
const App = () => {

    const playerOptions = {
        audioLists: [
            {
                name: 'Bonnie and Clyde',
                singer: 'YUQI',
                cover: favicon,
                musicSrc: music
            }
        ],
        preload: true,
        autoPlay: true,
        autoPlayInitLoadPlayList: true,
        defaultPlayIndex: 0,
        showDownload: false,
        showPlay: true,
        showReload: true,
        responsive: true,
        drag: true,
        toggle: true,
    };

    return (
        <div className='App'>
            <h1 id="welcome" style={welcomeText}>Wait and see!</h1>
            <ReactJkMusicPlayer {...playerOptions} />
        </div>
    )
}

const welcomeText = {
    fontFamily: "ThirstySoftW01-Extrabold",
    fontSize: "70px",
    marginBottom: "50px",
}

export default App;