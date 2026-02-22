import styles from '../commoncomponent.module.css';

export default function Footer () {
    return (
        <nav className={styles.footer}>
            <div className={styles.container}>
                <span className="flex col-4">Nicolas LORIOT ©</span>
                <span className="flex col-4">{new Date(Date.now()).getFullYear()}</span>
            </div>
        </nav>
    )
}