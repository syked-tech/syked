import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function TherapistDetails() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Footer />
    </>
  );
}
