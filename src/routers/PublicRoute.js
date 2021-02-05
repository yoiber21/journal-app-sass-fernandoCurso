import React from 'react'
import PropTypes from 'prop-types';
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
    loggedIn,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( !loggedIn )
                ? ( <Component { ...props } /> )
                : ( <Redirect to="/"  /> )
            )}
            />
    )
}

PublicRoute.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
export default PublicRoute;
