import React from "react";
import TVShowCard from "../tvShowCard";
import Grid from "@mui/material/Grid";

const TVShowList = ( {show, action }) => {

  let showCards = show.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVShowCard key={m.id} show={m} action={action} />
    </Grid>
  ));
  return showCards;
};

export default TVShowList;