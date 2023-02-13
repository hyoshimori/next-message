import axios, { AxiosResponse } from "axios";
import camelcaseKeys from "camelcase-keys";

export const useAxios = () => {
  const instance = axios.create({
    headers: {"content-Type": "application/json"},
    responseType: "json",
    baseURL: "https://next-messenger-8e78d-default-rtdb.europe-west1.firebasedatabase.app/"
  });

  // we need to be able to manipulate snake case like created_at
  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      // when the data is nested we nedd deep: true
      return camelcaseKeys(response, { deep: true })
    }
  )

  return { axios: instance }
}
