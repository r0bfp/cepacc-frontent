import axios from "axios";

const baseURL = 'http://localhost:3001'

const api = axios.create({
    baseURL
});

// eslint-disable-next-line
export { api };