import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * render prop where we check to see if the user is not authenticated and not loading,
 * If they are authenticated then the component will load
 * @param {*} param0
 */
// rest operate: take anything else that's passed in, if the path match, then call render function
const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            !isAuthenticated && !loading ? <Redirect to='/login' /> : <Component {...props} />
        }
    />
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
