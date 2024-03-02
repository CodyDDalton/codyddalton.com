import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CodyPortfolio from '../components/projects/codyPortfolio';

function Projects(){

    return(
        <div className="App">
            <Header />
            <div className="Projects-top-section">
                <h1 className="Page-title">Cody's Project Gallery</h1>
                <p className="Full-p">
                <b className="First-word">I </b>am available for projects 
                and am always looking to expand my body of work. Lorem ipsum
                dolor sit amet, consectetur adipi scing elit. I am available 
                for projects and am always looking to expand my body of work. 
                Lorem ipsum dolor sit amet, consectetur adipi scing elit. I am
                available for projects and am always looking to expand my body
                of work. Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                </p>
            </div>
            <div className="Projects-table">
                <ul className="Projects-col">
                    <li className="Projects-table-item"><b className="First-word" id="codys-portfolio">codyddalton.com</b></li>
                    <li className="Projects-table-item"><b className="First-word" id="neurolog">Neurolog</b></li>
                </ul>
                <ul className="Projects-col">
                    <li className="Projects-table-item"><b className="First-word" id="memory">Memory for SmartTV</b></li>
                    <li className="Projects-table-item"><b className="First-word" id="spotify-jazzed">Spotify Jazzed</b></li>
                </ul>
            </div>
            <CodyPortfolio />
            <Footer />
        </div>
    )
}
export default Projects;