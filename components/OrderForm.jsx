import styles from '../styles/OrderForm.module.css';

const OrderForm = () => {
    return (
        <section className='order'>
            <div className="container">
                <div className="orderForm">
                    <h2 className={styles.orderFormTitle}>Оформить заявку онлайн</h2>

                    <div className={styles.orderFormContainer}>
                        <div className={styles.formSwitch}>
                            <p className='formSwitchText active'>Для себя</p>
                            <p className='formSwitchText'>Для бизнеса</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderForm;