import React from 'react'
import styles from '../styles.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import LimaCriptoLogo from "../Assets/Logos/logo.png";
import { ReactComponent as InstagramIcon } from "../Assets/Icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../Assets/Icons/linkedin.svg";
import { ReactComponent as YoutubeIcon } from "../Assets/Icons/youtube.svg";
import {instagram, linkedin} from "../Constants"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme({
  palette: {
    primary: {
      main: '#292929',
    },
    secondary: {
      main: '#587eeb',
    },
  },
});

const pages = ['Evento 2022','Eventos', 'Noticias','FAQ', 'Contacto'];

export default function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
       <div className={styles.navbar}>
        <Link className='active' to="/">
          <img className={styles.logo} src={LimaCriptoLogo} alt="Lima Cripto" />
        </Link>

        <ThemeProvider theme={theme}>
          <AppBar position="static" sx={{background:"white", boxShadow:'none'}}>
            <Container maxWidth="xl" >
              <Toolbar disableGutters >
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent:'space-between' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="primary"
                >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none', },
                }}
              >
                {pages.map((page) => (
                  <Link to={page}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" >{page}</Typography>
                  </MenuItem>
                  </Link>
                ))}
              </Menu>
              <div className={styles.social}>
                <a href={instagram} target="_blank" rel="noreferrer"><InstagramIcon/></a>
                <a href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon/></a>
                <a href="/" target="_blank" rel="noreferrer"><YoutubeIcon/></a>
              </div>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'space-between'} }}>
              {pages.map((page) => (
                <Link to={page}>
                <Button 
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, fontWeight:'700', color: 'primary', display: 'block' }}
                >
                  {page}
                </Button>
                </Link>
              ))}
              <div className={styles.social}>
                <a href={instagram} target="_blank" rel="noreferrer"><InstagramIcon/></a>
               <a href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon/></a>
               <a href="/" target="_blank" rel="noreferrer"><YoutubeIcon/></a>
            </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
       </div>
    </>
  )
}