import AboutUs from "@/components/forMain/AboutUs/AboutUs";
import Catalogy from "@/components/forMain/Catalogy/Catalogy";
import Certificate from "@/components/forMain/Certificaty/Certificaty";
import FeedBack from "@/components/forMain/FeedBack/FeedBack";
import InitialSlider from "@/components/forMain/InitialSlide/InitialSlide";
import SpecialsConditions from "@/components/forMain/SpecialsConditions/SpecialConditions";
import NewGoods from "@/components/UI/NewGoods/NewGoods";
import OrderCall from "@/components/UI/OrderCall/OrderCall";
import styles from "../app/styles/_page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <InitialSlider/>
      <NewGoods/>
      <Catalogy id="home-catalogy"/> 
      <Certificate id="certificate"/>
      <AboutUs id="about-us" />
      <FeedBack id="feedback" />
      <SpecialsConditions id="specials-conditions" />
      <OrderCall id="order-call" />
    </main>
  );
}