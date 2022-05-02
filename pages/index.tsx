import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import OrderForm from '../components/OrderForm';
import Reviews from '../components/Reviews';
import Work from '../components/Work';
import Services from '../components/Services';
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <Services />
      <Work />
      <Reviews />
      <OrderForm />
    </>
  )
}

export default Home
