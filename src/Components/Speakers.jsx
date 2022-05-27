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
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      title: 'Alexander Vargas',
      author: '@bkristastucchio',
      linkedin: 'https://www.linkedin.com/in/yahairacollado/'
    },
    {
      img: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
      title: 'Sara Quiñones',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1548964095-b9a292144866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      title: 'Honey',
      author: '@arwinneil',
    },
  
 
  ];
  
  return (
    <>
      <div className={styles.section}>
        <span>
          <h1>Speakers</h1>
          <h2>Especialistas de primer nivel estarán presentes en este evento</h2>
        </span>

        <ImageList sx={{ width: "80%", height: "auto" }} cols={3} rowHeight={350}>
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
