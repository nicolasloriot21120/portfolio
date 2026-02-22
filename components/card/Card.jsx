import styles from './Card.module.css'

export default function MyCard({children}) {
    return (
    <container className={styles.card}>
        {children}
    </container>            
    )
}