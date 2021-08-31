import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

const ChipIcon = withStyles(() => ({
  root: {
    backgroundColor: '#bac866',
    color: 'white',
    marginLeft: 5,
  },
}))(Chip);

const MenuTabs = withStyles(() => ({
  indicator: {
    backgroundColor: '#bac866',
  },
}))(Tabs);

const MenuTab = withStyles(() => ({
  wrapper: {
    textTransform: 'none',
    fontFamily: 'Roboto Slab',
    fontWeight: 600,
    fontSize: 16,
  },
}))(Tab);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// eslint-disable-next-line no-unused-vars
const bookings = {
  msg: 'Record List.',
  pending: [],
  completed: [],
  confirmed: [],
  canceled: [
    {
      about_me:
        'I am a registered clinical psychologist, I offer individual psychotherapy to adolescents and adults. I was training and experience includes working from Systems Approach and CBT however there is also an appreciation of other paradigms of working, like Psychodynamic, and African Epistemology. My areas of interest are Personality Disorders, Eating Disorders, Couples and Family Therapy, Stress Management, Depression, Personal Growth, Trauma, Anxiety Disorders, Work related stress.',
      first_name: 'Mohube',
      last_name: 'Maswi',
      profile_image: 'therapist_IMG_2020727_162510.jpg',
      user_type: 'therapist',
      id: 1253,
      request_number: '20210725100',
      therapy_type: 'clinical_psychologist',
      status: 'cancel',
      apointment_date_time: '2021-07-27T15:00:00.000Z',
      price: 699,
    },
  ],
};

function TherapyType({ type }) {
  switch (type) {
    case 'online_therapy':
      return <b>Online Therapy</b>;
    case 'marriage_counseling':
      return <b>Marriage Counseling</b>;
    case 'teen_counseling':
      return <b>Teen Counseling</b>;
    case 'social_worker':
      return <b>Social Worker</b>;
    case 'registered_councillor':
      return <b>Registered Counsellor</b>;
    case 'counselling_psychologist':
      return <b>Counseling Psychologist</b>;
    case 'clinical_psychologist':
      return <b>Clinical Psychologist</b>;

    default:
      return <b />;
  }
}
TherapyType.propTypes = {
  type: PropTypes.string,
};

export default function Bookings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="inner_page p-0 mb-5">
      <div className="inner_head p-3 border-bottom">
        <div className="row m-0 justify-content-between">
          <h3 className="border-0 mb-2 p-0">My Bookings List</h3>
          <button type="button" className="btn btn-theme min-btn mb-2 mb-sm-0">
            <FontAwesomeIcon icon={faList} />
            <span className="pl-2">New Booking</span>
          </button>

          <button type="button" className="btn btn-theme min-btn mb-2 mb-sm-0">
            <FontAwesomeIcon icon={faCalendar} />
            <span className="pl-2">View Calender</span>
          </button>
          <button type="button" className="btn btn-theme min-btn mb-2 mb-sm-0">
            <FontAwesomeIcon icon={faList} />
            <span className="pl-2">View List</span>
          </button>
        </div>
      </div>
      <div>
        <MenuTabs
          indicatorColor="primary"
          scrollButtons="on"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs">
          <MenuTab
            label={
              <span>
                Pending
                {bookings.pending.length ? (
                  <ChipIcon size="small" label={bookings.pending.length} />
                ) : null}
              </span>
            }
            {...a11yProps(0)}
          />
          <MenuTab
            label={
              <span>
                Confirmed
                {bookings.confirmed.length ? (
                  <ChipIcon size="small" label={bookings.confirmed.length} />
                ) : null}
              </span>
            }
            {...a11yProps(1)}
          />
          <MenuTab
            label={
              <span>
                Completed
                {bookings.completed.length ? (
                  <ChipIcon size="small" label={bookings.completed.length} />
                ) : null}
              </span>
            }
            {...a11yProps(2)}
          />
          <MenuTab
            label={
              <span>
                Cancelled
                {bookings.canceled.length ? (
                  <ChipIcon size="small" label={bookings.canceled.length} />
                ) : null}
              </span>
            }
            {...a11yProps(3)}
          />
        </MenuTabs>
        <TabPanel value={value} index={0}>
          <div className="request_page">
            {bookings.pending.map((item) => (
              <div key={item.id} className="co-listing">
                <div className="d-sm-flex">
                  <div className="pro-img">
                    <img
                      src={
                        item.profile_image
                          ? `https://syked.co.za/public/uploads/user/therapist/${item.profile_image}`
                          : 'syked/assets/img/user.png'
                      }
                      alt="Profile"
                    />
                  </div>
                  <div className="content_list w-100 pt-3 pt-sm-0 pl-sm-3">
                    <div className="d-sm-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h6>
                          <b>Request:</b> {item.request_number}
                        </h6>
                        <h5 className="mb-2">{`${item.first_name} ${item.last_name}`}</h5>
                        <h6>
                          <TherapyType type={item.therapy_type} />
                        </h6>
                      </div>
                      <div className="text-sm-right">
                        <p className="mb-2">
                          {format(new Date(item.apointment_date_time), 'dd MMM yyyy p')}
                        </p>
                        <h4>{`R${item.price}`}</h4>
                      </div>
                    </div>
                    <p className="mb-1">
                      <span className="readMore">{item.about_me}</span>
                    </p>
                    <div className="pt-3">
                      <a
                        href={`/my-account/request-detail/${item.id}`}
                        className="mt-0 btn mr-3 btn-pending">
                        Detail
                      </a>
                      <a
                        href={`/my-account/edit-request/${item.id}`}
                        className="btn btn-theme new_edit">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {!bookings.pending.length ? <p className="text-center pt-2">No Record Found</p> : null}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="request_page">
            {bookings.confirmed.map((item) => (
              <div key={item.id} className="co-listing">
                <div className="d-sm-flex">
                  <div className="pro-img">
                    <img
                      src={
                        item.profile_image
                          ? `https://syked.co.za/public/uploads/user/therapist/${item.profile_image}`
                          : 'syked/assets/img/user.png'
                      }
                      alt="Profile"
                    />
                  </div>
                  <div className="content_list w-100 pt-3 pt-sm-0 pl-sm-3">
                    <div className="d-sm-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h6>
                          <b>Request:</b> {item.request_number}
                        </h6>
                        <h5 className="mb-2">{`${item.first_name} ${item.last_name}`}</h5>
                        <h6>
                          <TherapyType type={item.therapy_type} />
                        </h6>
                      </div>
                      <div className="text-sm-right">
                        <p className="mb-2">
                          {format(new Date(item.apointment_date_time), 'dd MMM yyyy p')}
                        </p>
                        <h4>{`R${item.price}`}</h4>
                      </div>
                    </div>
                    <p className="mb-1">
                      <span className="readMore">{item.about_me}</span>
                    </p>
                    <div className="pt-3">
                      <a
                        href={`/my-account/request-detail/${item.id}`}
                        className="mt-0 btn mr-3 btn-pending">
                        Detail
                      </a>
                      <a
                        href={`/my-account/edit-request/${item.id}`}
                        className="btn btn-theme new_edit">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {!bookings.confirmed.length ? (
              <p className="text-center pt-2">No Record Found</p>
            ) : null}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="request_page">
            {bookings.completed.map((item) => (
              <div key={item.id} className="co-listing">
                <div className="d-sm-flex">
                  <div className="pro-img">
                    <img
                      src={
                        item.profile_image
                          ? `https://syked.co.za/public/uploads/user/therapist/${item.profile_image}`
                          : 'syked/assets/img/user.png'
                      }
                      alt="Profile"
                    />
                  </div>
                  <div className="content_list w-100 pt-3 pt-sm-0 pl-sm-3">
                    <div className="d-sm-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h6>
                          <b>Request:</b> {item.request_number}
                        </h6>
                        <h5 className="mb-2">{`${item.first_name} ${item.last_name}`}</h5>
                        <h6>
                          <TherapyType type={item.therapy_type} />
                        </h6>
                      </div>
                      <div className="text-sm-right">
                        <p className="mb-2">
                          {format(new Date(item.apointment_date_time), 'dd MMM yyyy p')}
                        </p>
                        <h4>{`R${item.price}`}</h4>
                      </div>
                    </div>
                    <p className="mb-1">
                      <span className="readMore">{item.about_me}</span>
                    </p>
                    <div className="pt-3">
                      <a
                        href={`/my-account/request-detail/${item.id}`}
                        className="mt-0 btn mr-3 btn-pending">
                        Detail
                      </a>
                      <a
                        href={`/my-account/edit-request/${item.id}`}
                        className="btn btn-theme new_edit">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {!bookings.completed.length ? (
              <p className="text-center pt-2">No Record Found</p>
            ) : null}
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="request_page">
            {bookings.canceled.map((item) => (
              <div key={item.id} className="co-listing">
                <div className="d-sm-flex">
                  <div className="pro-img">
                    <img
                      src={
                        item.profile_image
                          ? `https://syked.co.za/public/uploads/user/therapist/${item.profile_image}`
                          : 'syked/assets/img/user.png'
                      }
                      alt="Profile"
                    />
                  </div>
                  <div className="content_list w-100 pt-3 pt-sm-0 pl-sm-3">
                    <div className="d-sm-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h6>
                          <b>Request:</b> {item.request_number}
                        </h6>
                        <h5 className="mb-2">{`${item.first_name} ${item.last_name}`}</h5>
                        <h6>
                          <TherapyType type={item.therapy_type} />
                        </h6>
                      </div>
                      <div className="text-sm-right">
                        <p className="mb-2">
                          {format(new Date(item.apointment_date_time), 'dd MMM yyyy p')}
                        </p>
                        <h4>{`R${item.price}`}</h4>
                      </div>
                    </div>
                    <p className="mb-1">
                      <span className="readMore">{item.about_me}</span>
                    </p>
                    <div className="pt-3">
                      <a
                        href={`/my-account/request-detail/${item.id}`}
                        className="mt-0 btn mr-3 btn-pending">
                        Detail
                      </a>
                      <a
                        href={`/my-account/edit-request/${item.id}`}
                        className="btn btn-theme new_edit">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {!bookings.canceled.length ? <p className="text-center pt-2">No Record Found</p> : null}
          </div>
        </TabPanel>
      </div>
    </div>
  );
}
