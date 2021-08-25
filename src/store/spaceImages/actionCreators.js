import { API_URL } from "../../Component/constants"
import { REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS } from "./actionTypes"

const getImagesPending = () => ({
    type: REQUEST_PENDING
})
const getImagesSuccess = (images) => ({
    type: REQUEST_SUCCESS,
    payload: images,
})
const getImagesError = (error) => ({
    type: REQUEST_ERROR,
    payload: error,
})
export const getImages = () => async (dispatch) => {
    dispatch(getImagesPending());

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Request failed': ${response.status}`)
        }
        const result = await response.json();
        dispatch(getImagesSuccess(result))
    } catch (error) {
        dispatch(getImagesError(error.message))
    } 
}