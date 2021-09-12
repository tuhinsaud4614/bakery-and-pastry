import { CATEGORIES } from "../../../shared/constants";
import ProductsTable from "../components/products-table";
import Banners from "./components/banners";
import useStyles from "./index.style";

const Dashboard = () => {
  const styles = useStyles();
  const data = CATEGORIES.map((item, i) => ({
    id: item.slug,
    title: item.name + " " + i,
    category: item.name,
    img: item.src,
    price: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    featured: i % 2 === 0,
  }));
  return (
    <>
      <Banners />
      <ProductsTable
        gutterTop={3}
        rootProps={{ className: styles.root }}
        title="Latest Product"
        rows={["title", "category", "image", "price"]}
        data={[...data]}
        error={{ title: "error", message: "Fetching error" }}
        size="small"
        loadingData={false}
        showId
        showPaginate
      />
    </>
  );
};
Dashboard.displayName = "Dashboard";
export default Dashboard;
