import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import history from 'common/history';
import { apiMiddleware } from 'redux-api-middleware';
import notifications from 'components/Notifier/reducer';
import finalForm from 'common/util/finalFormDuck';
import authReducer from 'containers/Auth/authSlice';
import therapistReducer from 'containers/Therapist/therapistSlice';
// import customerReducer from 'containers/Customers/customerSlice';
// import policiesReducer from 'containers/Policies/policiesSlice';
// import usersReducer from 'containers/Users/usersSlice';
import authSaga from 'containers/Auth/saga';
import therapistSaga from 'containers/Therapist/saga';
// import customerSaga from 'containers/Customers/saga';
// import policiesSaga from 'containers/Policies/saga';
// import userSaga from 'containers/Users/saga';

const sagaMiddleware = createSagaMiddleware();
const router = routerMiddleware(history);

const rootReducer = combineReducers({
  finalForm,
  notifier: notifications,
  auth: authReducer,
  therapist: therapistReducer,
  // customer: customerReducer,
  // policy: policiesReducer,
  // user: usersReducer,
  router: connectRouter(history),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, apiMiddleware, router],
});

sagaMiddleware.run(authSaga);
sagaMiddleware.run(therapistSaga);
// sagaMiddleware.run(policiesSaga);
// sagaMiddleware.run(userSaga);

export default store;
