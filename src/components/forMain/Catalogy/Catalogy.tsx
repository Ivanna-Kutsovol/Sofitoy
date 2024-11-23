import styles from "./Catalogy.module.scss";
import CatalogySlider from "./CatalogySlider/CatalogySlider";

interface CatalogyProps {
    id: string;
  }

const Catalogy:React.FC<CatalogyProps> = ({id}) => {
    return (
        <section className={styles.catalogy} id={id}>
            <h2 className={styles.catalogy__heading}>catalog</h2>
            <CatalogySlider />
        </section>
    )
}

export default Catalogy;