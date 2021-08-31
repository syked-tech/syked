import React from 'react';
import { useSelector } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';

export default function OrderSucces() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className="wrapper pb-5 top-margin inner_wrap">
        <section className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>Order success</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
