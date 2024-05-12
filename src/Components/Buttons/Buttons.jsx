import styles from './Buttons.module.css'

const Buttons = () => {
    return(
        <div className={styles.buttons}>
            <button className={styles.playNow}>Play now <img src="../../public/Img/Movies/Play.svg" className={styles.playImg}/></button>
            <button className={styles.trailer}>Trailer</button>
        </div>
    )
}

export default Buttons;