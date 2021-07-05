/* eslint-disable no-dupe-keys */
import { withStyles } from '@material-ui/core';

const styles = () => ({
  '@global': {
    body: {
      fontFamily: `'Avenir roman', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    },

    '@font-face': {
      fontFamily: 'Avenir medium',
      src: `url('assets/fonts/AvenirLTStd-Medium.eot'),
            url('assets/fonts/AvenirLTStd-Medium.eot?#iefix') format('embedded-opentype'),
            url('assets/fonts/AvenirLTStd-Medium.woff2') format('woff2'),
            url('assets/fonts/AvenirLTStd-Medium.woff') format('woff'),
            url('assets/fonts/AvenirLTStd-Medium.ttf') format('truetype'),
            url('assets/fonts/AvenirLTStd-Medium.svg#AvenirLTStd-Medium') format('svg')`,
      fontWeight: 500,
      fontStyle: 'normal',
    },

    '@font-face': {
      fontFamily: 'Avenir roman',
      src: `url('assets/fonts/AvenirLTStd-Roman.eot'),
            url('assets/fonts/AvenirLTStd-Roman.eot?#iefix') format('embedded-opentype'),
            url('assets/fonts/AvenirLTStd-Roman.woff2') format('woff2'),
            url('assets/fonts/AvenirLTStd-Roman.woff') format('woff'),
            url('assets/fonts/AvenirLTStd-Roman.ttf') format('truetype'),
            url('assets/fonts/AvenirLTStd-Roman.svg#AvenirLTStd-Roman') format('svg')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },

    '@font-face': {
      fontFamily: 'Avenir book',
      src: `url('assets/fonts/AvenirLTStd-Book.eot'),
            url('assets/fonts/AvenirLTStd-Book.eot?#iefix') format('embedded-opentype'),
            url('assets/fonts/AvenirLTStd-Book.woff2') format('woff2'),
            url('assets/fonts/AvenirLTStd-Book.woff') format('woff'),
            url('assets/fonts/AvenirLTStd-Book.ttf') format('truetype'),
            url('assets/fonts/AvenirLTStd-Book.svg#AvenirLTStd-Book') format('svg')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },

    '@font-face': {
      fontFamily: 'Avenir light',
      src: `url('assets/fonts/AvenirLTStd-Light.eot'),
            url('assets/fonts/AvenirLTStd-Light.eot?#iefix') format('embedded-opentype'),
            url('assets/fonts/AvenirLTStd-Light.woff2') format('woff2'),
            url('assets/fonts/AvenirLTStd-Light.woff') format('woff'),
            url('assets/fonts/AvenirLTStd-Light.ttf') format('truetype'),
            url('assets/fonts/AvenirLTStd-Light.svg#AvenirLTStd-Light') format('svg')`,
      fontWeight: 300,
      fontStyle: 'normal',
    },

    '@font-face': {
      fontFamily: 'Avenir black',
      src: `url('assets/fonts/AvenirLTStd-Black.eot'),
            url('assets/fonts/AvenirLTStd-Black.eot?#iefix') format('embedded-opentype'),
            url('assets/fonts/AvenirLTStd-Black.woff2') format('woff2'),
            url('assets/fonts/AvenirLTStd-Black.woff') format('woff'),
            url('assets/fonts/AvenirLTStd-Black.ttf') format('truetype'),
            url('assets/fonts/AvenirLTStd-Black.svg#AvenirLTStd-Black') format('svg')`,
      fontWeight: 900,
      fontStyle: 'normal',
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
