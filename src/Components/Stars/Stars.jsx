import styles from './Stars.module.css'

const Stars = () => {
    return(
        <ul className={styles.stars}>
            <li className={styles.star}><img src="../../public/Img/Movies/Star.png" className={styles.starImage}/></li>
            <li className={styles.star}><img src="../../public/Img/Movies/Star.png" className={styles.starImage}/></li>
            <li className={styles.star}><img src="../../public/Img/Movies/Star.png" className={styles.starImage}/></li>
            <li className={styles.star}><img src="../../public/Img/Movies/Star.png" className={styles.starImage}/></li>
            <li className={styles.star}><img src="../../public/Img/Movies/Star.png" className={styles.starImage}/></li>
        </ul>
    )
}

export default Stars; 