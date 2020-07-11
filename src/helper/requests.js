import axios from "axios";
import { apiUrl } from "../helper/common";
export const GET = async (route, body) => {
  let response;
  response = await axios.get(apiUrl, route);
  return response;
};

export const POST = async (route, body) => {
  let response;
  response = await axios.post(apiUrl + route, body);
  return response;
};
