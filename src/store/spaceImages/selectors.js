import { REQUEST_STATUS } from "../../Component/constants";

export const selectImages = (state) => state.images.data;

export const selectImagesLoading = (state) => state.images.request.status === REQUEST_STATUS.PENDING;

export const selectImagesError = (state) => state.images.request.error;