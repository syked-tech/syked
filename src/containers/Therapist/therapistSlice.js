/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const therapistSlice = createSlice({
  name: 'therapist',
  initialState: {
    therapists: [],
    isLoadingTherapists: false,
    preferredTherapists: [],
    isLoadingPreferredTherapists: false,
    therapist: {},
    isLoadingTherapist: false,
    reviews: [],
    isLoadingReviews: false,
    questions: [],
    isLoadingQuestions: false,
    schedule: [],
    isLoadingSchedule: false,
  },
  reducers: {
    getTherapists: (state) => {
      state.isLoadingTherapists = true;
    },
    getTherapistsSuccess: (state, action) => {
      state.isLoadingTherapists = false;
      state.therapists = action.payload;
    },
    getTherapistsInFailed: (state) => {
      state.isLoadingTherapists = false;
    },
    getTherapistsByScore: (state) => {
      state.isLoadingPreferredTherapists = true;
    },
    getTherapistsByScoreSuccess: (state, action) => {
      state.isLoadingPreferredTherapists = false;
      state.preferredTherapists = action.payload;
    },
    getTherapistsByScoreInFailed: (state) => {
      state.isLoadingPreferredTherapists = false;
    },
    getTherapist: (state) => {
      state.isLoadingTherapist = true;
    },
    getTherapistSuccess: (state, action) => {
      state.isLoadingTherapist = false;
      state.therapist = action.payload;
    },
    getTherapistInFailed: (state) => {
      state.isLoadingTherapist = false;
    },
    getReviews: (state) => {
      state.isLoadingReviews = true;
    },
    getReviewsSuccess: (state, action) => {
      state.isLoadingReviews = false;
      state.reviews = action.payload;
    },
    getReviewsInFailed: (state) => {
      state.isLoadingReviews = false;
    },
    getQuestions: (state) => {
      state.isLoadingQuestions = true;
    },
    getQuestionsSuccess: (state, action) => {
      state.isLoadingQuestions = false;
      state.questions = action.payload;
    },
    getQuestionsInFailed: (state) => {
      state.isLoadingQuestions = false;
    },
    getSchedule: (state) => {
      state.isLoadingSchedule = true;
    },
    getScheduleSuccess: (state, action) => {
      state.isLoadingSchedule = false;
      state.schedule = action.payload;
    },
    getScheduleInFailed: (state) => {
      state.isLoadingSchedule = false;
    },
  },
});

export const {
  getTherapists,
  getTherapistsSuccess,
  getTherapistsInFailed,
  getTherapistsByScore,
  getTherapistsByScoreSuccess,
  getTherapistsByScoreInFailed,
  getTherapist,
  getTherapistSuccess,
  getTherapistInFailed,
  getReviews,
  getReviewsSuccess,
  getReviewsInFailed,
  getQuestions,
  getQuestionsSuccess,
  getQuestionsInFailed,
  getSchedule,
  getScheduleSuccess,
  getScheduleInFailed,
} = therapistSlice.actions;

export const selectTherapists = (state) => state.therapist.therapists;
export const isLoadingTherapists = (state) => state.therapist.isLoadingTherapists;
export const selectPreferredTherapists = (state) => state.therapist.preferredTherapists;
export const isLoadingPreferredTherapists = (state) => state.therapist.isLoadingPreferredTherapists;
export const selectTherapist = (state) => state.therapist.therapist;
export const isLoadingTherapist = (state) => state.therapist.isLoadingTherapist;
export const selectReviews = (state) => state.therapist.reviews;
export const isLoadingReviews = (state) => state.therapist.isLoadingReviews;
export const selectQuestions = (state) => state.therapist.questions;
export const isLoadingQuestions = (state) => state.therapist.isLoadingQuestions;
export const selectSchedule = (state) => state.therapist.schedule;
export const isLoadingSchedule = (state) => state.therapist.isLoadingSchedule;

export default therapistSlice.reducer;
