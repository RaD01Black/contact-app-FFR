import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://radblack.site/">RaDBlack01</a> | React.js FFR
        </p>
    </div>
  )
}

export default Header