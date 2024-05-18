import styles from './SlideShow.module.css'

const SlideShow = (props) => {
    return(
        <section className="container">
            <div className={styles.slideWrapper}>
                <div className={styles.slider}>
                    <img src = {props.src} id = {styles.slide1}/>
                    <img src = {props.src} id = {styles.slide2}/>
                    <img src = {props.src} id = {styles.slide3}/>
                </div>
            </div>
        </section>
    )
}

export default SlideShow;