import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">Flower Shop</div>

      <nav className="header-nav">
        <span>首页</span>
        <span>分类</span>
        <span>购物车</span>
        <span>订单</span>
        <span>我的</span>
      </nav>
    </header>
  );
}