import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import OrderForm from '../components/OrderForm';
import Reviews from '../components/Reviews';

const Home: NextPage = () => {
  return (
    <>
      <Reviews />
      <OrderForm />
    </>
  )
}

export default Home
