import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "436bb3578795432ab9a33c4a3b6c1fc6",
  },
});
