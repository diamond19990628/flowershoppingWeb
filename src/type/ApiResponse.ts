export interface ApiResponse<T> {
    code:number,
    message:string,
    token:string,
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

export interface LoginResponse {
    status: number;
    token: string;
    data: {
        nickName: string;
        password: string;
        phone: string;
    };
}