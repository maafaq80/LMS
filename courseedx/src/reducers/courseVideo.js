import { GET_VIDEOS_OF_COURSE, ADD_VIDEO_TO_COURSE } from "../constants/actionTypes";

export const courseVideos = (courseVideosState = [], action) => {
    switch (action.type) {
        case GET_VIDEOS_OF_COURSE:
            return action.payload;
        case ADD_VIDEO_TO_COURSE:
            return [...courseVideosState, action.payload];

        default:
            return courseVideosState;
    }
}