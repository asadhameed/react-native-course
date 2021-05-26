import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer your_key",
  },
});
