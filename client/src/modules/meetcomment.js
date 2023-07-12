import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as meetsAPI from "../lib/api/meet";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE_COMMENT = "meetcomment/INITIALIZE_COMMENT";
const [READ_MEETCOMMENT, READ_MEETCOMMENT_SUCCESS, READ_MEETCOMMENT_FAILURE] =
  createRequestActionTypes("meetcomment/READ_MEETCOMMENT");
const UNLOAD_MEETCOMMENT = "meetcomment/UNLOAD_MEETCOMMENT";
const CHANGE_COMMENT_FIELD = "meetcomment/CHANGE_COMMENT_FIELD";
const [
  WRITE_MEETCOMMENT,
  WRITE_MEETCOMMENT_SUCCESS,
  WRITE_MEETCOMMENT_FAILURE,
] = createRequestActionTypes("meetcomment/WRITE_MEETCOMMENT");
const [
  REMOVE_MEETCOMMENT,
  REMOVE_MEETCOMMENT_SUCCESS,
  REMOVE_MEETCOMMENT_FAILURE,
] = createRequestActionTypes("meetcomment/REMOVE_MEETCOMMENT");

export const initializeComment = createAction(INITIALIZE_COMMENT);
export const readMeetComment = createAction(
  READ_MEETCOMMENT,
  (meetboardNum) => meetboardNum
);
export const unloadComment = createAction(UNLOAD_MEETCOMMENT);
export const changeCommentField = createAction(
  CHANGE_COMMENT_FIELD,
  ({ userId, body, meetboard_Num }) => ({
    userId,
    body,
    meetboard_Num,
  })
);
export const writeMeetComment = createAction(
  WRITE_MEETCOMMENT,
  ({ userId, meetboard_Num, body }) => ({
    userId,
    meetboard_Num,
    body,
  })
);
export const removeMeetComment = createAction(
  REMOVE_MEETCOMMENT,
  ({ meetcommentNum, meetboardNum }) => ({ meetcommentNum, meetboardNum })
);

const readMeetCommentSaga = createRequestSaga(
  READ_MEETCOMMENT,
  meetsAPI.readComment
);
const writeMeetCommentSaga = createRequestSaga(
  WRITE_MEETCOMMENT,
  meetsAPI.writeMeetComment
);
const removeMeetCommentSaga = createRequestSaga(
  REMOVE_MEETCOMMENT,
  meetsAPI.removeMeetComment
);

export function* meetCommentSaga() {
  yield takeLatest(READ_MEETCOMMENT, readMeetCommentSaga);
  yield takeLatest(WRITE_MEETCOMMENT, writeMeetCommentSaga);
  yield takeLatest(REMOVE_MEETCOMMENT, removeMeetCommentSaga);
}

const initialState = {
  meetboardNum: null,
  comments: null,
  error: null,
  write: {
    userId: "",
    body: "",
    meetboard_Num: "",
    comment: null,
    commentError: null,
    originalCommentNum: null,
  },
};

const meetcomment = handleActions(
  {
    [INITIALIZE_COMMENT]: (state) => ({
      ...state,
      write: initialState.write,
    }),
    [READ_MEETCOMMENT_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      meetboardNum: comments.meetboard_Num,
      comments: comments.comment,
    }),
    [READ_MEETCOMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_MEETCOMMENT]: () => initialState,
    [CHANGE_COMMENT_FIELD]: (
      state,
      { payload: { userId, body, meetboard_Num } }
    ) => ({
      ...state,
      write: {
        ...state.write,
        userId,
        body,
        meetboard_Num,
      },
    }),
    [WRITE_MEETCOMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      write: {
        ...state.write,
        comment,
      },
    }),
    [WRITE_MEETCOMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      write: {
        ...state.write,
        commentError,
      },
    }),
    [REMOVE_MEETCOMMENT_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      meetboardNum: comments.meetboardNum,
      comments: comments.comment,
    }),
    [REMOVE_MEETCOMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default meetcomment;
