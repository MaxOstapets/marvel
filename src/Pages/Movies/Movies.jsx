import styles from './Movies.module.css'
import Nav from '../../Components/Nav/Nav';
import About from '../../Components/About/About';

const MoviesPage = () => {
    return(
        <>
            <Nav/>
            <About title = "Avengers" secondTitle = "Endgame"/>
        </>
    )
}

export default MoviesPage;