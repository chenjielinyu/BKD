import axios from "axios";

export const request = new axios.create({
    baseURL: process.env.NODE_ENV === "development" ?
        "http://localhost:9527/api" : "http://120.4.93.170:9527/api"
});

export default request;