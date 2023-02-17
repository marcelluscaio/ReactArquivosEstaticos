import styles from './style/populares.module.scss'
import Photos from './Photos.json'

export default function Populares(){
   return(
      <aside className={styles.populares}>
         <h2>Populares</h2>
         <ul className={styles.populares__imagens}>
            {Photos.map(Photo => {
               return(
                  <li key={Photo.id}>
                     <img src={Photo.path} alt={Photo.alt} />
                  </li>
               )
            })}
         </ul>
         <button>Ver mais fotos</button>
      </aside>
   )
}