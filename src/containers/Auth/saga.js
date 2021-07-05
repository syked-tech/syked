import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import * as AuthSlice from 'containers/Auth/authSlice';
// import * as UserSlice from 'containers/Users/usersSlice';
import * as ROUTES from 'common/constants';
import * as API from 'common/api';
import {
  enqueueSnackbar as enqueueSnackbarAction,
  // closeSnackbar as closeSnackbarAction,
} from 'components/Notifier/actions';
// import { redirectSignin } from 'common/redirects';

// const hostname = window && window.location && window.location.hostname;

export function* signIn(actions) {
  const { Username, Password } = actions.payload;
  try {
    // eslint-disable-next-line no-undef
    const authResponse = yield Auth.signIn(Username, Password);
    // yield put(AuthSlice.signInSuccess(authResponse));

    const { challengeName } = authResponse;
    switch (challengeName && challengeName.value) {
      case 'NEW_PASSWORD_REQUIRED': {
        // yield put(push(`/change/${encodeURIComponent(Username)}`));
        return;
      }
      default: {
        yield call(loginSuccessSaga, authResponse);
        yield put(
          enqueueSnackbarAction({
            message: 'Signed in successfully',
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'success',
              action: () => null,
            },
          }),
        );
      }
    }
  } catch (error) {
    yield put(AuthSlice.signInFailed(error));
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

export function* signUp(actions) {
  const { name, surname, email, password } = actions.payload;
  try {
    // eslint-disable-next-line no-undef
    const authResponse = yield Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        name,
        family_name: surname,
        profile: 'test-profile',
        preferred_username: 'test-profile',
      },
    });
    yield put(AuthSlice.signUpSuccess(authResponse));
    yield put(push(`${ROUTES.SIGNUP}/${encodeURIComponent(email)}`));
    yield put(
      enqueueSnackbarAction({
        message: `Confirmation email successfully sent to ${email}`,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: () => null,
        },
      }),
    );
  } catch (error) {
    yield put(AuthSlice.signUpFailed(error));
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

export function* confirmSignUp(actions) {
  const { email, confirmationCode } = actions.payload;
  try {
    // eslint-disable-next-line no-undef
    const authResponse = yield Auth.confirmSignUp(email, confirmationCode);
    yield put(AuthSlice.confirmSignUpSuccess(authResponse));
    yield put(push(ROUTES.SIGNIN));
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
      // yield put(push(`/r/${encodeURIComponent(redirectSignin(hostname))}`));

      return;
    }
    case 'Admin': {
      // const uri = `${redirectSignin(hostname)}/${payload.profile}${ROUTES.DASHBOARD}`;
      // yield put(push(`/r/${encodeURIComponent(uri)}`));

      return;
    }
    case 'Consultant': {
      // const uri = `${redirectSignin(hostname)}/${payload.profile}${ROUTES.DASHBOARD}`;
      // yield put(push(`/r/${encodeURIComponent(uri)}`));

      return;
    }
    // TODO: Error page, user
    default: {
      yield put(push(ROUTES.ROOT));
    }
  }
}

export function* resetPassword(actions) {
  const { Username } = actions.payload;
  try {
    // eslint-disable-next-line no-undef
    const authResponse = yield Auth.forgotPassword(Username);
    yield put(AuthSlice.resetPasswordSuccess(authResponse));
    yield put(push(`${ROUTES.FORGOT_PASSWORD}/${encodeURIComponent(Username)}`));
  } catch (error) {
    yield put(AuthSlice.resetPasswordFailed(error));
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

export function* confirmPassword(actions) {
  const { Username, SessionCode, NewPassword } = actions.payload;
  try {
    // eslint-disable-next-line no-undef
    const authResponse = yield Auth.forgotPasswordSubmit(Username, SessionCode, NewPassword);
    yield put(AuthSlice.resetPasswordSuccess(authResponse));
    yield put(push(ROUTES.SIGNIN));
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
      yield put(push(ROUTES.SIGNIN));
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
    // yield put(push(ROUTES.CUSTOMERS));
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
  yield takeLatest(AuthSlice.signUp.type, signUp);
  yield takeLatest(AuthSlice.confirmSignUp.type, confirmSignUp);
  yield takeLatest(AuthSlice.resetPassword.type, resetPassword);
  yield takeLatest(AuthSlice.confirmPassword.type, confirmPassword);
  yield takeLatest(AuthSlice.changePassword.type, changePassword);
  yield takeLatest(AuthSlice.validateInvite.type, validateInvite);
  yield takeLatest(AuthSlice.updateUserAttributes.type, updateUserAttributes);
  yield takeLatest(AuthSlice.deactivateUser.type, deactivateUser);
}
