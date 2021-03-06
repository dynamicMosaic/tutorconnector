// Fetch data using an action, bring it in from redux state then pass down to other components ie: experience + education components
import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import { getCurrentProfile } from '../../actions/profile'


const Dashboard = ({ getCurrentProfile, auth: {user}, profile: { profile, loading } }) => {
    
  useEffect(() => {
    getCurrentProfile()
  }, []);
  
  return loading && profile === null ? <Spinner /> : <Fragment>
    <h1 className='large text-primary'> Dashboard</h1>
    <p className='lead'>
      <i className='fas fa-user' /> Welcome { user && user.name }
    </p>
  </Fragment>
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});



export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)

