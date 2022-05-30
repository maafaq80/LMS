import { FETCH_COURSES, ADD_COURSE } from "../constants/actionTypes";

export const courses = (coursesState = [], action) => {
    switch (action.type) {
        case FETCH_COURSES:
            return action.payload;
        case ADD_COURSE:
            return [...coursesState, action.payload];

        default:
            return coursesState;
    }
}