import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faPython,
  faAndroid
} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "AWS",
    "DynamoDB",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Java",
    "Android SDK",
    "Firebase",
    "HTML5",
    "CSS3",
];

const labelsThird = [
    "Java",
    "Object-Oriented Programming (OOP)",
    "Java Swing"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Hotel Booking Platform </h3>
                    <p>I developed an online hotel booking platform as a full-stack developer in a TechLauncher project. Using AWS Lambda (Python) and DynamoDB, I built the backend to support real-time booking and pricing. On the frontend, I used React and Tailwind CSS to create a responsive UI. I also designed RESTful APIs and collaborated with my team through Agile practices like daily stand-ups and code reviews.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Second-Hand Android App</h3>
                    <p>I built a real-time second-hand marketplace app as an Android developer, using Firebase Auth, Realtime Database, and Cloud Storage for secure data syncing and user interactions. I implemented features like listing, image uploads, likes, and comments, and used B+ tree indexing to improve search performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Marrakesh Strategy Game</h3>
                    <p>I developed a turn-based strategy board game in Java, simulating player movement, rug placement, and scoring. I applied object-oriented design to build modular components like Player, Board, and GameEngine, and implemented core game rules such as rug overlap detection and area control-based scoring.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;