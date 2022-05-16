import styles from './layout.module.scss'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return <div className={styles.container}>
        <Header></Header>
        {children}
        <Footer></Footer>
        </div>
  }

