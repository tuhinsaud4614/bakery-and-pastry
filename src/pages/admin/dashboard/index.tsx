import { CATEGORIES } from "../../../shared/constants";
import ProductsTable from "../components/products-table";
import Banners from "./components/banners";

const data = CATEGORIES.map((item, i) => ({
  id: item.slug,
  title: item.name + " " + i,
  link: "https://www.facebook.com",
  category: item.name,
  img: item.src,
  price: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
  featured: i % 2 === 0,
}));

const Dashboard = () => {
  return (
    <>
      <Banners />
      <ProductsTable
        gutterTop={3}
        title="Latest Product"
        rows={["title", "category", "image", "price"]}
        data={[...data]}
        size="small"
      />
    </>
  );
};
Dashboard.displayName = "Dashboard";
export default Dashboard;
