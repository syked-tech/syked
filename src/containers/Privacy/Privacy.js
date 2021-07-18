import React from 'react';
import { useSelector } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';

export default function Privacy() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className="wrapper pb-5 top-margin inner_wrap">
        <section className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="inner_page">
                  <h2 className="mb-3  border-bottom other_heading">Privacy</h2>
                  <div>
                    <p dir="ltr">Syked operates the syked website, which provides the SERVICE.</p>
                    <p dir="ltr">
                      This page is used to inform website visitors regarding our policies with the
                      collection, use, and disclosure of Personal Information if anyone decided to
                      use our Service, the syked website.
                    </p>
                    <p dir="ltr">
                      If you choose to use our Service, then you agree to the collection and use of
                      information in relation with this policy. The Personal Information that we
                      collect are used for providing and improving the Service. We will not use or
                      share your information with anyone except as described in this Privacy Policy.
                    </p>
                    <p dir="ltr">
                      The terms used in this Privacy Policy have the same meanings as in our Terms
                      and Conditions, which is accessible at
                      <a href="http://www.syked.co.za">www.syked.co.za</a> , unless otherwise
                      defined in this Privacy Policy.
                    </p>
                    <h3 dir="ltr">
                      <strong>Information Collection and Use</strong>
                    </h3>
                    <p dir="ltr">
                      For a better experience while using our Service, we may require you to provide
                      us with certain personally identifiable information, including but not limited
                      to your name, phone number, and postal address. The information that we
                      collect will be used to contact or identify you.
                    </p>
                    <h3 dir="ltr">
                      <strong>Log Data</strong>
                    </h3>
                    <p dir="ltr">
                      We want to inform you that whenever you visit our Service, we collect
                      information that your browser sends to us that is called Log Data. This Log
                      Data may include information such as your computer&#39;s Internet Protocol
                      (&ldquo;IP&rdquo;) address, browser version, pages of our Service that you
                      visit, the time and date of your visit, the time spent on those pages, and
                      other statistics.
                    </p>
                    <h3 dir="ltr">
                      <strong>Cookies</strong>
                    </h3>
                    <p dir="ltr">
                      Cookies are files with small amount of data that is commonly used an anonymous
                      unique identifier. These are sent to your browser from the website that you
                      visit and are stored on your computer&#39;s hard drive.
                    </p>
                    <p dir="ltr">
                      Our website uses these &ldquo;cookies&rdquo; to collect information and to
                      improve our Service. You have the option to either accept or refuse these
                      cookies, and know when a cookie is being sent to your computer. If you choose
                      to refuse our cookies, you may not be able to use some portions of our
                      Service.
                    </p>
                    <h3 dir="ltr">
                      <strong>Service Providers</strong>
                    </h3>
                    <p dir="ltr">
                      We may employ third-party companies and individuals due to the following
                      reasons:
                    </p>
                    <ul>
                      <li dir="ltr">
                        <p dir="ltr">To facilitate our Service;</p>
                      </li>

                      <li dir="ltr">
                        <p dir="ltr">To provide the Service on our behalf;</p>
                      </li>

                      <li dir="ltr">
                        <p dir="ltr">To perform Service-related services; or</p>
                      </li>

                      <li dir="ltr">
                        <p dir="ltr">To assist us in analyzing how our Service is used.</p>
                      </li>
                    </ul>
                    <p dir="ltr">
                      We want to inform our Service users that these third parties have access to
                      your Personal Information. The reason is to perform the tasks assigned to them
                      on our behalf. However, they are obligated not to disclose or use the
                      information for any other purpose.
                    </p>
                    <h3 dir="ltr">
                      <strong>Security</strong>
                    </h3>
                    <p dir="ltr">
                      We value your trust in providing us with your Personal Information, thus we
                      are striving to use commercially acceptable means of protecting it. But
                      remember that no method of transmission over the internet, or method of
                      electronic storage is 100% secure and reliable, and we cannot guarantee its
                      absolute security.
                    </p>
                    <h3 dir="ltr">
                      <strong>Links to Other Sites</strong>
                    </h3>
                    <p dir="ltr">
                      Our Service may contain links to other sites. If you click on a third-party
                      link, you will be directed to that site. Note that these external sites are
                      not operated by us. Therefore, we strongly advise you to review the Privacy
                      Policy of these websites. We have no control over, and assume no
                      responsibility for the content, privacy policies, or practices of any
                      third-party sites or services.
                    </p>
                    <p dir="ltr">Children&#39;s Privacy</p>
                    <p dir="ltr">
                      Our Services do not address anyone under the age of 13. We do not knowingly
                      collect personal identifiable information from children under 13. In the case
                      we discover that a child under 13 has provided us with personal information,
                      we immediately delete this from our servers. If you are a parent or guardian
                      and you are aware that your child has provided us with personal information,
                      please contact us so that we will be able to do necessary actions.
                    </p>
                    <h3 dir="ltr">
                      <strong>Changes to This Privacy Policy</strong>
                    </h3>
                    <p dir="ltr">
                      We may update our Privacy Policy from time to time. Thus, we advise you to
                      review this page periodically for any changes. We will notify you of any
                      changes by posting the new Privacy Policy on this page. These changes are
                      effective immediately after they are posted on this page.
                    </p>
                    <h3 dir="ltr">
                      <strong>Contact Us</strong>
                    </h3>
                    <p dir="ltr">
                      If you have any questions or suggestions about our Privacy Policy, do not
                      hesitate to contact us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
