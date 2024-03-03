import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CodyPortfolio from '../components/projects/codyPortfolio';
import Neurolog from '../components/projects/neurolog';
import Memory from '../components/projects/memory';
import SpotifyJazzed from '../components/projects/spotifyJazzed';

function Projects(){

    const [project, setProject] = useState(<CodyPortfolio />);

    useEffect(() => {
        if(localStorage.getItem("project") === "CodyPortfolio"){
            
            document.getElementById("CodyPortfolio").style.backgroundColor ="#53E745";
            document.getElementById("CodyPortfolioB").style.color ="#15223B";
            
            setProject(<CodyPortfolio />)
        }
        if(localStorage.getItem("project") === "Neurolog"){
            
            document.getElementById("Neurolog").style.backgroundColor ="#53E745";
            document.getElementById("NeurologB").style.color ="#15223B";
            
            setProject(<Neurolog />)
        }
        if(localStorage.getItem("project") === "Memory"){
            
            document.getElementById("Memory").style.backgroundColor ="#53E745";
            document.getElementById("MemoryB").style.color ="#15223B";
            
            setProject(<Memory />)
        }
        if(localStorage.getItem("project") === "SpotifyJazzed"){
            
            document.getElementById("SpotifyJazzed").style.backgroundColor ="#53E745";
            document.getElementById("SpotifyJazzedB").style.color ="#15223B";
            
            setProject(<SpotifyJazzed />)
        }
    }, [])

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
                    <button className="Table-item-butn" onClick={(() => {
                        document.getElementById("CodyPortfolio").style.backgroundColor ="#53E745";
                        localStorage.setItem("project", "CodyPortfolio");
                        window.location.reload();
                    })}><li className="Projects-table-item" id="CodyPortfolio"><b className="Project-choice" id="CodyPortfolioB">codyddalton.com</b></li></button>
                    <button className="Table-item-butn" onClick={(() => {
                        
                        document.getElementById("Neurolog").style.color ="#53E745";
                        
                        localStorage.setItem("project", "Neurolog");
                        window.location.reload();
                    })}><li className="Projects-table-item" id="Neurolog"><b className="Project-choice" id="NeurologB">Neurolog</b></li></button>
                </ul>
                <ul className="Projects-col">
                    <button className="Table-item-butn" onClick={(() => {
                        
                        document.getElementById("Memory").style.color ="#53E745";
                        
                        localStorage.setItem("project", "Memory");
                        window.location.reload();
                    })}><li className="Projects-table-item" id="Memory"><b className="Project-choice" id="MemoryB">Memory for SmartTV</b></li></button>
                    <button className="Table-item-butn" onClick={(() => {
                       
                        document.getElementById("SpotifyJazzed").style.color ="#53E745";
                        
                        localStorage.setItem("project", "SpotifyJazzed");
                        window.location.reload();
                    })}><li className="Projects-table-item" id="SpotifyJazzed"><b className="Project-choice" id="SpotifyJazzedB">Spotify Jazzed</b></li></button>
                </ul>
            </div>
            {project}
            <Footer />
        </div>
    )
}
export default Projects;