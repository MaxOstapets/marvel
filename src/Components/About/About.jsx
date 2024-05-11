import styles from './About.module.css'

const About = (props) => {
    return(
        <div className={styles.titles}>
            <h1>{props.title}</h1>
            <h2>{props.secondTitle}</h2>
        </div>
    )
} 

export default About;