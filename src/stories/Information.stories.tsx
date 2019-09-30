import { storiesOf } from "@storybook/react";

import * as React from "react";
import { Box, Grid } from "@material-ui/core";
import Information from "../components/Information";

const Text = (): React.FunctionComponentElement<{}> => {
  return (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy
    </p>
  );
};

storiesOf("Information", module)
  .add("Basic", () => (
    <Information>
      <Text />
    </Information>
  ))
  .add("Inside Grid", () => (
    <Grid container>
      <Grid item xs={4}>
        <Information>
          <Text />
        </Information>
      </Grid>
    </Grid>
  ));
