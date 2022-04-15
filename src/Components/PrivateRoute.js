import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { DataContext } from "./Context";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const value = useContext(DataContext);
  const [currentUser] = value.currentUser;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !currentUser ? (
          <Redirect to={"/login"} />
        ) : (
          <RouteComponent {...routeProps} />
        )
      }
    />
  );
};

export default PrivateRoute;
