import styles from './Movies.module.css'
import Layout from '../../Components/Layout/Layout';

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices eu luctus risus at. Integer ante imperdiet ac donec ornare ac laoreet a."

const images = [
    "../../public/Img/Movies/SlideShow/CapitanMarvel.svg",
    "../../public/Img/Movies/SlideShow/DoctorStrange.svg",
    "../../public/Img/Movies/SlideShow/ShangSchi.svg"
]

const slide = images.map((el) => <img src={el}/>)

const MoviesPage = () => {
    return(
        <>
            <Layout title = "Avengers" secondTitle = "Endgame" about = {info} link = {slide}/>
        </>
    )
}

export default MoviesPage;