import React from 'react';

// Material UI
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Grid,
} from '@mui/material';

// Third Party Libraries
import ReactWordcloud from 'react-wordcloud';
import Gallery from 'react-photo-gallery';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

// Static Assets
import './App.scss';
import { Form } from './content.json';
import photo0 from '../src/images/1.jpg';
import photo1 from '../src/images/2.jpg';
import photo2 from '../src/images/3.jpg';
import photo3 from '../src/images/4.jpg';
import photo4 from '../src/images/5.jpg';
import photo5 from '../src/images/6.jpg';
import photo6 from '../src/images/7.jpg';
import photo7 from '../src/images/8.png';
import photo8 from '../src/images/9.jpg';
import photo9 from '../src/images/10.jpg';
import photo10 from '../src/images/11.jpg';
import photo11 from '../src/images/12.jpg';
import photo12 from '../src/images/13.jpg';
import photo13 from '../src/images/14.jpg';
import photo14 from '../src/images/15.jpg';
import photo15 from '../src/images/16.jpg';
import photo16 from '../src/images/17.jpg';
import photo17 from '../src/images/18.jpg';
import photo18 from '../src/images/19.jpg';
import photo19 from '../src/images/20.jpg';
import photo20 from '../src/images/21.jpg';
import photo21 from '../src/images/22.jpg';
import photo22 from '../src/images/23.jpg';
import photo23 from '../src/images/24.jpg';
import photo24 from '../src/images/25.jpg';
import favicon from '../src/images/favicon.png';
import YUQI from './yuqi.mp3';
import LAMAR from './lamar.mp3';

/**
 * This app is the main component of the application.
 * It is responsible for rendering the entire application.
 * @returns {JSX.Element} the DOM element to be rendered
 */
const App = () => {

    // get the content from the json file
    var entries = Form.entries;
    var notes = Form.notes;

    /**
     * This function is responsible for mapping the entries from the json file to the word cloud.
     * @param {*} entry the entry from the json file
     * @returns the word cloud entry
     */
    const words = [
        ...entries.map(entry => {
            return {
                text: entry.word,
                value: entry.value
            }
        })
    ]

    // callbacks for the word cloud
    const callbacks = {
        onWordClick: console.log,
        onWordMouseOver: console.log,
        getWordTooltip: word => '',
    }

    // setting additional options for the word cloud
    const options = {
        rotations: 2,
        rotationAngles: [-90, 0],
        fontFamily: "Quicksand",
        fontSizes: [20, 60],
        deterministic: false,
    };

    // window size of the word cloud
    const size = [window.innerWidth, 600];

    const photos = [
        {
            src: photo1,
            width: 4,
            height: 6
        },
        {
            src: photo2,
            width: 5,
            height: 3
        },
        {
            src: photo3,
            width: 5,
            height: 3
        },
        {
            src: photo4,
            width: 5,
            height: 3
        },
        {
            src: photo5,
            width: 1,
            height: 1
        },
        {
            src: photo6,
            width: 1,
            height: 1
        },
        {
            src: photo7,
            width: 1,
            height: 1
        },
        {
            src: photo8,
            width: 4,
            height: 3
        },
        {
            src: photo9,
            width: 5,
            height: 3
        },
        {
            src: photo10,
            width: 1,
            height: 1
        },
        {
            src: photo11,
            width: 5,
            height: 3
        },
        {
            src: photo12,
            width: 4,
            height: 6
        },
        {
            src: photo13,
            width: 5,
            height: 3
        },
        {
            src: photo14,
            width: 15,
            height: 3
        },
        {
            src: photo15,
            width: 15,
            height: 3
        },
        {
            src: photo16,
            width: 4.5,
            height: 3
        },
        {
            src: photo17,
            width: 4.5,
            height: 3
        },
        {
            src: photo18,
            width: 4.5,
            height: 3
        },
        {
            src: photo19,
            width: 5,
            height: 3
        },
        {
            src: photo20,
            width: 3,
            height: 5
        },
        {
            src: photo21,
            width: 3,
            height: 5
        },
        {
            src: photo22,
            width: 3,
            height: 5
        },
        {
            src: photo23,
            width: 5,
            height: 3
        },
        {
            src: photo24,
            width: 3,
            height: 5
        },
    ];

    const playerOptions = {
        audioLists: [
            {
                name: 'Swimming Pools (Drank)',
                singer: 'Kendrick Lamar',
                cover: favicon,
                musicSrc: LAMAR
            },
            {
                name: 'Bonnie and Clyde',
                singer: 'YUQI',
                cover: favicon,
                musicSrc: YUQI
            }
        ],
        preload: true,
        autoPlay: true,
        autoPlayInitLoadPlayList: true,
        defaultPlayIndex: 0,
        showDownload: true,
        showPlay: true,
        showReload: true,
        responsive: true,
        volumeFade: {
            fadeOut: 900,
        },
        drag: true,
        toggle: true,
    };

    return (
        // the main app component
        <div className='App'>

            <h1 id="welcome" style={welcomeText}>
                Happy <span style={TwentyOne}>21st</span> Birthday, <span style={Alex}>Alex</span>!
            </h1>

            <Card id="welcome-div" style={card}>
                <CardContent>
                    <CardMedia>
                        <img
                            id = "title-card"
                            src={photo0}
                            alt="title card"
                            width="400px"
                            style={
                                {
                                    // center
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "block",
                                }
                            }
                        />
                    </CardMedia>
                    <Typography id="card" gutterBottom variant="h5" component="div">
                        to: Alex<br/>
                        from: your friends
                    </Typography>
                </CardContent>
            </Card> 

            <Card id="card-div" style={card}>
                <CardActionArea>
                    <ReactWordcloud
                        id="word-cloud"
                        callbacks={callbacks}
                        options={options}
                        size={size}
                        words={words}
                    /> 
                    <CardContent>
                        <Typography id="card" gutterBottom variant="h5" component="div">
                            Here is what your friends said about you!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> 

            <Typography id="enc" style={welcomeText} gutterBottom variant="h5" component="div">
                Birthday <span id="note-span">Notes</span>
            </Typography>

            <Grid id="notes-div" container spacing={{ xs: 2, sm: 4, md: 1 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                {notes.map((note, index) => (
                    <Grid id="grid-item" item xs={2} sm={4} md={6} key={index}>
                        <Card id='card-div-text'>
                            <CardContent>
                                <Typography id="card" gutterBottom variant="h5" component="div">
                                    #{index + 1}
                                </Typography>
                                <Typography id="card-text" gutterBottom variant="h5" component="div">
                                    {note.text.split("\n").map((item, key) => {
                                        return <span key={key}>{item}<br/></span>
                                    })}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography id="photo-gallery" style={header} gutterBottom variant="h5" component="div">
                Photo Gallery
            </Typography>

            <Gallery photos={photos} />
            <ReactJkMusicPlayer {...playerOptions} />

        </div>
    )
}

const welcomeText = {
    fontFamily: "ThirstySoftW01-Extrabold",
    fontSize: "70px",
    marginBottom: "50px",
}

const header = {
    fontFamily: "ThirstySoftW01-Extrabold",
    fontSize: "90px",
}

const Alex = {
    color: "#a62219",
}

const TwentyOne = {
    // gold
    color: "#c5893f",
}

const card = {
    // center
    marginTop: "20px",
}

export default App;
