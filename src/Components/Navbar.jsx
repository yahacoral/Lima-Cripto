import React from 'react'
import styles from '../styles.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import LimaCriptoLogo from "../Assets/Logos/logo.png";
import tickets from "../Assets/Img/ENTRADAS.png"
import { ReactComponent as InstagramIcon } from "../Assets/Icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../Assets/Icons/linkedin.svg";
// import { ReactComponent as YoutubeIcon } from "../Assets/Icons/youtube.svg";
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
      main: '#587eeb',
    },
    secondary: {
      main: '#292929',
    },
  },
});

const pages = ['Sobre el evento','Agenda', 'Speakers', 'Sponsors', 'Contacto'];
const innerPages = ['Eventos Pasados','Noticias','FAQs']

export default function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <div className={styles.nav}>
        <span></span>
        <Link className='active' to="/">
          <img className={styles.logo} src={LimaCriptoLogo} alt="Lima Cripto" />
        </Link>

        <a href="/" target="_blank" rel="noreferrer">
          <img  className={styles.tickets} src={tickets} alt="tickets icon" />
        </a>
        </div>

        <ThemeProvider theme={theme}>
          <AppBar position="static" sx={{background:"white", boxShadow:'none'}}>
            <Container maxWidth="xl" >
              <Toolbar disableGutters >
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent:'space-between'} }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="secondary"
                >
                <MenuIcon />
              </IconButton>
              {/* Hamburguer Menu */}
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
                  display: { xs: 'block', md: 'none'}
                }}
              >
                {pages.map((page) => (
                  <Link to={page}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"  >{page}</Typography>
                  </MenuItem>
                  </Link>
                ))}

                {innerPages.map((innerPage) => (
                       
                          <Link to={innerPage} >
                          <MenuItem key={innerPage} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"  >{innerPage}</Typography>
                  </MenuItem>
                          </Link>
                        ))}

              </Menu>

              {/* Social Networks */}
              <div className={styles.social}>
                <a href={instagram} target="_blank" rel="noreferrer"><InstagramIcon/></a>
                <a href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon/></a>
                {/* <a href="/" target="_blank" rel="noreferrer"><YoutubeIcon/></a> */}
              </div>
            </Box>

            {/* Menu desplegado */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'space-between', alignItems:'center'} }}>
              {pages.map((page) => (
                <Link to={page}>
                <Button 
                color={'secondary'}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, fontWeight:'700', display: 'block', lineHeight:'1rem' }}
                >
                  {page}
                </Button>
                </Link>
              ))}

              {/* More Options */}
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  color="secondary"
                  sx={{fontWeight:'700'}}
                >
                  Más
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >

                    {innerPages.map((innerPage) => (
                      <MenuItem onClick={handleClose}>
                    <Link to={innerPage}>
                    <Button 
                    color={'secondary'}
                      key={innerPage}
                      // onClick={handleCloseNavMenu}
                      sx={{ my: 2, fontWeight:'700', lineHeight:'1rem', margin: '0' }}
                    >
                      {innerPage}
                    </Button>
                    </Link>
                    </MenuItem>
                  ))}
                
                </Menu>
              </div>

              {/* Social Networks */}
              <div className={styles.social}>
                <a href={instagram} target="_blank" rel="noreferrer"><InstagramIcon/></a>
               <a href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon/></a>
               {/* <a href="/" target="_blank" rel="noreferrer"><YoutubeIcon/></a> */}
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