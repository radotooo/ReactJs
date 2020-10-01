import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-aa0a9.cloudfunctions.net/api"
});

export default instance;
