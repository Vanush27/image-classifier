import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: window.width
  }
});
const PredictionsTable = ({ predictions }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Predictions</TableCell>
            <TableCell align="right">Probability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {predictions.map(prediction => (
            <PredictionRow key={prediction.className} prediction={prediction} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PredictionsTable;

const PredictionRow = ({ prediction }) => {
  return (
    <TableRow>
      <TableCell
        component="th"
        scope="row"
        style={{ fontWeight: "bold", width: "20%" }}
      >
        {prediction.className}
      </TableCell>
      <TableCell align="right" style={{ width: "20%" }}>
        {Math.round(prediction.probability * 100, 5)}%
      </TableCell>
    </TableRow>
  );
};
