import styles from "./style/initialPage.module.scss";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

export default function InitialPage(){
   return (
      <>
         <Header/>
         <main className={styles.main}>
            <section className={styles.main__container}>
               <Menu/>
               <Banner/>
            </section>
            <Gallery/>
         </main>
      </>
   )
}