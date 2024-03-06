import Photo from "../images/photo.png";
import Github from "../images/github.png";

function memory() {
    return(
        <div className="Project">
            <p className="Full-p"><b className="First-word">
                Memory</b> was a really fun project I was proud to hand in for my Connected Devices class. 
                In that class we did a number of cool projects, including one working with Arduino to create
                a semi-functional virtual thermometer. For <i>this</i> assignment, we were asked to use
                Tizen Studio to create a simple game that would be cast to a Samsung Smart TV. For my
                game, I chose to create the Memory game. I’ll admit, I chose this because I assumed (wrongly) that
                it would be a simple game to finish in a week’s time.</p>
            <div className="Project-pic-div">
                <h3 className="Screenshots-title">Screenshots</h3>
                <div className="Pic-gallery">
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                    <img className="Screenshots" src={Photo} alt="missing" />
                </div>
            </div>
            <p className="Full-p"><b className="First-word">
                Creating</b> the game introduced more complex coding than I had expected. I had to create a means for
                the game to randomly assign card spaces with a provided array of numbers, so that only two of each number
                would appear - but no fewer. I had to make ways for the game to eliminate cards once a pair had been discovered,
                and flip them back over when a mispairing had been flipped. All these functions and more aside, I also had to map
                the inputs so the game could be played with the arrow buttons on a computer or the arrow buttons on a Samsung TV 
                universal remote.</p>
            <div className="Project-list-div">
                <div className="Project-list">
                    <h3 className="List-title">Techs</h3>
                    <ul className="Techs-list" style={{marginLeft:"25%"}}>
                        <li className="Project-list-item">Tizen Studio</li>
                        <li className="Project-list-item">Tizen Emulator</li>
                        <li className="Project-list-item">Affinity Designer</li>
                    </ul>
                </div>
                <div className="Project-list">
                    <h3 className="List-title">Skills</h3>
                    <ul className="Skills-list" style={{marginLeft:"25%"}}>
                        <li className="Project-list-item">C++</li>
                        <li className="Project-list-item">NodeJS</li>
                        <li className="Project-list-item">Graphic Design</li>
                    </ul>
                </div>
            </div>
            <p className="Full-p"><b className="First-word">I'd</b> love to dress the game up a bit more. Maybe with some custom designs for the backs of the cards. Or several levels with different numbers of cards and card patterns!</p>
            <div className="Project-github">
                <img className="Github-icon" src={Github} alt="Memory on Github" />
                <a className="Github-link" href="https://github.com/CodyDDalton/memorygame" style={{marginLeft:"-30%"}}>Memory on Github</a>
            </div>
        </div>
    )
    
}
export default memory;