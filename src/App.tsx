import { Grid, useMediaQuery } from '@mui/material';
import { Typography } from "@material-ui/core";
import Enesetutvustus from "./pages/Enesetutvustus";
import CustomButton from "./CustomButton";
import Moodulid from './pages/Moodulid';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useStyles } from "./styles";
import './App.css';
import Praktika from './pages/Praktika';
import Koolitused from './pages/Koolitused';
import Eneserefleksioon from './pages/Eneserefleksioon';

function App() {
  const classes = useStyles();
  const atLeastSm = useMediaQuery('(min-width:600px)');

  return (
    <div className="main">
        <Grid
          sm={12}
          className={classes.center}
        >
          <Grid
            className={classes.typo}
          >
            <Typography
              className={classes.typo}
            >
              arenguportfoolio
            </Typography>
          </Grid>


          <Link className={classes.noUnderline} to="/">
            <CustomButton>Enesetutvustus</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/moodulid">
            <CustomButton>Moodulid</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/praktika">
            <CustomButton>Praktika</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/koolitused">
            <CustomButton>Koolitused</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/eneserefleksioon">
            <CustomButton>Eneserefleksioon</CustomButton>
          </Link>
        </Grid>
        <Grid className={classes.menuDivider} />

      <Routes>
        <Route path="/" element={<Enesetutvustus />} />
        <Route path="/moodulid" element={<Moodulid />} />
        <Route path="/praktika" element={<Praktika />} />
        <Route path="/koolitused" element={<Koolitused />} />
        <Route path="/eneserefleksioon" element={<Eneserefleksioon />} />
      </Routes>
    </div>
  );
}

export default App;
