import HeaderStyle from "./header.module.scss"
import logo from "../../assets/nba-logo.png"

const Header = () => {
  return (
    <header className={HeaderStyle.pageHeader}>
        <img className={HeaderStyle.logo} src={logo} alt="nba-logo" />
        <h1 className={HeaderStyle.title}>NBA Legends</h1>
    </header>
  )
}

export default Header