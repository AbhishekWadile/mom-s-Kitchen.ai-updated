import axios from "axios";

const api = axios.create({
    baseURL:'http://127.0.0.1:8080/auth'
    // auth_uri: "https://accounts.google.com/o/oauth2/auth",
    // token_uri: "https://oauth2.googleapis.com/token",
    // auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    // redirect:'http://localhost:5173'
});

export const googleAuth = (code)=>api.get(`/google?code=${code}`)