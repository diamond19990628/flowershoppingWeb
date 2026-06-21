import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <div>
        <span className="banner-tag">Fresh Flowers</span>

        <h1>把今天变成值得纪念的一天</h1>

        <p>精选鲜花、生日花束、节日礼盒、绿植盆栽，当日新鲜配送。</p>

        <button>立即选购</button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900"
        alt=""
      />
    </section>
  );
}