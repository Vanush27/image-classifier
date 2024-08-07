import React from "react";
import {Button, Grid, IconButton} from "@material-ui/core";
import TrainModel from "./TrainModel";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";
// import FileUpload from "./FileUpload";

const Buttons = ({
                   isLoading,
                   isPhotoTaken,
                   makePrediction,
                   flipCamera,
                   handleClick,
                   image,
                   model,
                   classifier,
                 }) => {
  return (
    <Grid container>
      <Grid item xs={isPhotoTaken ? 6 : 12}>
        <Grid>
          <Button onClick={handleClick} variant="contained" color="secondary">
            {isPhotoTaken ? "Retake" : "Take Photo"}
          </Button>

          {/*<FileUpload*/}
          {/*  makePrediction={makePrediction}*/}
          {/*/>*/}

          {!isPhotoTaken && (
            <IconButton onClick={flipCamera}>
              <FlipCameraIosIcon/>
            </IconButton>
          )}
        </Grid>
        <Grid>
          {isPhotoTaken && (
            <Button
              onClick={makePrediction}
              variant="contained"
              color="primary"
            >
              {isLoading ? "Loading..." : "Classify"}
            </Button>
          )}
        </Grid>
      </Grid>
      {isPhotoTaken && (
        <Grid item xs={6}>
          <TrainModel model={model} image={image} classifier={classifier}/>
        </Grid>
      )}
    </Grid>
  );
};

export default Buttons;
