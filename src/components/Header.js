import Logo from '../components/images/AboveBeyondLogo.png';

function Header() {
    return(
        <div className="Header">
            <img className="Logo" src={Logo} alt="Cody D Dalton dot Com" />
            <nav className="Nav">
                <a className="Nav-item" href="/">Home</a>
                <a className="Nav-item" href="/">Education</a>
                <a className="Nav-item" href="/project-gallery">Projects</a>
                <a className="Nav-item" href="/">Hire me</a>
            </nav>
        </div>
    )
}

export default Header;