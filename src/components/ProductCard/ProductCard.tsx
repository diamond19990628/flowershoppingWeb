import "./ProductCard.css";

export default function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600"
        alt=""
      />

      <div className="product-info">
        <h3>粉色玫瑰花束</h3>

        <p>精选玫瑰搭配满天星，适合生日、表白、纪念日。</p>

        <div className="product-bottom">
          <strong>¥199</strong>
          <button>加入购物车</button>
        </div>
      </div>
    </div>
  );
}