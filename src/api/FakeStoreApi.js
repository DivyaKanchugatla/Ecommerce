import axios from "axios";

//creating an instance for api with axios.create()
export default axios.create({
    baseURL: "https://fakestoreapi.com",
});