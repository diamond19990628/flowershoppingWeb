import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-logo">Flower Shop</div>

      <nav className="header-nav">
        <span onClick={()=>navigate("/")}>首页</span>
        <span>分类</span>
        <span>购物车</span>
        <span>订单</span>
        <span onClick={()=>navigate("/mypage")}>我的</span>
      </nav>
    </header>
  );
}