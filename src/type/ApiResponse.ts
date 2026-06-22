export interface ApiResponse<T> {
    code:number,
    message:string,
    data:T
}

export interface ChildCategory{
    categoryId:number,
    categoryName:string
}

export interface CategoryResponse {
    category_id:number,
    category_name:string,
    parent_category:ChildCategory[]
}