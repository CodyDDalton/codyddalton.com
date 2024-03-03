import Photo from "../images/photo.png";
import Github from "../images/github.png";

function codyPortfolio() {
    return(
        <div className="Project">
            <p className="Full-p"><b className="First-word">codyddalton.com</b> is my professional website and digital portfolio. While I was at university, I made a lackluster Wix portfolio for part of one term’s assignment - but, since graduation, I’d had my mind set on a new and vastly improved digital portfolio to both represent me and my body of work. I bought the domain name and began my work on the site you’re on right this very moment. I made it using React and was able to upload the build to the file system on my site’s cPanel. I love the way it came out!</p>
            <div className="Project-pic-div">
                <h3 className="Screenshots-title">Screenshots</h3>
                <div className="Pic-gallery">
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                </div>
            </div>
            <p className="Full-p"><b className="First-word">For</b> the design, I wanted something that felt minimalist and elegant, but with a touch of quirky charm. I chose to work with React because it is a framework I've become quite familiar and competent with. What better to use for a demonstration of my skills gained thus far? </p>
            <div className="Project-list-div">
                <div className="Project-list">
                    <h3 className="List-title">Techs</h3>
                    <ul className="Techs-list" style={{marginLeft:"25%"}}>
                        <li className="Project-list-item">VS Code</li>
                        <li className="Project-list-item">cPanel</li>
                        <li className="Project-list-item">ScreenRec</li>
                        <li className="Project-list-item">Google Docs</li>
                        <li className="Project-list-item">Affinity Designer</li>
                    </ul>
                </div>
                <div className="Project-list">
                    <h3 className="List-title">Skills</h3>
                    <ul className="Skills-list" style={{marginLeft:"25%"}}>
                        <li className="Project-list-item">HTML5/CSS6</li>
                        <li className="Project-list-item">ReactJS</li>
                        <li className="Project-list-item">Web Design</li>
                        <li className="Project-list-item">Creative Writing</li>
                        <li className="Project-list-item">Graphic Design</li>
                    </ul>
                </div>
            </div>
            <p className="Full-p"><b className="First-word">Without</b> a doubt, this won't be the portfolio's final form. As my skills and experience grow, so too will it become necessary to continually update my self-presentation.</p>
            <div className="Project-github">
                <img className="Github-icon" src={Github} alt="Cody D Dalton dot com on Github" />
                <a className="Github-link" href="/">codyddalton.com on Github</a>
            </div>
        </div>
    )
    
}
export default codyPortfolio;