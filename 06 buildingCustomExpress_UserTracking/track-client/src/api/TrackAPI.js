import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const instance = Axios.create({
  baseURL: "http://956c654b200a.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
