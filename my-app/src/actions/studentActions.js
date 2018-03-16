import StudentApi from '../api/StudentApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadStudentsSuccess(students) {
    return {type: types.LOAD_STUDENTS_SUCCESS, students};
}

export function loadStudents() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return StudentApi.getAllStudents().then(students => {
            dispatch(loadStudentsSuccess(students));
        }).catch(error => {
            throw(error);
        });
    }
}