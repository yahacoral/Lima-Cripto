import React from 'react'
import styles from '../../styles.module.css';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {newsArray} from "../../Constants"

const theme = createTheme({
  palette: {
    primary: {
      main: '#0078c5',
    },
    secondary: {
      main: '#070706',
    },
  },
});

export default function Press() {

  return (
    <>
      <div  className={styles.bannerCategory}>
        <h1>Noticias</h1>
        <p>Entérate de nuestras últimas actualizaciones de Lima Cripto.</p>
      </div>
      <div className={styles.section}>
        <div className={styles.press}>
          <ThemeProvider theme={theme}>
            {newsArray.map((news) => (
              <Card sx={{ maxWidth: 345, margin: "1rem"}}>
              <div className={styles.cardHeader}>
                <CardHeader
                  avatar={
                    <Avatar alt="logo" src={news.logo} >
                    </Avatar>
                  }

                  title={news.title}
                  subheader={news.author}
                />
              </div>
              <CardMedia
                component="img"
                height="194"
                image={news.image}
                alt="image"
              />
              <div className={styles.content}>
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {news.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button href={news.link} target="_blank" rel="noreferrer">Compartir
                </Button>
                <Button href={news.link} target="_blank" rel="noreferrer">
                  Ver más
                </Button>
              </CardActions>
              </div>
            </Card>
            ))}
          </ThemeProvider>
        </div>
      </div>
    </>
  )
}