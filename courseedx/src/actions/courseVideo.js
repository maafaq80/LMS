import * as api from "../api/index";
import { GET_VIDEOS_OF_COURSE } from "../constants/actionTypes";

export const getVideosOfCourse = () => async (dispatch) => {
    try {
        const { data } = await api.getVideosOfCourse();
        dispatch({ type: GET_VIDEOS_OF_COURSE, payload: data });
    } catch (error) {
        console.log(error);
    }
}