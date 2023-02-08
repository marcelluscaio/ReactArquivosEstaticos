import logo from './img/logo.png';
import search from './img/search.png';

export default function Header () {
   return(
      <header>
         <a href="#">
            <img src={logo} alt="Logo for the website" />
         </a>
         <form>
            <input type="text" placeholder="O que você procura?"/>
            <img src={search} alt="Magnifier"/>
         </form>
      </header>
   )
}