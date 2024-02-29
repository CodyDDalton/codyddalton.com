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
                    <p className="Footer-txt">Connect on LinkedIn!</p>
                </div>
                <div className="Footer-item">
                    <img src={Github} alt="Github" className="Footer-img" />
                    <p className="Footer-txt">Browse on Github!</p>
                </div>
            </div>
            <div className="Footer-div">
                <div className="Footer-item">
                    <img src={Discord} alt="Discord" className="Footer-img" />
                    <p className="Footer-txt">Chat on Discord!</p>
                </div>
                <div className="Footer-item">
                    <img src={Email} alt="Email" className="Footer-img" />
                    <p className="Footer-txt">Send me an Email!</p>
                </div>
            </div>
            
        </footer>
    )
}
export default Footer;