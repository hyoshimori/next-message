import axios from "axios";

export const useAxios = () => {
  const instance = axios.create({
    headers: {"content-Type": "application/json"},
    responseType: "json",
    baseURL: "https://next-messenger-8e78d-default-rtdb.europe-west1.firebasedatabase.app/"
  });

  return { axios: instance }
}
