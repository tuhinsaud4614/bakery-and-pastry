import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import useStyles from "./index.style";

const AppLogo = ({ to }: { to: string }) => {
  const styles = useStyles();
  return (
    <Link to={to} className={styles.root}>
      <img
        src={logo}
        alt="logo"
        className={styles.img}
        width="100"
        height="48"
      />
    </Link>
  );
};

AppLogo.displayName = "AppLogo";
export default AppLogo;
