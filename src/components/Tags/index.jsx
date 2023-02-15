import styles from "./style/Tags.module.scss"

export default function Tags(){
   return(
      <div className={styles.tags}>
         <p>Filtre pelas tags:</p>
         <ul className={styles.tags__lista}> 
            <li>Estrelas</li>
            <li>Galáxias</li>
            <li>Lua</li>
            <li>Planetas</li>
         </ul>
      </div>
   )
}