import styles from './About.module.css'

const About = (props) => {
    return(
        <>
            <section className={styles.section}>
                <div className={styles.titles}>
                    <h1>{props.title}</h1>
                    <h2>{props.secondTitle}</h2>
                </div>

                <div className={styles.info}>{props.about}</div>
            </section>
        </>
    )
} 

export default About;