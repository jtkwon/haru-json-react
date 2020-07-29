import React from "react";
// mui
import { Grid } from "@material-ui/core";
// internal
import { Header, Content } from "components";

const App = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={12}>
      <Content />
    </Grid>
  </Grid>
);

export default App;
