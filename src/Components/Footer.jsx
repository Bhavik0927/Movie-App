import '../CSS/Footer.css';
import logo from '../assets/movie-removebg-preview.png'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='left-block'>
               <img src={logo} alt="logo" />
               <button>Hii User...</button>
            </div>
            <div className='groupsContainer'>
                <div>
                    <h3>THE BASICS</h3>
                    <ul>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div>
                    <h3>Community</h3>
                    <ul>
                        <li>Guideline</li>
                        <li>Discussions</li>
                        <li>Leaderboard</li>
                    </ul>
                </div>

                <div>
                    <h3>LEGAL</h3>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>DMCA Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;