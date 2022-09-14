import axios, { AxiosResponse } from "axios"
import {Course} from "../models/course"
axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
};

const Courses = {
    list: () => requests.get<Course[]>("/courses")
}

const agent = {
    Courses,
}

export default agent;