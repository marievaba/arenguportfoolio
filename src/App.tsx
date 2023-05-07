import React from 'react';
import { Box, Dialog, Grid } from '@mui/material';
import { Typography } from "@material-ui/core";
import Enesetutvustus from "./pages/Enesetutvustus";
import CustomButton from "./CustomButton";
import Moodulid from './pages/Moodulid';
import { Routes, Route, Link } from "react-router-dom";
import { useStyles } from "./styles";
import Praktika from './pages/Praktika';
import Koolitused from './pages/Koolitused';
import Eneserefleksioon from './pages/Eneserefleksioon';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [currentTab, setCurrentTab] = React.useState(window.location.pathname);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <>
      <Grid style={{
        width: "100%",
        height: 90,
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        zIndex: 2,
        backgroundColor: "#F17E92",
        padding: "25px 35px",
      }}
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

        <Grid display={{ xs: 'none', md: 'inline-block' }} style={{ alignSelf: "center" }}>
          <Link className={classes.noUnderline} onClick={() => setCurrentTab("/")} to="/">
            <CustomButton style={{
              backgroundColor: "#F17E92",
              color: currentTab === "/" ? "#fff" : ""
            }}>Enesetutvustus</CustomButton>
          </Link>
          <Link className={classes.noUnderline} onClick={() => setCurrentTab("/moodulid")} to="/moodulid">
            <CustomButton style={{
              backgroundColor: "#F17E92",
              color: currentTab === "/moodulid" ? "#fff" : ""
            }}>Moodulid</CustomButton>
          </Link>
          <Link className={classes.noUnderline} onClick={() => setCurrentTab("/praktika")} to="/praktika">
            <CustomButton style={{
              backgroundColor: "#F17E92",
              color: currentTab === "/praktika" ? "#fff" : ""
            }}>Praktika</CustomButton>
          </Link>
          <Link className={classes.noUnderline} onClick={() => setCurrentTab("/koolitused")} to="/koolitused">
            <CustomButton style={{
              backgroundColor: "#F17E92",
              color: currentTab === "/koolitused" ? "#fff" : ""
            }}>Koolitused</CustomButton>
          </Link>
          <Link className={classes.noUnderline} onClick={() => setCurrentTab("/eneserefleksioon")} to="/eneserefleksioon">
            <CustomButton style={{
              backgroundColor: "#F17E92",
              color: currentTab === "/eneserefleksioon" ? "#fff" : ""
            }}>Eneserefleksioon</CustomButton>
          </Link>
        </Grid>

        <Grid display={{ sm: 'block', md: 'none' }} style={{ alignSelf: "center" }}>
          <MenuIcon className="burger-button"
            style={{ width: 40, height: 40 }}
            onClick={handleOpen}
          />
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: "90%",
                height: "80%",
                borderRadius: 25,
                margin: "35px 0 35px 0",
                backgroundColor: "#F17E92"
              }
            }}
          >
            <Box>
              <Grid className="close-button-container">
                <CloseIcon className="close-button" onClick={handleClose}></CloseIcon>
              </Grid>
              <Grid style={{ width: "100%", paddingBottom: 20 }}>
                <div className="nav">
                  <ul>
                    <li><Link className="nav-link" to="/" onClick={handleClose}>enesetutvustus</Link></li>
                    <li><Link className="nav-link" to="/moodulid" onClick={handleClose}>MOODULID</Link></li>
                    <li><Link className="nav-link" to="/praktika" onClick={handleClose}>PRAKTIKA</Link></li>
                    <li><Link className="nav-link" to="/koolitused" onClick={handleClose}>KOOLITUSED</Link></li>
                    <li>
                      <Link className="nav-link" to="/eneserefleksioon" onClick={handleClose}>ENESEREFLEKSIOON</Link></li>
                  </ul>
                </div>
              </Grid>
            </Box>
          </Dialog>
        </Grid>
      </Grid>
      
      <Grid className="app-content">
        <Routes>
          <Route path="/" element={<Enesetutvustus />} />
          <Route path="/moodulid" element={<Moodulid />} />
          <Route path="/praktika" element={<Praktika />} />
          <Route path="/koolitused" element={<Koolitused />} />
          <Route path="/eneserefleksioon" element={<Eneserefleksioon />} />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
