import Photo from "../images/photo.png";
import Github from "../images/github.png";

function codyPortfolio() {
    return(
        <div className="Project">
            <p className="Full-p"><b className="First-word">
                codyddalton.com</b> is my professional website and digital portfolio. While at
                university, I made a truthfully lackluster Wix portfolio as part of an assignment; since then, 
                I’ve had my mind set on a new and vastly improved version to better represent me and my body of 
                work. I bought up the domain name and began my work on the site you’re browsing now. I made it 
                with React and was able to upload the build to the file system on my site host's cPanel. I <i>love </i>
                the way it came out!</p>
            <div className="Project-pic-div">
                <h3 className="Screenshots-title">Screenshots</h3>
                <div className="Pic-gallery">
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                </div>
            </div>
            <p className="Full-p"><b className="First-word">
                For</b> the design, I wanted something that felt minimalist and elegant, but with a touch of my
                signature quirky charm. I chose to work with React because it's the framework I've become most 
                familiar and competent with. What better framework to demonstration my skills gained thus far? </p>
            <div className="Project-list-div">
                <div className="Project-list">
                    <h3 className="List-title">Techs</h3>
                    <ul className="Techs-list" style={{marginLeft:"25%"}}>
                        <li className="Project-list-item">VS Code</li>
                        <li className="Project-list-item">cPanel</li>
                        <li className="Project-list-item">Figma</li>
                        <li className="Project-list-item">Affinity Designer</li>
                    </ul>
                </div>
                <div className="Project-list">
                    <h3 className="List-title">Skills</h3>
                    <ul className="Skills-list" style={{marginLeft:"25%"}}>
                        <li className="Project-list-item">HTML5/CSS6</li>
                        <li className="Project-list-item">ReactJS</li>
                        <li className="Project-list-item">Web Design</li>
                        <li className="Project-list-item">Graphic Design</li>
                    </ul>
                </div>
            </div>
            <p className="Full-p"><b className="First-word">Without</b> a doubt, this won't be the portfolio's final form. As my skills and experience grow, so too will I continually update my self-presentation.</p>
            <div className="Project-github">
                <img className="Github-icon" src={Github} alt="Cody D Dalton dot com on Github" />
                <a className="Github-link" href="https://github.com/CodyDDalton/codyddalton.com" style={{marginLeft:"-5%"}}>codyddalton.com on Github</a>
            </div>
        </div>
    )
    
}
export default codyPortfolio;