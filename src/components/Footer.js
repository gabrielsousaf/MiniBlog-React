import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <h3>Escreva sobre o que voçê tem interesse!</h3>
            <p>Mini Blog &copy; 2023</p>
        </footer>
    )
}

export default Footer;