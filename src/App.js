import React, { useState, useRef, useEffect } from 'react';

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
import Confetti from "react-confetti";
import ReactAudioPlayer from 'react-audio-player';
import ReactWordcloud from 'react-wordcloud';
import Gallery from 'react-photo-gallery';

// Custom Components
import './App.scss';

// Static Assets
import titleCard from '../src/images/1.jpg';
import photo1 from '../src/images/2.jpg';
import photo2 from '../src/images/3.jpg';
import photo3 from '../src/images/4.jpg';
import photo4 from '../src/images/5.jpg';
import photo5 from '../src/images/6.jpg';
import photo6 from '../src/images/7.jpg';
import photo7 from '../src/images/8.png';
import photo8 from '../src/images/9.jpg';
import photo9 from '../src/images/10.jpg';
import music from './lobby.mp3';
import { Form } from './content.json';

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
        getWordTooltip: word => ''
    }

    // setting additional options for the word cloud
    const options = {
        rotations: 2,
        rotationAngles: [-90, 0],
        fontFamily: "Quicksand",
        fontSizes: [20, 60],
        deterministic: true,
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
        }
    ];

    return (
        // the main app component
        <div className='App'>

            <ReactAudioPlayer
                src={music}
                autoPlay={true}
                volume={0.5}
                loop={true}
            />

            <h1 id="welcome" style={welcomeText}>
                Happy <span style={TwentyOne}>21st</span> Birthday, <span style={Alex}>Alex</span>!
            </h1>

            <Card id="card-div" style={card}>
                <CardContent>
                    <CardMedia>
                        <img
                            id = "title-card"
                            src={titleCard}
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
                        —from your friends and family
                    </Typography>
                </CardContent>
            </Card> 

            <Card id="card-div" style={card}>
                <CardActionArea>
                    <ReactWordcloud
                        callbacks={callbacks}
                        options={options}
                        size={size}
                        words={words}
                    /> 
                    <CardContent>
                        <Typography id="card" gutterBottom variant="h5" component="div">
                            "How would you describe Alex?"
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> 

            <Typography id="enc" style={header} gutterBottom variant="h5" component="div">
                Notes
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
                                    {note.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography id="photo-gallery" style={header} gutterBottom variant="h5" component="div">
                Photo Gallery
            </Typography>

            <Gallery photos={photos} />;

        </div>
    )
}

const welcomeText = {
    fontFamily: "ThirstySoftW01-Extrabold",
    fontSize: "70px",
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
    color: "#e69935",
}

const card = {
    // center
    marginTop: "20px",
}

export default App;