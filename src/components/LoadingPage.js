import React from "react";
import {Backdrop, Typography} from "@material-ui/core";

const LoadingPage = ({open}) => {
  return (
    <Backdrop open={open}>
      <Typography component={"span"}>Loading Model...</Typography>
    </Backdrop>
  );
};

export default LoadingPage;
