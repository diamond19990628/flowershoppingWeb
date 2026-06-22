import { useEffect, useState } from "react";
import { getCategories } from "../../api/category";
import type { CategoryResponse } from "../../type/ApiResponse";
import "./CategoryTabs.css";


export default function CategoryTabs() {
  const [categoryList,setCategoryList] = useState<CategoryResponse[]>([]);
  useEffect(()=>{
    const categoryFetch = async () => {
        const res = await getCategories();
        const getCategoryList = res.data.data;
        setCategoryList(getCategoryList);
    }
    categoryFetch();
  },[]);
  return (
    <section className="category-tabs">
      <h2>商品分类</h2>

      <div className="category-list">
        {categoryList.map((item)=>(
            <button key={item.category_id} data-id={item.category_id}>{item.category_name}</button>
        ))}
      </div>
    </section>
  );
}