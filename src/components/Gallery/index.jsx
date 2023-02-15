import styles from './style/Gallery.module.scss';
import photos from './photos.json';
import favorito from './img/favorito.png'
import open from './img/open.png'
import Tags from '../Tags';

export default function Gallery(){
   return(
      <section className={styles.gallery}>
         <h2>Navegue pela Galeria</h2>
         <Tags/>
         <ul className={styles.gallery__cards}>
            {photos.map(photo => {
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