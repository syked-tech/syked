/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import { SnackbarProvider } from 'notistack';
// import { selectCustomerTheme } from 'containers/Customers/customerSlice';
import App from './App';
import history from './common/history';
// import theme from './theme';
// const customerTheme = useSelector(selectCustomerTheme);
// const customTheme = createMuiTheme(customerTheme);

const AppTheme = () => <App />;

export default AppTheme;
