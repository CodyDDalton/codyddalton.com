import Header from '../components/Header';
import Footer from '../components/Footer';
import React, {useEffect} from 'react';

function Home(){

    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("project", "CodyPortfolio");
    }, []);

    return(
        <div className="App">
            <Header />
            <div className="Home-top-section">
                <h1 className="Page-title">Web & App Developer</h1>
                <p className="Full-p">
                <b className="First-word">My</b> name is Cody Dalton. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Fringilla ut morbi tincidunt augue interdum velit. Sit amet massa vitae tortor condimentum lacinia.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="Full-p">
                <b className="First-word">Lorem</b> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Fringilla ut morbi tincidunt augue interdum velit. Sit amet massa vitae tortor condimentum
                lacinia. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="Home-midsection">
                <div className="Med-p-div">
                    <p className="Med-p">
                        <b className="First-word">I</b> have a bachelor’s degree in Web Development from Full Sail
                    University. I spent two-and-a-half years as an online student there from May of 2021 to December
                    of 2023. Since graduating, I’ve continued my education by pursuing and attaining a handful of 
                    certifications - as well as further refining my resume and the digital portfolio you’re reading now.

                    </p>
                    <a className="Read-more" href="/education">Read more...</a>
                </div>
                <div className="Med-p-div">
                    <p className="Med-p">
                        <b className="First-word">During </b>my time at Full Sail, I completed several large-scale projects
                        - including a custom interface for receiving and displaying query calls to the Spotify Web API; a 
                        game made for and playable on the Smart TV; and a capstone project conducting research, writing proposals,
                        and building a full-stack application from the ground up.

                    </p>
                    <a className="Read-more" href="/project-gallery">Read more...</a>
                </div>
            </div>
            <div className="Home-bottom">
                <p className="Full-p">
                    <b className="First-word">I</b> am available for projects and am always looking to expand my body of work. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Fringilla ut morbi tincidunt augue interdum velit. Sit amet massa vitae tortor condimentum lacinia.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button type="button" className="Hire-btn">Hire me</button>
            </div>
            <Footer />
        </div>
    )
}
export default Home;