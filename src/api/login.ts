import type { LoginResponse } from "../type/ApiResponse";
import request from "./request";
export const Login = (nickName:string,password:string,phone:string) => {
    return request.get<LoginResponse>("/api/webLogin",{
        params:{
            nickName,
            password,
            phone
        }
    });
}