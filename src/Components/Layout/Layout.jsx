import styles from './Layout.module.css'
import Nav from '../Nav/Nav'
import About from '../About/About'
import Stars from '../Stars/Stars'
import Buttons from '../Buttons/Buttons'
import SlideShow from '../SlideShow/SlideShow'

const Layout = (props) => {    
    return(
        <>
            <Nav />

            <div className={styles.section}>
                <About title = {props.title} secondTitle = {props.secondTitle} about = {props.about}/>
                <Stars />
                <Buttons />
                <SlideShow src = {props.link}/>
            </div>
        </>
    )
}

export default Layout;