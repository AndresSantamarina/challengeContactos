import axios from "axios"

const contactoApi = axios.create({
    baseURL: "http://localhost:4001/api/"
})

export default contactoApi