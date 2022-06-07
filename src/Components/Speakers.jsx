import React from 'react'
import styles from '../styles.module.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as LinkedinIcon } from "../Assets/Icons/linkedin.svg";
import {itemData} from "../Constants"

export default function Speakers() {
  
  return (
    <>
      <div className={styles.section} id={styles.speakers}>
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
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                
                title={item.name}
                subtitle={item.role}
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

        <a href="/Speakers" className={styles.primaryButton}>Ver más speakers</a>
        
      </div>
    </>
  )
}
