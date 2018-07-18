    // src/js/actions/index.js
    import { ADD_IMAGES,REMOVE_IMAGE,REMOVE_THREAD } from "../constants/action-types";

    export const addImage = image => (
        { type: ADD_IMAGES, payload: image }
    );
    export const removeImage = imageUrl => ({ type: REMOVE_IMAGE, payload: imageUrl });
    export const removeThread = thread => ({ type: REMOVE_THREAD, payload: thread });