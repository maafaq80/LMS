import * as api from "../api/index";
import { ADD_COURSE, FETCH_COURSES, GET_VIDEOS_OF_COURSE } from "../constants/actionTypes";
import Swal from "sweetalert2";



export const fetchCourses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCourses();
        dispatch({ type: FETCH_COURSES, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const addCourse = (formData, config) => async (dispatch) => {
    try {
        const { data } = await api.addCourse(formData, config);
        Swal.fire(
            'Good job!',
            'The Course is Created Successfully',
            'success'
        )
        dispatch({ type: ADD_COURSE, payload: data });
    } catch (error) {
        // console.log(error);
        Swal.fire(
            'Failed!',
            'The Course is not added',
            'error'
        )
    }
}


export const getVideosOfCourse = (courseId) => async (dispatch) => {
    try {
        const { data } = await api.getVideosOfCourse(courseId);
        dispatch({ type: GET_VIDEOS_OF_COURSE, payload: data });
    } catch (error) {
        console.log(error);
    }
}