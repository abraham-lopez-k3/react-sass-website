import React from "react";
import PropTypes from "prop-types";
import { Grid, withTheme } from "@material-ui/core";

function StatisticsArea(props) {
  const { theme, CardChart, data } = props;
  return (
    CardChart &&
    data.length >= 2 && (
      <Grid container spacing={3}>
        <Grid item md={6} className="w-100">
          <CardChart
            data={data.map(element => ({
              value: element.profit,
              timestamp: element.timestamp
            }))}
            color={theme.palette.secondary.light}
            height="70px"
            title="Profit"
          />
        </Grid>
        <Grid item md={6} className="w-100">
          <CardChart
            data={data.map(element => ({
              value: element.views,
              timestamp: element.timestamp
            }))}
            color={theme.palette.primary.light}
            height="70px"
            title="Views"
          />
        </Grid>
      </Grid>
    )
  );
}

StatisticsArea.propTypes = {
  theme: PropTypes.object,
  data: PropTypes.array,
  CardChart: PropTypes.any
};

export default withTheme(StatisticsArea);
