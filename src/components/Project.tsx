import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.refresh.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.refresh.app/" target="_blank" rel="noreferrer"><h2>Refresh Web</h2></a>
                <p>Developed a full-stack online hotel booking platform using React, Tailwind CSS, AWS Lambda (Python), and DynamoDB, with RESTful APIs and Agile collaboration.</p>
            </div>
            <div className="project">
                <a href="https://www.refresh.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.refresh.app/" target="_blank" rel="noreferrer"><h2>Refresh App</h2></a>
                <p>Built and launched the Refresh iOS app with Swift, allowing users to book hotels in LA, San Francisco, Phoenix, and Austin with real-time availability, time slot selection, and dynamic pricing.</p>
            </div>
            <div className="project">
                <a href="https://github.com/earthlingsander/android-app" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/earthlingsander/android-app" target="_blank" rel="noreferrer"><h2>Second-Hand Android App</h2></a>
                <p>Developed a real-time second-hand marketplace Android app using Java and Firebase, featuring item listings, image uploads, user interactions, and fast search with B+ tree indexing.</p>
            </div>
            <div className="project">
                <a href="https://github.com/earthlingsander/marrakesh-board-game" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/earthlingsander/marrakesh-board-game" target="_blank" rel="noreferrer"><h2> Marrakesh Board Game</h2></a>
                <p>Developed a turn-based strategy game in Java with modular OOP design, simulating player movement, rug placement, and scoring based on area control.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;