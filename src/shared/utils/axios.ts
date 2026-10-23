import axios from "axios";

export const useAuthRequest = ()=>{
    const token = sessionStorage.getItem("token")
    const authRequest = axios.create({
        baseURL: import.meta.env.VITE_AUTH_API_URL,
        headers: {accept: "application/json", Authorization: `Bearer ${token}`}
    });
    return authRequest
}

export const storeRequest = axios.create({
    baseURL: import.meta.env.VITE_STORE_API_URL,
    headers: {accept: "application/json"}
});