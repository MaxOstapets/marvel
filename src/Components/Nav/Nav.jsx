import styles from './Nav.module.css'

const Nav = () => {
    return(
        <nav>
            <ul>
                <li className={styles.link}>Movies</li>
                <li className={styles.anotherPage}>TV Shows</li>
            </ul>
            
            <div className={styles.titles}>
                <h1 className={styles.title}>MARVEL</h1>
                <h2>CINEMATIC UNIVERSE</h2>
            </div>

            <div className={styles.icons}>
                <img src="../../public/Img/Movies/SearchIcon.png" className={styles.icon}/>
                <img src="../../public/Img/Movies/BellIcon.png" className={styles.icon}/>
            </div>

            <span className={styles.signUp}>Sign Up</span>
        </nav>
    )
}

export default Nav;