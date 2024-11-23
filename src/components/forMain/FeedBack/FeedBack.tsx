import FeedBackSlider from "./FeedBackSlider/FeedBackSlider";
import styles from "./FeedBack.module.scss";

interface FeedBackProps {
    id: string;
  }

const FeedBack:React.FC<FeedBackProps> = ({id}) => {
    return (
        <section className={styles.feedBack} id={id}>
            <h2 className={styles.feedBack__heading}>feedback</h2>
            <FeedBackSlider />
        </section>
    )
}

export default FeedBack;