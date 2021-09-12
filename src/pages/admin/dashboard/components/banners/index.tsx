import useStyles from "./index.style";

const Banners = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Welcome to Admin Panel</h1>
      <p className={styles.subtitle}> This is online shop admin panel</p>
    </div>
  );
};

Banners.displayName = "Banners";
export default Banners;
