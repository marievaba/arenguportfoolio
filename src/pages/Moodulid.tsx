import { Grid } from "@mui/material";
import { useStyles } from "../styles";

function Moodulid() {
  const classes = useStyles();
  return (
    <Grid
      container
      sm={12}
      className={classes.marginTop}
    >
      <h1>YOYOYO ma olen moodul</h1>
    </Grid>
  )
}

export default Moodulid;