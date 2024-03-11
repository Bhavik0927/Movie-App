import { FaSearch } from "react-icons/fa";
import '../CSS/Header.css';
import logo from '../assets/movieLogo.png'
import { Link } from "react-router-dom";


const Header = () =>{
    return(
        <>
          <div className="navContainer" >
            <img src={logo} alt="logo" />
            <ul className="shows">
                <Link to=""><li>Movies</li> </Link>
                <li>TV Shows</li>
                <li>People</li>
                <li>More</li>
            </ul>
            <FaSearch />
          </div>  
        </>
    )
}

export default Header;