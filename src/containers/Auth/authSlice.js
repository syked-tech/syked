/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userSession: {},
    user: {},
    error: null,
    isLoadingSignIn: false,
    isLoadingSignUp: false,
    isAuthenticated: false,
    isLoadingForgotPassword: false,
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
      state.error = null;
    },
    signInSuccess: (state) => {
      state.isLoadingSignIn = false;
      state.isAuthenticated = true;
      state.error = null;
    },
    signInFailed: (state, action) => {
      state.isLoadingSignIn = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    socialLogin: (state) => {
      state.isLoadingSignIn = true;
      state.error = null;
    },
    socialLoginSuccess: (state) => {
      state.isLoadingSignIn = false;
      state.isAuthenticated = true;
      state.error = null;
    },
    socialLoginFailed: (state) => {
      state.isLoadingSignIn = false;
      state.isAuthenticated = false;
      // state.error = action.payload;
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
    resetError: (state) => {
      state.error = null;
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
    forgotPassword: (state) => {
      state.isLoadingForgotPassword = true;
      state.error = null;
    },
    forgotPasswordSuccess: (state) => {
      state.isLoadingForgotPassword = false;
      state.error = null;
    },
    forgotPasswordFailed: (state, action) => {
      state.isLoadingForgotPassword = false;
      state.error = action.payload;
    },
    resetPassword: (state) => {
      state.isLoadingResetPassword = true;
      state.error = null;
    },
    resetPasswordSuccess: (state) => {
      state.isLoadingResetPassword = false;
      state.error = null;
    },
    resetPasswordFailed: (state, action) => {
      state.isLoadingResetPassword = false;
      state.error = action.payload;
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
  socialLogin,
  socialLoginSuccess,
  socialLoginFailed,
  signOut,
  signOutSuccess,
  signOutFailed,
  userSession,
  userHasAuthenticated,
  resetError,
  signUp,
  signUpSuccess,
  signUpFailed,
  confirmSignUp,
  confirmSignUpSuccess,
  confirmSignUpFailed,
  forgotPassword,
  forgotPasswordSuccess,
  forgotPasswordFailed,
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
export const selectError = (state) => state.auth.error;
export const isLoadingSignIn = (state) => state.auth.isLoadingSignIn;
export const isLoadingSignUp = (state) => state.auth.isLoadingSignUp;
export const isLoadingConfirmSignUp = (state) => state.auth.isLoadingConfirmSignUp;
export const isLoadingForgotPassword = (state) => state.auth.isLoadingForgotPassword;
export const isLoadingResetPassword = (state) => state.auth.isLoadingResetPassword;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const isLoadingConfirmPassword = (state) => state.auth.isLoadingConfirmPassword;
export const isLoadingChangePassword = (state) => state.auth.isLoadingChangePassword;
export const isLoadingCompleteNewPassword = (state) => state.auth.isLoadingCompleteNewPassword;
export const isLoadingvalidatingInvite = (state) => state.auth.isLoadingvalidatingInvite;
export const isUpdatingUserAttributes = (state) => state.auth.isUpdatingUserAttributes;
export const isDeactivatingUser = (state) => state.auth.isDeactivatingUser;

export default authSlice.reducer;
