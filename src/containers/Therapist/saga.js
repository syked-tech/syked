import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as therapistSlice from 'containers/Therapist/therapistSlice';
import * as API from 'common/api';

export function* getTherapists() {
  try {
    const response = yield call(axios, API.THERAPIST_LIST_API);
    yield put(therapistSlice.getTherapistsSuccess(response?.data?.data?.result || []));
  } catch (error) {
    yield put(therapistSlice.getTherapistsInFailed(error));
  }
}

export function* getTherapist(actions) {
  const { id } = actions.payload;
  try {
    const response = yield call(axios, `${API.THERAPIST_DETAILS_API}/${id}`);
    yield put(therapistSlice.getTherapistSuccess(response?.data?.data?.result || []));
  } catch (error) {
    yield put(therapistSlice.getTherapistInFailed(error));
  }
}

export function* getSchedule(actions) {
  const { id } = actions.payload;
  try {
    const response = yield call(axios, `${API.THERAPIST_DETAILS_API}/${id}`);
    yield put(therapistSlice.getScheduleSuccess(response?.data?.data?.result || []));
  } catch (error) {
    yield put(therapistSlice.getScheduleInFailed(error));
  }
}

export function* getTherapistsByScore(actions) {
  const { score } = actions.payload;
  try {
    const response = yield call(axios, `${API.THERAPIST_SCORE_API}${score}`);
    yield put(therapistSlice.getTherapistsByScore(response?.data?.data?.result || []));
  } catch (error) {
    yield put(therapistSlice.getTherapistsByScoreInFailed(error));
  }
}

export function* getReviews() {
  try {
    const response = yield call(axios, API.REVIEWS_API);
    yield put(therapistSlice.getReviewsSuccess(response?.data?.data?.result || []));
  } catch (error) {
    yield put(therapistSlice.getReviewsInFailed(error));
  }
}

export function* getQuestions() {
  try {
    const response = yield call(axios, API.QUESTIONS_API);
    yield put(therapistSlice.getQuestionsSuccess(response?.data?.data?.result || []));
  } catch (error) {
    yield put(therapistSlice.getQuestionsInFailed(error));
  }
}

export default function* therapistSaga() {
  yield takeLatest(therapistSlice.getTherapists.type, getTherapists);
  yield takeLatest(therapistSlice.getTherapist.type, getTherapist);
  yield takeLatest(therapistSlice.getReviews.type, getReviews);
  yield takeLatest(therapistSlice.getQuestions.type, getQuestions);
  yield takeLatest(therapistSlice.getTherapistsByScore.type, getTherapistsByScore);
  yield takeLatest(therapistSlice.getSchedule.type, getSchedule);
}
