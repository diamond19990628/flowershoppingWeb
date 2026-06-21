import "./CategoryTabs.css";

export default function CategoryTabs() {
  return (
    <section className="category-tabs">
      <h2>商品分类</h2>

      <div className="category-list">
        <button className="active">全部</button>
        <button>玫瑰</button>
        <button>生日花束</button>
        <button>节日礼盒</button>
        <button>绿植盆栽</button>
      </div>
    </section>
  );
}