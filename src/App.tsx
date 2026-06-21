import AddressCard from "./components/AddressCard/AddressCard";
import Banner from "./components/Banner/Banner";
import CartItem from "./components/CartItem/CartItem";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OrderCard from "./components/OrderCard/OrderCard";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import "./index.css";

export default function App() {
  return (
    <div>
      <Header />

      <main className="page-container">
        <Banner />

        <CategoryTabs />

        <ProductGrid />

        <section className="section">
          <h2>购物车</h2>
          <CartItem />
        </section>

        <section className="section">
          <h2>订单</h2>
          <OrderCard />
        </section>

        <section className="section">
          <h2>收货地址</h2>
          <AddressCard />
        </section>

        <section className="section">
          <h2>我的</h2>
          <ProfileCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}