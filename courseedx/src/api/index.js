import axios from "axios";
import { URL } from "../constants/actionTypes";

const API = axios.create({ baseURL: URL });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("profile")) {
//         req.headers.Authorization = `Token ${JSON.parse(localStorage.getItem("profile")).token}`;
//     }
//     return req;
// })


export const fetchCourses = () => API.get(`/course`);
export const addCourse = (formData, config) => API.post(`/course/addCourse`, formData, config);

export const getVideosOfCourse = (courseId) => API.get(`/course/getVideosOfCourse/${courseId}`);
export const addVideoToCourse = (formData, config) => API.post(`/course/addVideoToCourse`, formData, config);