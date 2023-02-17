import styles from './style/Gallery.module.scss';
import photos from './photos.json';
import favorito from './img/favorito.png'
import open from './img/open.png'
import Tags from '../Tags';
import { useState } from 'react';

export default function Gallery(){
   const [photosShown, setPhotosShown] = useState(photos);
   const tags = [...new Set(photos.map(photo => photo.tag))];
   const filterPhotos = (tag) => {
      setPhotosShown(photos.filter(photo => photo.tag === tag))
   }

   const showAllPhotos = () => {
      setPhotosShown(photos)   
   }
   
   return(
      <section className={styles.gallery}>
         <h2>Navegue pela Galeria</h2>
         <Tags tags={tags} filterPhotos={filterPhotos} showAllPhotos={showAllPhotos}/>
         <ul className={styles.gallery__cards}>
            {photosShown.map(photo => {
               return(
                  <li key={photo.id} className={styles.gallery__card}>
                     <img 
                        className={styles.gallery__image}
                        src={photo.imagem}
                        alt={photo.titulo}
                      />
                      <p className={styles.gallery__descricao}>{photo.titulo}</p>
                      <div>
                        <p>{photo.creditos}</p>
                        <span>
                           <img
                              src={favorito} alt="ícone coração"
                           />
                           <img
                              src={open} alt="ícone de abertura de modal"
                           />
                        </span>
                      </div>
                  
                  </li>            
            )})}
         </ul>
      </section>
   )
}