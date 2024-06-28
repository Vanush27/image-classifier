import React, {useEffect} from "react";
import {CircularProgress, Grid, Snackbar} from "@material-ui/core";

import LoadingPage from "./components/LoadingPage";
import PredictionsTable from "./components/PredictionsTable";
import DeviceWebcam from "./components/DeviceWebcam";
import useMobileNetModel from "./utilities/useMobileNetModel";

const App = () => {
  const {
    model,
    loadModel,
    createClassifier,
    classifier,
    snackBarMessage,
    open,
    handleClose,
    isLoadingModel,
    predictions,
    setPredictions,
    isLoading,
    setIsLoading,
    makePrediction,
  } = useMobileNetModel();

  useEffect(() => {
    loadModel();
  }, [loadModel]);

  useEffect(() => {
    createClassifier();
  }, [createClassifier]);

  return (
    <Grid>
      {isLoadingModel ? (
        <LoadingPage open={isLoadingModel}/>
      ) : (
        <>
          <DeviceWebcam
            setPredictions={setPredictions}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            makePrediction={makePrediction}
            model={model}
            classifier={classifier}
          />
          {isLoading && (<CircularProgress/>)}
          {predictions && <PredictionsTable predictions={predictions}/>}
        </>
      )}

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackBarMessage}
      />
    </Grid>
  );
}

export default App;
