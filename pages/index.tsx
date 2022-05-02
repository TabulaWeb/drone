import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import OrderForm from '../components/OrderForm';
import Reviews from '../components/Reviews';
import Work from '../components/Work';
import Services from '../components/Services';
import Main from '../components/Main';
import Download from '../components/Download';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <Services />
      <Work />
      <Download />
      <Reviews />
      <OrderForm />
    </>
  )
}

export default Home
