import { Typography } from '@mui/material';
import './navbar.scss'
import { useNavigate } from 'react-router-dom';
const navItems = [{ name: 'Home', path: '/' }, { name: 'Charts', path: '/chart' }];
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav id='navigation'>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Typography className='nav-item' onClick={() => navigate(item.path)}>
              {item.name}
            </Typography>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
