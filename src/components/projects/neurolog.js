import Photo from "../images/photo.png";
import Github from "../images/github.png";

function neurolog() {
    return(
        <div className="Project">
            <p className="Full-p"><b className="First-word">
                Neurolog</b> was the capstone project for my final months at Full Sail. Over three terms,
                I chiseled away at this project with my mind on an app idea close to my heart. To start,
                I had to dream up a basic concept - mine was a mental health journaling app. From there, I 
                conducted market research, chose a tech stack, and created a click-through prototype on Figma --
                all to support a well-constructed project proposal. With approval, I continued working to flesh out
                my concept. </p>
            <div className="Project-pic-div">
                <h3 className="Screenshots-title">Screenshots</h3>
                <div className="Pic-gallery">
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                </div>
            </div>
            <p className="Full-p"><b className="First-word">
                For</b> the design, I aimed for a soothing aesthetic and a friendly interface. Functionally, I wanted there
                to be a means to fill out simple mood logs, answer randomly generated journaling prompts, and write up free-form
                entries about anything under the sun. The friendly interface - a robot mascot named Astrid - would provide helpful
                suggestions -- reminding the user to re-read old entries and reflect on what had changed and what had stayed the same.</p>

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
            
            <p className="Full-p"><b className="First-word"
                >My</b> initial plans also included keyword recognition and AI-derived recommendations, but my eyes were a bit big
                for my proverbial stomach. Maybe one day I'll revisit this one with new skills to aid the rest of my vision!</p>
            <div className="Project-github">
                <img className="Github-icon" src={Github} alt="Neurolog on Github" />
                <a className="Github-link" href="https://github.com/CodyDDalton/neurolog" style={{marginLeft:"-25%"}}>Neurolog on Github</a>
            </div>
        </div>
    )
    
}
export default neurolog;