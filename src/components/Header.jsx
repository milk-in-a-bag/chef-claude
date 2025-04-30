import styles from "./Header.module.css";
import header from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <nav>
      <div className={styles.logo}>
        <img src={header} alt="Chef Claude logo" />
        <h1>Chef Claude</h1>
      </div>
    </nav>
  );
}
