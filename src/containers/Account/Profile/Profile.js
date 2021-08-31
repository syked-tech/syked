/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  VKShareButton,
  VKIcon,
  TelegramShareButton,
  TelegramIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
} from 'next-share';
import * as ROUTES from 'common/constants';

export default function Profile() {
  return (
    <div className="inner_page mb-3">
      <div className="form">
        <form className="therpist_form">
          <div>
            <h5 className="d-flex justify-content-between mb-3 pb-3 border-bottom text-uppercase">
              Personal Information
              <Link
                to={ROUTES.EDIT_PROFILE_PAGE}
                title="Edit Profile"
                className="btn btn-theme text-uppercase text-right">
                <FontAwesomeIcon icon={faPencilAlt} /> Edit
              </Link>
            </h5>
          </div>
          <div className="d-sm-flex">
            <div className="pro_img">
              <img src="syked/assets/img/user.png" alt="Profile" />
            </div>
            <div className="pr-d w-md-100 row mb-0">
              <div className="mb-3 col-md-6">
                <label>First Name:</label>
                <span>NA</span>
              </div>
              <div className="mb-3 col-md-6">
                <label>Last Name:</label>
                <span>NA</span>
              </div>
              <div className="mb-3 col-lg-6">
                <label>Email:</label>
                <span>NA</span>
              </div>
              <div className="mb-3 col-md-6">
                <label>Phone:</label>
                <span>NA</span>
              </div>
              <div className="mb-3 col-md-6">
                <label>Age:</label>
                <span>NA</span>
              </div>
              <div className="mb-3 col-md-6">
                <label>Suburb:</label>
                <span>NA</span>
              </div>
              <div className="mb-3 col-md-6">
                <label>City:</label>
                <span>NA</span>
              </div>
              <div className="mb-3 col-md-6">
                <label>Next of Kin Name:</label>
                <span>NA</span>
              </div>
              <div className="mb-3 col-md-6">
                <label>Next of Kin Number:</label>
                <span>NA</span>
              </div>
              <div className="mb-3 col-md-6">
                <label>Referral Code:</label>
                <span>NA</span>
                <div className="share-buttons">
                  <FacebookShareButton
                    url="https://syked.co.za/web"
                    quote="Use my referral code  '+detail.referral_code"
                    hashtag="#Syked">
                    <FacebookIcon size={38} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url="https://syked.co.za/web"
                    title="Use my referral code  '+detail.referral_code">
                    <TwitterIcon size={38} />
                  </TwitterShareButton>
                  <LinkedinShareButton url="https://syked.co.za/web">
                    <LinkedinIcon size={38} />
                  </LinkedinShareButton>
                  <WhatsappShareButton
                    url="https://syked.co.za/web"
                    title="Use my referral code  '+detail.referral_code"
                    separator=":: ">
                    <WhatsappIcon size={38} />
                  </WhatsappShareButton>
                  <PinterestShareButton
                    url="https://syked.co.za/web"
                    media="Use my referral code  '+detail.referral_code">
                    <PinterestIcon size={38} />
                  </PinterestShareButton>
                  <RedditShareButton
                    url="https://syked.co.za/web"
                    title="Use my referral code  '+detail.referral_code"
                    windowWidth={660}
                    windowHeight={460}>
                    <RedditIcon size={38} />
                  </RedditShareButton>
                  <TumblrShareButton
                    url="https://syked.co.za/web"
                    title="Use my referral code  '+detail.referral_code">
                    <TumblrIcon size={38} />
                  </TumblrShareButton>
                  <VKShareButton
                    url="https://syked.co.za/web"
                    image="syked/assets/img/syked-logo-200.png">
                    <VKIcon size={38} />
                  </VKShareButton>
                  <TelegramShareButton
                    url="https://syked.co.za/web"
                    title="Use my referral code  '+detail.referral_code">
                    <TelegramIcon size={38} />
                  </TelegramShareButton>
                  <WorkplaceShareButton
                    url="https://syked.co.za/web"
                    quote="Use my referral code  '+detail.referral_code">
                    <WorkplaceIcon size={38} />
                  </WorkplaceShareButton>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
