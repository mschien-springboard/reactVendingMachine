import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to='/soda'>Soda</NavLink>
      <NavLink exact to='/tea'>Tea</NavLink>
      <NavLink exact to='/coffee'>Coffee</NavLink>
    </nav>
  );
};

export default Navbar;