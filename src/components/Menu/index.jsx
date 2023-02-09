import './style/Menu.modules.scss';
import home from './img/home-ativo.png';
import maisVistas from './img/mais-vistas-inativo.png';
import maisCurtidas from './img/mais-curtidas-inativo.png';
import novas from './img/novas-inativo.png';
import surpreendaMe from './img/surpreenda-me-inativo.png';


export default function Menu(){
   return (
      <nav className='menu'>
         <ul className='menu__list'>
            <li className='menu__list__item'>
               <img src={home} alt="House outline"/>
               <a href="#">Inicio</a>
            </li>
            <li className='menu__list__item'>
               <img src={maisVistas} alt="Eye outline"/>
               <a href="#">Mais vistas</a>
            </li>
            <li className='menu__list__item'>
               <img src={maisCurtidas} alt="Hand with thumbs up outline"/>
               <a href="#">Mais curtidas</a>
            </li>
            <li className='menu__list__item'>
               <img src={novas} alt="Point with lines ressembling a star"/>
               <a href="#">Novas</a>
            </li>
            <li className='menu__list__item'>
               <img src={surpreendaMe} alt="Lightbulb outline"/>
               <a href="#">Surpreenda-me</a>
            </li>
         </ul>
      </nav>
   )
}