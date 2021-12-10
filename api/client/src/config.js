import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://jeremybloganime.herokuapp.com/api/"
})