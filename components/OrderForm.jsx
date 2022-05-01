import styles from '../styles/OrderForm.module.css';
import {useState} from 'react'

const OrderForm = () => {
    const [check, setCheck] = useState(false);

    const getCheck = (check) => {
        setCheck(check)
        console.log(check)
    }

    return (
        <section className='order'>
            <div className="container">
                <div className="orderForm">
                    <h2 className={styles.orderFormTitle}>Оформить заявку онлайн</h2>

                    <div className={styles.orderFormContainer}>
                        <div className={check ? 'formSwitch active' : 'formSwitch'}>
                            <p className={!check ? 'formSwitchText active' : 'formSwitchText'} onClick={() => getCheck(false)}>Для себя</p>
                            <p className={check ? 'formSwitchText active' : 'formSwitchText'} onClick={() => getCheck(true)}>Для бизнеса</p>
                        </div>

                        <form>
                            <input className={styles.orderFormInput} type="text" name='name' placeholder='Полные ФИО' />
                            <input className={styles.orderFormInput} type="mail" name='mail' placeholder='Электронная почта' />
                            <input className={styles.orderFormInput} type="phone" name='phone' placeholder='Номер телефона' />
                            <label className={styles.orderFormCheckbox}>
                                <input className={styles.orderFormCheckboxInput} type="checkbox" />
                                <span className={styles.orderFormCheckboxCustom}></span>
                                <p className={styles.orderFormCheckboxText}>Указывая свои персональные данные, вы даете согласие на их обработку</p>
                            </label>
                            
                            <button className={styles.orderFormButton}>Оформить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderForm;