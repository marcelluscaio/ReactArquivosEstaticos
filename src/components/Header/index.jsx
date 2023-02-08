import logo from './img/logo.png';
import search from './img/search.png';
import styles from './style/header.module.scss'

export default function Header () {
   return(
      <header className={styles.header}>
         <a href="#">
            <img src={logo} alt="Logo for the website" />
         </a>
         <form className={styles.header__searchField}>
            <input type="text" placeholder="O que você procura?"/>
            <img src={search} alt="Magnifier"/>
         </form>
      </header>
   )
}