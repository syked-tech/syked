/* eslint-disable no-dupe-keys */
import { withStyles } from '@material-ui/core';

const styles = () => ({
  '@global': {
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      fontFamily: `'Avenir roman', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      backgroundColor: '#ffffff',
      fontWeight: 400,
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
