import Photo from "../images/photo.png";
import Github from "../images/github.png";

function spotifyJazzed() {
    return(
        <div className="Project">
            <p className="Full-p"><b className="First-word">
                Spotify Jazzed</b> was one of my first university projects I was really proud of. The assignment
                was to use the Spotify Web API via the Spotify developer suite. I had to design a custom interface
                and router which called the API and returned results based on custom search queries. For my design,
                I decided to go with something different from the classic Spotify colors and design philosophy. I 
                chose a colorful paintsplash aesthetic. I “Jazzed” it up, so to speak.</p>
            <div className="Project-pic-div">
                <h3 className="Screenshots-title">Screenshots</h3>
                <div className="Pic-gallery">
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                </div>
            </div>
            <p className="Full-p"><b className="First-word">
                The</b> first hurdle was setting up authorization. To call the API, one needs to have an access token.
                On the back-end, much of the initial work was to properly request that access token, store that token for
                the front-end to use, and swap it out with a provided refresh token when the token duration had depleted.
                After that, it came down to structuring refined search queries to the API and neatly displaying the results
                on the front-end. The three query categories I chose for my project were Artist, Album, and Audiobook.</p>
            <div className="Project-list-div">
                <div className="Project-list">
                    <h3 className="List-title">Techs</h3>
                    <ul className="Techs-list" style={{marginLeft:"30%"}}>
                        <li className="Project-list-item">VS Code</li>
                        <li className="Project-list-item">Figma</li>
                        <li className="Project-list-item">Affinity Designer</li>
                        <li className="Project-list-item">Spotify Web API</li>
                        <li className="Project-list-item">Postman</li>
                    </ul>
                </div>
                <div className="Project-list">
                    <h3 className="List-title">Skills</h3>
                    <ul className="Skills-list" style={{marginLeft:"25%"}}>
                        <li className="Project-list-item">HTML5/CSS6</li>
                        <li className="Project-list-item">ReactJS</li>
                        <li className="Project-list-item">NodeJS</li>
                        <li className="Project-list-item">API Testing</li>
                        <li className="Project-list-item">Graphic Design</li>
                    </ul>
                </div>
            </div>
            <p className="Full-p"><b className="First-word">
                With</b> what I can do now, I could return to this project and display far more than 5 results at a time. 
                I also initially filtered out results without accompanied images. If I were to do it today, I would display
                a "picture missing" image instead!</p>
            <div className="Project-github">
                <img className="Github-icon" src={Github} alt="Spotify Jazzed on Github" />
                <a className="Github-link" href="https://github.com/CodyDDalton/spotifyJazzed" style={{marginLeft:"-15%"}}>Spotify Jazzed on Github</a>
            </div>
        </div>
    )
    
}
export default spotifyJazzed;