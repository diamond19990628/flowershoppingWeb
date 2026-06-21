import "./CartItem.css";

export default function CartItem() {
  return (
    <div className="cart-item">
      <img
        src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300"
        alt=""
      />

      <div className="cart-info">
        <h3>粉色玫瑰花束</h3>
        <p>规格：默认款</p>
        <strong>¥199</strong>
      </div>

      <div className="cart-count">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>
  );
}