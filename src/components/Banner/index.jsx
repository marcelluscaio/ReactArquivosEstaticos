import styles from './style/banner.module.scss'
import banner from './img/banner.png';


export default function Banner(){
   return(
      <section className={styles.section}>
         <img className={styles.image} src={banner} alt="Picture from space"/>
         <h1>A galeria mais completa de fotos do espaço</h1>
      </section>
   )
}