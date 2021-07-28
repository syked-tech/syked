import { call, put, takeLatest, select } from 'redux-saga/effects';
import { Cookies } from 'react-cookie';
import { push } from 'connected-react-router';
import axios from 'axios';
import * as AuthSlice from 'containers/Auth/authSlice';
// import * as UserSlice from 'containers/Users/usersSlice';
import * as CONSTANTS from 'common/constants';
import * as API from 'common/api';
import {
  enqueueSnackbar as enqueueSnackbarAction,
  // closeSnackbar as closeSnackbarAction,
} from 'components/Notifier/actions';
// import { redirectSignin } from 'common/redirects';
// const hostname = window && window.location && window.location.hostname;

const cookies = new Cookies();

export function* signIn(actions) {
  const body = actions.payload;
  const options = {
    url: API.LOGIN_API,
    method: 'POST',
    data: JSON.stringify(body),
  };
  try {
    const authResponse = yield call(axios, options);
    if (authResponse?.data?.data?.AuthenticationResult?.IdToken) {
      const token = authResponse?.data?.data?.AuthenticationResult?.IdToken;
      const { exp } = JSON.parse(atob(token.split('.')[1]));
      const expires = new Date(exp * 1000);
      yield cookies.set(CONSTANTS.JWT_NAME, token, { path: '/', expires });
      yield put(AuthSlice.signInSuccess(authResponse?.data?.data));
      yield put(push(CONSTANTS.DASHBOARD_PAGE));
      yield put(
        enqueueSnackbarAction({
          message: 'Login successfully',
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'success',
            action: () => null,
          },
        }),
      );
    } else {
      const error = 'You have entered wrong credentials.';
      yield put(AuthSlice.signInFailed(error));
    }
  } catch (error) {
    yield put(AuthSlice.signInFailed(error.name));
  }
}

export function* socialLogin(actions) {
  const body = actions.payload;
  const options = {
    url: body.social_type === 'google' ? API.GOOGLE_LOGIN_API : API.FACEBOOK_LOGIN_API,
    method: 'POST',
    data: JSON.stringify(body),
  };
  try {
    // eslint-disable-next-line no-unused-vars
    const authResponse = yield call(axios, options);
    // console.log(authResponse);
  } catch (error) {
    // console.log(error.name);
    // console.log(error.message);
    yield put(AuthSlice.socialLoginFailed(error));
  }
}

export function* signUp(actions) {
  const body = actions.payload;
  const options = {
    url: API.SIGN_UP_API,
    method: 'POST',
    data: JSON.stringify({
      ...body,
      mobile_number: `+27${body.mobile_number}`,
    }),
  };
  try {
    const authResponse = yield call(axios, options);
    yield put(AuthSlice.signUpSuccess(authResponse.data));
    yield put(
      enqueueSnackbarAction({
        message: `Confirmation code successfully sent to ${body?.mobile_number}`,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: () => null,
        },
      }),
    );
  } catch (error) {
    yield put(AuthSlice.signUpFailed(error.name));
    yield put(
      enqueueSnackbarAction({
        message: error.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: () => null,
        },
      }),
    );
  }
}

export function* mobileVerify(actions) {
  const body = actions.payload;
  const options = {
    url: API.MOBILE_VERIFY_API,
    method: 'POST',
    data: JSON.stringify(body),
  };
  try {
    const authResponse = yield call(axios, options);
    if (authResponse?.data?.code === 'CodeMismatchException') {
      yield put(AuthSlice.mobileVerifyFailed(authResponse?.data?.message));
      yield put(
        enqueueSnackbarAction({
          message: authResponse?.data?.message,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'error',
            action: () => null,
          },
        }),
      );
    } else if (authResponse?.data?.code === 'ExpiredCodeException') {
      yield put(AuthSlice.mobileVerifyFailed(authResponse?.data?.message));
      yield put(
        enqueueSnackbarAction({
          message: authResponse?.data?.message,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'error',
            action: () => null,
          },
        }),
      );
    } else {
      yield put(AuthSlice.mobileVerifySuccess(authResponse.data));
      yield put(push(CONSTANTS.DISCLAIMER_PAGE));
    }
  } catch (error) {
    yield put(AuthSlice.mobileVerifyFailed(error.message));
    // yield put(
    //   enqueueSnackbarAction({
    //     message: error.message,
    //     options: {
    //       key: new Date().getTime() + Math.random(),
    //       variant: 'error',
    //       action: () => null,
    //     },
    //   }),
    // );
  }
}

export function* disclaimer() {
  const options = {
    url: API.DISCLAIMER_API,
    method: 'PUT',
    data: JSON.stringify({ agree: 'yes' }),
  };
  try {
    const authResponse = yield call(axios, options);
    // console.log(authResponse);
    yield put(AuthSlice.disclaimerSuccess(authResponse.data));
  } catch (error) {
    yield put(AuthSlice.disclaimerFailed(error.message));
    // yield put(
    //   enqueueSnackbarAction({
    //     message: error.message,
    //     options: {
    //       key: new Date().getTime() + Math.random(),
    //       variant: 'error',
    //       action: () => null,
    //     },
    //   }),
    // );
  }
}

export function* signOut() {
  try {
    const expires = new Date();
    yield cookies.remove(CONSTANTS.JWT_NAME, { path: '/', expires });
    yield put(AuthSlice.signOutSuccess());
    yield put(push(CONSTANTS.LOGIN_PAGE));
    yield put(
      enqueueSnackbarAction({
        message: 'Logout successfully',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: () => null,
        },
      }),
    );
  } catch (error) {
    yield put(AuthSlice.signOutFailed(error));
    yield put(
      enqueueSnackbarAction({
        message: error?.message,
        options: {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: () => null,
        },
      }),
    );
  }
}

export function* confirmSignUp(actions) {
  const { email, confirmationCode } = actions.payload;
  try {
    // eslint-disable-next-line no-undef
    const authResponse = yield Auth.confirmSignUp(email, confirmationCode);
    yield put(AuthSlice.confirmSignUpSuccess(authResponse));
    // yield put(push(CONSTANTS.SIGNIN));
    yield put(
      enqueueSnackbarAction({
        message: 'User confirmed successfully',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: () => null,
        },
      }),
    );
  } catch (error) {
    yield put(AuthSlice.confirmSignUpFailed(error));
    yield put(
      enqueueSnackbarAction({
        message: error.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: () => null,
        },
      }),
    );
  }
}

export function* loginSuccessSaga(data) {
  const { signInUserSession } = data;
  const { payload } = signInUserSession.idToken;

  switch (payload['cognito:groups'][0]) {
    case 'SuperAdmin': {
      // yield put(push(VERIFICATION_PAGE));

      return;
    }
    case 'Admin': {
      // const uri = `${redirectSignin(hostname)}/${payload.profile}${CONSTANTS.DASHBOARD}`;
      // yield put(push(`/r/${encodeURIComponent(uri)}`));

      return;
    }
    case 'Consultant': {
      // const uri = `${redirectSignin(hostname)}/${payload.profile}${CONSTANTS.DASHBOARD}`;
      // yield put(push(`/r/${encodeURIComponent(uri)}`));

      return;
    }
    // TODO: Error page, user
    default: {
      yield put(push(CONSTANTS.ROOT));
    }
  }
}

export function* forgotPassword(actions) {
  const options = {
    url: API.FORGOT_PASSWORD_API,
    method: 'POST',
    data: JSON.stringify(actions.payload),
  };
  try {
    const authResponse = yield call(axios, options);
    yield put(AuthSlice.forgotPasswordSuccess(authResponse));
  } catch (error) {
    yield put(AuthSlice.forgotPasswordFailed(error.message));
  }
}

export function* resetPassword(actions) {
  const options = {
    url: API.RESET_PASSWORD_API,
    method: 'POST',
    data: JSON.stringify(actions.payload),
  };
  try {
    const authResponse = yield call(axios, options);
    yield put(AuthSlice.resetPasswordSuccess(authResponse));
  } catch (error) {
    yield put(AuthSlice.resetPasswordFailed(error.message));
  }
}
export function* contactUs(actions) {
  const options = {
    url: API.CONTACT_US_API,
    method: 'POST',
    data: JSON.stringify(actions.payload),
  };
  try {
    const authResponse = yield call(axios, options);
    yield put(AuthSlice.contactUsSuccess(authResponse));
  } catch (error) {
    yield put(AuthSlice.contactUsFailed(error.message));
  }
}

export function* confirmPassword(actions) {
  const { Username, SessionCode, NewPassword } = actions.payload;
  try {
    // eslint-disable-next-line no-undef
    const authResponse = yield Auth.forgotPasswordSubmit(Username, SessionCode, NewPassword);
    yield put(AuthSlice.resetPasswordSuccess(authResponse));
    // yield put(push(CONSTANTS.SIGNIN));
    yield put(
      enqueueSnackbarAction({
        message: 'Password changed successfully',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: () => null,
        },
      }),
    );
  } catch (error) {
    yield put(AuthSlice.confirmPasswordFailed(error));
    yield put(
      enqueueSnackbarAction({
        message: error.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: () => null,
        },
      }),
    );
  }
}

export function* changePassword(actions) {
  // console.log(actions);
  const { OldPassword, NewPassword, isAccount } = actions.payload;
  try {
    // eslint-disable-next-line no-undef
    const user = yield Auth.currentAuthenticatedUser();
    // eslint-disable-next-line no-undef
    const authResponse = yield Auth.changePassword(user, OldPassword, NewPassword);
    yield put(AuthSlice.changePasswordSuccess(authResponse));
    if (!isAccount) {
      // yield put(push(CONSTANTS.SIGNIN));
    }
    yield put(
      enqueueSnackbarAction({
        message: 'Password changed successfully',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: () => null,
        },
      }),
    );
  } catch (error) {
    yield put(AuthSlice.changePasswordFailed(error));
    yield put(
      enqueueSnackbarAction({
        message: error.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: () => null,
        },
      }),
    );
  }
}

export function* updateUserAttributes(actions) {
  const { idToken } = yield select(AuthSlice.selectUserSession);
  const username = actions.payload['cognito:username'];
  // console.log(attributes);

  const options = {
    url: `${API.USERS_API}/${username}`,
    method: 'put',
    headers: {
      Authorization: idToken.jwtToken,
    },
    data: actions.payload,
  };

  try {
    const authResponse = yield call(axios, options);
    // console.log(authResponse);
    // const user = yield Auth.currentAuthenticatedUser();
    // const authResponse = yield Auth.updateUserAttributes(user, {
    //   name,
    //   family_name,
    // });
    // const currentSession = yield Auth.currentSession();
    // yield put(AuthSlice.userSession(currentSession));
    yield put(AuthSlice.updateUserAttributesSuccess(authResponse));
    yield put(
      enqueueSnackbarAction({
        message: 'Account updated successfully',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: () => null,
        },
      }),
    );
  } catch (error) {
    yield put(AuthSlice.updateUserAttributesFailed(error));
    yield put(
      enqueueSnackbarAction({
        message: error.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: () => null,
        },
      }),
    );
  }
}

export function* validateInvite(actions) {
  const options = {
    url: API.VALIDATE_USER_INVITE_API,
    method: 'post',
    data: actions.payload,
  };
  try {
    const authResponse = yield call(axios, options);
    yield put(AuthSlice.validateInviteSuccess(authResponse.data.data));
    // yield put(push(CONSTANTS.CUSTOMERS));
    yield put(
      enqueueSnackbarAction({
        message: authResponse.data.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: () => null,
        },
      }),
    );
  } catch (error) {
    yield put(AuthSlice.validateInviteFailed(error));
    yield put(
      enqueueSnackbarAction({
        message: error.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: () => null,
        },
      }),
    );
  }
}

export function* deactivateUser(actions) {
  const { idToken } = yield select(AuthSlice.selectUserSession);
  const { Username } = actions.payload;
  const options = {
    url: `${API.USERS_API}/${Username}/deactivate`,
    method: 'delete',
    headers: {
      Authorization: idToken.jwtToken,
    },
  };
  try {
    const authResponse = yield call(axios, options);
    yield put(AuthSlice.deactivateUserSuccess(authResponse.data.data));
    yield put(
      enqueueSnackbarAction({
        message: authResponse.data.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: () => null,
        },
      }),
    );
    // yield put(UserSlice.retrieveUsers({ customerid }));
  } catch (error) {
    yield put(AuthSlice.deactivateUserFailed(error));
    yield put(
      enqueueSnackbarAction({
        message: error.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: () => null,
        },
      }),
    );
  }
}

export default function* userSaga() {
  yield takeLatest(AuthSlice.signIn.type, signIn);
  yield takeLatest(AuthSlice.socialLogin.type, socialLogin);
  yield takeLatest(AuthSlice.signOut.type, signOut);
  yield takeLatest(AuthSlice.signUp.type, signUp);
  yield takeLatest(AuthSlice.mobileVerify.type, mobileVerify);
  yield takeLatest(AuthSlice.disclaimer.type, disclaimer);
  yield takeLatest(AuthSlice.contactUs.type, contactUs);
  yield takeLatest(AuthSlice.confirmSignUp.type, confirmSignUp);
  yield takeLatest(AuthSlice.forgotPassword.type, forgotPassword);
  yield takeLatest(AuthSlice.resetPassword.type, resetPassword);
  yield takeLatest(AuthSlice.confirmPassword.type, confirmPassword);
  yield takeLatest(AuthSlice.changePassword.type, changePassword);
  yield takeLatest(AuthSlice.validateInvite.type, validateInvite);
  yield takeLatest(AuthSlice.updateUserAttributes.type, updateUserAttributes);
  yield takeLatest(AuthSlice.deactivateUser.type, deactivateUser);
}
