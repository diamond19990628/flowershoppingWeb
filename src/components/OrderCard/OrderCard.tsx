import "./OrderCard.css";

export default function OrderCard() {
  return (
    <div className="order-card">
      <div className="order-header">
        <span>订单号：202606220001</span>
        <strong>待支付</strong>
      </div>

      <div className="order-product">
        <img
          src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=300"
          alt=""
        />

        <div>
          <h3>向日葵礼盒</h3>
          <p>数量：1</p>
          <span>¥168</span>
        </div>
      </div>

      <div className="order-footer">
        <span>合计：¥168</span>
        <button>查看详情</button>
      </div>
    </div>
  );
}