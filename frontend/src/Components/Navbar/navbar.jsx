import styles from "./navbar.module.css";
import Image from "../../assets/GDSC-hack-nav.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src={Image} alt="Adhikaar Image" />
      <h2>BhumoomiCode</h2>
    </div>
  );
};

export default Navbar;
