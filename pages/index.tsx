import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import OrderForm from '../components/OrderForm';
import Reviews from '../components/Reviews';
import Work from '../components/Work';


const Home: NextPage = () => {
  return (
    <>
      <Work />
      <Reviews />
      <OrderForm />
    </>
  )
}

export default Home
