import Photo from "../images/photo.png";
import Github from "../images/github.png";

function neurolog() {
    return(
        <div className="Project">
            <p className="Full-p"><b className="First-word">Neurolog</b> was my final project during my time at Full Sail University. Over three terms, I chiseled away at this project with my mind on a web app idea close to my heart. We had to start out with a concept - mine was a mental health journaling application. From there, we had to conduct market research, choose a tech stack, and create click-through prototypes; all to support a well-constructed and highly detailed project proposal. With approval, I continued working to flesh out my idea. </p>
            <div className="Project-pic-div">
                <h3 className="Screenshots-title">Screenshots</h3>
                <div className="Pic-gallery">
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                </div>
            </div>
            <p className="Full-p"><b className="First-word">I</b> set out to create something with a soothing aesthetic and a friendly interface. With the app, the user could fill out simple mood logs, answer randomly generated journaling prompts, or write up free-form entries about anything they wanted. The friendly interface - a robot mascot named Astrid - would provide helpful suggestions and remind the user to re-read old entries and reflect on what has changed and what has stayed the same.</p>

            <div className="Project-list-div">
                <div className="Project-list">
                    <h3 className="List-title">Techs</h3>
                    <ul className="Techs-list" style={{marginLeft:"25%"}}>
                        <li className="Project-list-item">VS Code</li>
                        <li className="Project-list-item">Figma</li>
                        <li className="Project-list-item">MongoDB Compass</li>
                        <li className="Project-list-item">MongoDB Atlas</li>
                        <li className="Project-list-item">Postman</li>
                    </ul>
                </div>
                <div className="Project-list">
                    <h3 className="List-title">Skills</h3>
                    <ul className="Skills-list" style={{marginLeft:"25%"}}>
                        <li className="Project-list-item">HTML5/CSS6</li>
                        <li className="Project-list-item">ReactJS</li>
                        <li className="Project-list-item">NodeJS</li>
                        <li className="Project-list-item">Express Framework</li>
                        <li className="Project-list-item">MongoDB</li>
                    </ul>
                </div>
            </div>
            
            <p className="Full-p"><b className="First-word">My</b> initial plans also included keyword recognition and AI-derived recommendations, but my eyes were a bit big for my stomach. Maybe one day!</p>
            <div className="Project-github">
                <img className="Github-icon" src={Github} alt="Neurolog on Github" />
                <a className="Github-link" href="/">Neurolog on Github</a>
            </div>
        </div>
    )
    
}
export default neurolog;