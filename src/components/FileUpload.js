import React, { useRef } from "react";
import { Button, Grid, Snackbar } from "@material-ui/core";
import useSnackBar from "../utilities/useSnackBar";

const FileUpload = ({  makePrediction }) => {
  const fileInputRef = useRef(null);
  const { handleClose, open, snackBarMessage } = useSnackBar();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        makePrediction(image, reader.result);
      };
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackBarMessage}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Upload Image
      </Button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Grid>
  );
};

export default FileUpload;
