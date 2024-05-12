import styles from './Layout.module.css'
import Nav from '../Nav/Nav'
import About from '../About/About'
import Stars from '../Stars/Stars'
import Buttons from '../Buttons/Buttons'

const Layout = () => {
    const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices eu luctus risus at. Integer ante imperdiet ac donec ornare ac laoreet a."
    return(
        <>
            <Nav />
            
            <div className={styles.section}>
                <About title = "Avengers" secondTitle = "Endgame" about = {info}/>
                <Stars />
                <Buttons />
            </div>
        </>
    )
}

export default Layout;