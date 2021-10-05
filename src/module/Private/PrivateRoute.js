import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.global.isLoggedIn);

  return (
    <>
      {/* {window.scroll(0, 0)} */}
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/signin", state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
};
export default PrivateRoute;
