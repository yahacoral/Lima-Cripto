import React from 'react'
import styles from '../styles.module.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as LinkedinIcon } from "../Assets/Icons/linkedin.svg";

export default function Speakers() {

  const itemData = [
    {
      img: 'https://res.cloudinary.com/dubbcjkfa/image/upload/v1654100282/Lima-Cripto/angelaocando_dcfsj0.webp',
      title: 'Angela Ocando',
      author: 'Directora de la Escuela de Blockchain y Criptomonedas en Platzi',
      linkedin: 'https://www.linkedin.com/in/angelaocando/'
    },
    {
      img: 'https://res.cloudinary.com/dubbcjkfa/image/upload/v1654100534/Lima-Cripto/Dania_x2bcyc.jpg',
      title: 'Dania González',
      author: 'Diputada de la República de El Salvador',
      linkedin: 'https://www.linkedin.com/in/daniagonzalezsv/'
    },
    {
      img: 'https://res.cloudinary.com/dubbcjkfa/image/upload/v1654100403/Lima-Cripto/Monica-taher_wegw2d.jpg',
      title: 'Monica Taher',
      author: 'Asesora de Tecnología y Finanzas',
      linkedin: 'https://www.linkedin.com/in/monicataher/'
    },
    {
      img: 'https://res.cloudinary.com/dubbcjkfa/image/upload/v1654100470/Lima-Cripto/Marcos-Allende_zznytq.jpg',
      title: 'Marcos Allende',
      author: 'Líder Técnico LACChain',
      linkedin: 'https://www.linkedin.com/in/marcosallendel/'
    }
 
  ];
  
  return (
    <>
      <div className={styles.section}>
        <span>
          <h1>Speakers</h1>
          <h2>Especialistas de primer nivel estarán presentes en este evento</h2>
        </span>

        <ImageList className={styles.imageList} sx={{ width: "80%", overflowY:'hidden'}} rowHeight={350} cols={2} gap={0}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?h=350&fit=crop&auto=format`}
                srcSet={`${item.img}?w=300&h=350&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                
                title={item.title}
                subtitle={item.author}
                position="bottom"
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <a href={item.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{fill:'white', width:'2rem'}}/></a>
                  </IconButton >
                }

              />
            </ImageListItem>
          ))}
        </ImageList>
        
      </div>
    </>
  )
}
