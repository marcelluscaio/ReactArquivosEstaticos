import styles from "./style/Tags.module.scss"

export default function Tags({tags, filterPhotos, showAllPhotos}){
   return(
      <div className={styles.tags}>
         <p>Filtre pelas tags:</p>
         <ul className={styles.tags__lista}>
            <li onClick={showAllPhotos}>Todas</li>
            {tags.map( tag => <li onClick={() => filterPhotos(tag)}>{tag}</li>)}
         </ul>
      </div>
   )
}