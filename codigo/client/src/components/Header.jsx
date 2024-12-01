import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const menuItems = [
    { label: 'Livros', path: '/dashboard' },
    { label: 'Autores', path: '/authors' },
    { label: 'Minha Biblioteca', path: '/library' },
  ];

  return (
    <AppBar style={{ backgroundColor: '#ebb764', color: 'black', width: '100vw', height: '15vh' }}>
      <Toolbar style={{ justifyContent: 'space-between', height: '100%' }}>
        <Box display="flex" alignItems="center" height="100%" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="logo" style={{ marginRight: '8px', maxHeight: '15vh', objectFit: 'contain' }} />
        </Box>
        <Box display="flex" alignItems="center">
          {menuItems.map((item, index) => (
            <Button key={index} color="inherit" onClick={() => navigate(item.path)}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
