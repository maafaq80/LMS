import { combineReducers } from "redux";
import { courses } from "./course";
import { courseVideos } from "./courseVideo";

export const reducers = combineReducers({ courses, courseVideos});