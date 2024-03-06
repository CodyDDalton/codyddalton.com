import Discord from '../components/images/discord.png';
import Email from '../components/images/email.png';
import Github from '../components/images/github.png';
import LinkedIn from '../components/images/linkedin.png';

function Footer(){
    return(
        <footer className="Footer">
            <div className="Footer-div">
                <div className="Footer-item">
                    <img src={LinkedIn} alt="LinkedIn" className="Footer-img" />
                    <a className="Footer-txt" href="https://www.linkedin.com/in/cody-d-dalton/">Connect on LinkedIn!</a>
                </div>
                <div className="Footer-item">
                    <img src={Github} alt="Github" className="Footer-img" />
                    <a className="Footer-txt" href="https://github.com/CodyDDalton">Browse on Github!</a>
                </div>
            </div>
            <div className="Footer-div">
                <div className="Footer-item">
                    <img src={Discord} alt="Discord" className="Footer-img" />
                    <a className="Footer-txt" href="https://discord.gg/UqT2tEzE8w">Chat on Discord!</a>
                </div>
                <div className="Footer-item">
                    <img src={Email} alt="Email" className="Footer-img" />
                    <a className="Footer-txt" href="mailto:cody_d_dalton@proton.me">Send me an Email!</a>
                </div>
            </div>
            
        </footer>
    )
}
export default Footer;