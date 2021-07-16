/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { selectIsAuthenticated } from 'containers/Auth/authSlice';
import Header from 'components/Header';
import Footer from 'components/Footer';

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
function reportNetworkError() {
  alert('This action could not be completed');
}

const events = [
  {
    available: true,
    title: '12:00 PM',
    start: '2021-07-17 12:00:00',
    end: '2021-07-17 13:00:00',
    className: ['avl-bg-cal', 'cal-text-cent'],
    backgroundColor: '#bac866',
    borderColor: '#bac866',
    textColor: '#000',
  },
  {
    available: true,
    title: '01:00 PM',
    start: '2021-07-17 13:00:00',
    end: '2021-07-17 14:00:00',
    className: ['avl-bg-cal', 'cal-text-cent'],
    backgroundColor: '#bac866',
    borderColor: '#bac866',
    textColor: '#000',
  },
  {
    available: true,
    title: '02:00 PM',
    start: '2021-07-17 14:00:00',
    end: '2021-07-17 15:00:00',
    className: ['avl-bg-cal', 'cal-text-cent'],
    backgroundColor: '#bac866',
    borderColor: '#bac866',
    textColor: '#000',
  },
  {
    available: true,
    title: '03:00 PM',
    start: '2021-07-17 15:00:00',
    end: '2021-07-17 16:00:00',
    className: ['avl-bg-cal', 'cal-text-cent'],
    backgroundColor: '#bac866',
    borderColor: '#bac866',
    textColor: '#000',
  },
];

export default function TherapistDetails() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [value, setValue] = React.useState(0);
  const [eventsUp, setEventsUp] = React.useState(events);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // handlers for user actions
  // ------------------------------------------------------------------------------------------

  const handleDateSelect = (selectInfo) => {
    const calendarApi = selectInfo.view.calendar;
    const title = prompt('Please enter a new title for your event');

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent(
        {
          // will render immediately. will call handleEventAdd
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        },
        true,
      ); // temporary=true, will get overwritten when reducer gives new events
    }
  };

  const handleEventClick = (clickInfo) => {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove(); // will render immediately. will call handleEventRemove
    // }
    if (clickInfo.event.extendedProps.available) {
      setEventsUp(events);
      //  selected time == clickInfo.event.start.toISOString();
      const activeclassName = clickInfo.el.className.replace('avl-bg-cal', '');
      // eslint-disable-next-line no-param-reassign
      clickInfo.el.className = `${activeclassName} cal-day-selected`;
      // console.log(clickInfo);
    }
  };

  // handlers that initiate reads/writes via the 'action' props
  // ------------------------------------------------------------------------------------------

  // eslint-disable-next-line no-unused-vars
  const handleDates = (rangeInfo) => {
    // this.props.requestEvents(rangeInfo.startStr, rangeInfo.endStr).catch(reportNetworkError);
  };

  // eslint-disable-next-line no-unused-vars
  const handleEventAdd = (addInfo) => {
    // this.props.createEvent(addInfo.event.toPlainObject()).catch(() => {
    //   reportNetworkError();
    //   addInfo.revert();
    // });
  };

  // eslint-disable-next-line no-unused-vars
  const handleEventChange = (changeInfo) => {
    // this.props.updateEvent(changeInfo.event.toPlainObject()).catch(() => {
    //   reportNetworkError();
    //   changeInfo.revert();
    // });
  };

  // eslint-disable-next-line no-unused-vars
  const handleEventRemove = (removeInfo) => {
    // this.props.deleteEvent(removeInfo.event.id).catch(() => {
    //   reportNetworkError();
    //   removeInfo.revert();
    // });
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <section className="consul-section con_profile pt-5 f7-gray pb-5">
        <div className="container pt-5">
          <div className="row pt-4">
            <div className="col-md-4">
              <div className="bg-white pro_box p-3">
                <div className="pro-img">
                  <img src="assets/img/user.png" alt="profile" />
                </div>
                <div className="text-center border-bottom">
                  <h5 if="userInfo?.first_name !== ''">Mohube Maswi</h5>
                  <p if="userInfo?.therapy_type !== ''">
                    <span if="userInfo?.therapy_type=='clinical_psychologist'">
                      Clinical Psychologist
                    </span>
                  </p>
                  {/* <p if="userInfo?.length > '0'" className="green_color mb-0">
                    rating
                  </p>
                  <p if="userInfo?.length > '0'" className="green_color mb-0">
                    rating
                  </p> */}
                </div>
                <div className="pt-3 specialties">
                  <h5 className="d-flex align-items-center justify-content-between">
                    <span>Years of Experience: N/A</span>
                  </h5>
                  <h5>Qualification:</h5>
                  <ul className="list">
                    <li if="userInfo.qualification != ''">
                      <span if="let qualificationVal of userInfo.qualification;let isLast=last">
                        qualification
                      </span>
                    </li>
                  </ul>
                  <h5>Professional Registration Number: </h5>
                  <p>hpcsa_no</p>
                  <h5>Services Offered:</h5>
                  <div>
                    <a href="#0">
                      <i className="fa fa-video-camera"></i>
                    </a>
                    <p>video</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="bg-white pt-3 box-shadow">
                <MenuTabs
                  indicatorColor="primary"
                  scrollButtons="on"
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs">
                  <MenuTab label="Book Appointment" {...a11yProps(0)} />
                  <MenuTab label="About Me" {...a11yProps(1)} />
                  <MenuTab label="Reviews" {...a11yProps(2)} />
                </MenuTabs>
                <TabPanel value={value} index={0}>
                  <div className="p-3">
                    <div className="patient_list">
                      <FullCalendar
                        plugins={[timeGridPlugin]}
                        headerToolbar={{
                          left: 'title',
                          center: '',
                          right: 'today prev,next', // dayGridMonth,timeGridWeek,timeGridDay
                        }}
                        slotDuration="01:00:00"
                        initialView="timeGridWeek"
                        // editable
                        // selectable
                        // selectMirror
                        // dayMaxEvents
                        // weekends={this.props.weekendsVisible}
                        datesSet={handleDates}
                        select={handleDateSelect}
                        // events={this.props.events}
                        events={eventsUp}
                        eventContent={renderEventContent} // custom render function
                        eventClick={handleEventClick}
                        eventAdd={handleEventAdd}
                        eventChange={handleEventChange} // called for drag-n-drop/resize
                        eventRemove={handleEventRemove}
                      />
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <div className="form-group m-0">
                      <button type="button" className="btn btn-theme text-uppercase">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
