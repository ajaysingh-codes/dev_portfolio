import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoA from '../../assets/images/ajay.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className='logo' to='/'>
        <img src={LogoA} alt='logo' />
      </Link>

      <nav>
        <NavLink exact="true" activeClassName="active" to='/'>
          <FontAwesomeIcon icon={faHome} color="#000" />
        </NavLink>

        <NavLink 
          exact="true" 
          activeClassName="active" 
          className="about-link" 
          to='/about'>
          <FontAwesomeIcon icon={faUser} color="#000" />
        </NavLink>

        <NavLink 
          exact="true" 
          activeClassName="active" 
          className="contact-link" 
          to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color="#000" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ajay-singh-dev/'>
            <FontAwesomeIcon icon={faLinkedin} color="#000" />
          </a>
        </li>

        <li>
          <a target="_blank" rel='noreferrer' href='https://github.com/ajaysingh-codes'>
            <FontAwesomeIcon icon={faGithub} color="#000" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar