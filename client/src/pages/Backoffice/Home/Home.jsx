import { useAppContext } from '../../../context/AppContext';
import styles from './Home.module.scss';

const Home = () => {
  const { homeTitle } = useAppContext();

  return <div className={styles.home}>{`${homeTitle}`}</div>;
};

export default Home;
