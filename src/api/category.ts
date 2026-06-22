import type { ApiResponse, CategoryResponse } from "../type/ApiResponse";
import request from "./request";
export const getCategories = () => {
    return request.get<ApiResponse<CategoryResponse[]>>("/api/member/categories/all");
}