import '../../css/Navigation.css';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav className="nav">
      <div className="logo Flex-1">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Spacex" />
        </Link>
        <h2>Space Travellers Hub</h2>
      </div>
      <ul className="navLinks Flex-1">
        <li className="linkItems">
          <NavLink
            className={({ isActive }) => (isActive ? 'activeClassName' : '')}
            to="rockets"
          >
            Rockets
          </NavLink>
        </li>
        <li className="linkItems mission-link">
          <NavLink
            className={({ isActive }) => (isActive ? 'activeClassName' : '')}
            to="missions"
          >
            Missions
          </NavLink>
        </li>
        <li className="linkItems">
          <NavLink
            className={({ isActive }) => (isActive ? 'activeClassName' : '')}
            to="my-profile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
