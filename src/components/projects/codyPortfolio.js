import Photo from "../images/photo.png";
import Github from "../images/github.png";

function codyPortfolio() {
    <div className="Project">
            <h2 className="Project-title">codyddalton.com</h2>
            <p className="Full-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat.</p>
            <div className="Project-list-div">
                <div className="Project-list">
                    <h3 className="List-title">Techs</h3>
                    <ul className="Techs-list">
                        <li className="Project-list-item">Item Number N</li>
                        <li className="Project-list-item">Item Number N</li>
                        <li className="Project-list-item">Item Number N</li>
                        <li className="Project-list-item">Item Number N</li>
                        <li className="Project-list-item">Item Number N</li>
                    </ul>
                </div>
                <div className="Project-list">
                    <h3 className="List-title">Skills</h3>
                    <ul className="Skills-list">
                        <li className="Project-list-item">Item Number N</li>
                        <li className="Project-list-item">Item Number N</li>
                        <li className="Project-list-item">Item Number N</li>
                        <li className="Project-list-item">Item Number N</li>
                        <li className="Project-list-item">Item Number N</li>
                    </ul>
                </div>
            </div>
            <div className="Project-pic-div">
                <h3 className="Screenshots-title">Screenshots</h3>
                <div className="Pic-gallery">
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                </div>
            </div>
            <p className="Full-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat.</p>
            <div className="Project-github">
                <img className="Github-icon" src={Github} alt="Cody D Dalton dot com on Github" />
                <a className="Github-link" href="/">codyddalton.com on Github</a>
            </div>
        </div>
}
export default codyPortfolio;