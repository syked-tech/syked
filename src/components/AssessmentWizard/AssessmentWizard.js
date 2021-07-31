/* eslint-disable no-shadow */
/* eslint-disable react/static-property-placement */
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.any,
    children: PropTypes.any,
  };

  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }

  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }));

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[this.state.page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  // eslint-disable-next-line consistent-return
  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    }
    this.next(values);
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form initialValues={values} validate={this.validate} onSubmit={this.handleSubmit}>
        {({ handleSubmit, submitting }) => (
          <form className="booking_prefer" onSubmit={handleSubmit}>
            {activePage}
            <div>
              {page > 0 && (
                <button
                  type="button"
                  className="btn btn-theme mr-2 btn-f-prev"
                  onClick={this.previous}>
                  Back
                </button>
              )}
              {!isLastPage && (
                <button type="submit" className="btn btn-theme btn-f-next">
                  Next
                </button>
              )}
              {isLastPage && (
                <button
                  type="submit"
                  className="btn btn-theme mr-2 btn-f-next"
                  disabled={submitting}>
                  Continue
                </button>
              )}
            </div>
          </form>
        )}
      </Form>
    );
  }
}
