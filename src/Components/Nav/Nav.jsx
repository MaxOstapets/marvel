import { NavLink, useLocation } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = () => {
    const {pathname} = useLocation()

    return(
        <nav>
            <ul>
                <NavLink to="/" className={pathname === '/' ? styles.link : styles.anotherPage}>Movies</NavLink>
                <NavLink to="/tvshows" className={pathname === '/tvshows' ? styles.link : styles.anotherPage}>TV Shows</NavLink>            
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