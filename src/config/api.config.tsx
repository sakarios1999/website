import axios from "axios";
import { PathApi } from "./api.path.config";

const headers = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};
export const API = {
  get(path: string) {
    return axios.get(`${PathApi.BASE_URL}${path}`);
  },
  post(path: string, params: any, contentType?: string) {
    return axios.post(`${PathApi.BASE_URL}${path}`, params, { headers });
  },
  patch(path: string, params: any, contentType?: string) {
    return axios.patch(`${PathApi.BASE_URL}${path}`, params);
  },
};
