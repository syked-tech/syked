/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userSession: {},
    user: {},
    isLoadingSignIn: false,
    isLoadingSignUp: false,
    isAuthenticated: false,
    isLoadingResetPassword: false,
    isLoadingConfirmPassword: false,
    isLoadingChangePassword: false,
    isLoadingCompleteNewPassword: false,
    isLoadingvalidatingInvite: false,
    isUpdatingUserAttributes: false,
    isDeactivatingUser: false,
  },
  reducers: {
    signIn: (state) => {
      state.isLoadingSignIn = true;
    },
    signInSuccess: (state) => {
      state.isLoadingSignIn = false;
      state.isAuthenticated = true;
    },
    signInFailed: (state) => {
      state.isLoadingSignIn = false;
      state.isAuthenticated = false;
    },
    signOut: (state) => {
      state.isLoadingsignOut = true;
    },
    signOutSuccess: (state) => {
      state.isLoadingsignOut = false;
      state.isAuthenticated = false;
    },
    signOutFailed: (state) => {
      state.isLoadingsignOut = false;
      state.isAuthenticated = false;
    },
    userHasAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    userSession: (state, action) => {
      state.userSession = action.payload;
      // state.user = action.payload.idToken.payload;
    },
    signUp: (state) => {
      state.isLoadingSignUp = true;
    },
    signUpSuccess: (state) => {
      state.isLoadingSignUp = false;
    },
    signUpFailed: (state) => {
      state.isLoadingSignUp = false;
    },
    confirmSignUp: (state) => {
      state.isLoadingConfirmSignUp = true;
    },
    confirmSignUpSuccess: (state) => {
      state.isLoadingConfirmSignUp = false;
    },
    confirmSignUpFailed: (state) => {
      state.isLoadingConfirmSignUp = false;
    },
    resetPassword: (state) => {
      state.isLoadingResetPassword = true;
    },
    resetPasswordSuccess: (state) => {
      state.isLoadingResetPassword = false;
    },
    resetPasswordFailed: (state) => {
      state.isLoadingResetPassword = false;
    },
    confirmPassword: (state) => {
      state.isLoadingConfirmPassword = true;
    },
    confirmPasswordSuccess: (state) => {
      state.isLoadingConfirmPassword = false;
    },
    confirmPasswordFailed: (state) => {
      state.isLoadingConfirmPassword = false;
    },
    changePassword: (state) => {
      state.isLoadingChangePassword = true;
    },
    changePasswordSuccess: (state) => {
      state.isLoadingChangePassword = false;
    },
    changePasswordFailed: (state) => {
      state.isLoadingChangePassword = false;
    },
    completeNewPassword: (state) => {
      state.isLoadingCompleteNewPassword = true;
    },
    completeNewPasswordSuccess: (state) => {
      state.isLoadingCompleteNewPassword = false;
    },
    completeNewPasswordFailed: (state) => {
      state.isLoadingCompleteNewPassword = false;
    },
    validateInvite: (state) => {
      state.isLoadingvalidatingInvite = true;
    },
    validateInviteSuccess: (state) => {
      state.isLoadingvalidatingInvite = false;
    },
    validateInviteFailed: (state) => {
      state.isLoadingvalidatingInvite = false;
    },
    updateUserAttributes: (state) => {
      state.isUpdatingUserAttributes = true;
    },
    updateUserAttributesSuccess: (state) => {
      state.isUpdatingUserAttributes = false;
    },
    updateUserAttributesFailed: (state) => {
      state.isUpdatingUserAttributes = false;
    },
    deactivateUser: (state) => {
      state.isDeactivatingUser = true;
    },
    deactivateUserSuccess: (state) => {
      state.isDeactivatingUser = false;
    },
    deactivateUserFailed: (state) => {
      state.isDeactivatingUser = false;
    },
  },
});

export const {
  signIn,
  signInSuccess,
  signInFailed,
  signOut,
  signOutSuccess,
  signOutFailed,
  userSession,
  userHasAuthenticated,
  signUp,
  signUpSuccess,
  signUpFailed,
  confirmSignUp,
  confirmSignUpSuccess,
  confirmSignUpFailed,
  resetPassword,
  resetPasswordSuccess,
  resetPasswordFailed,
  changePassword,
  changePasswordSuccess,
  changePasswordFailed,
  confirmPassword,
  confirmPasswordSuccess,
  confirmPasswordFailed,
  completeNewPassword,
  completeNewPasswordSuccess,
  completeNewPasswordFailed,
  validateInvite,
  validateInviteSuccess,
  validateInviteFailed,
  updateUserAttributes,
  updateUserAttributesSuccess,
  updateUserAttributesFailed,
  deactivateUser,
  deactivateUserSuccess,
  deactivateUserFailed,
} = authSlice.actions;

export const selectUserSession = (state) => state.auth.userSession;
export const selectUser = (state) => state.auth.user;
export const isLoadingSignIn = (state) => state.auth.isLoadingSignIn;
export const isLoadingSignUp = (state) => state.auth.isLoadingSignUp;
export const isLoadingConfirmSignUp = (state) => state.auth.isLoadingConfirmSignUp;
export const isLoadingResetPassword = (state) => state.auth.isLoadingResetPassword;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const isLoadingConfirmPassword = (state) => state.auth.isLoadingConfirmPassword;
export const isLoadingChangePassword = (state) => state.auth.isLoadingChangePassword;
export const isLoadingCompleteNewPassword = (state) => state.auth.isLoadingCompleteNewPassword;
export const isLoadingvalidatingInvite = (state) => state.auth.isLoadingvalidatingInvite;
export const isUpdatingUserAttributes = (state) => state.auth.isUpdatingUserAttributes;
export const isDeactivatingUser = (state) => state.auth.isDeactivatingUser;

export default authSlice.reducer;
