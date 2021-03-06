import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ConnectedRouter } from 'connected-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CookiesProvider } from 'react-cookie';
import { store } from 'common/store';
import history from 'common/history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        preventDuplicate
        hideIconVariant
        dense
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <CookiesProvider>
          <ConnectedRouter history={history}>
            <CssBaseline />
            <GlobalStyles />
            <App />
          </ConnectedRouter>
        </CookiesProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
