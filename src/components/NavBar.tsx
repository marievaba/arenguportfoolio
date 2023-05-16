import React from 'react';
import { Box, Dialog, Grid } from '@mui/material';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom"
import CustomButton from "./CustomButton"
import { useStyles } from '../styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const NavBar = () => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(window.location.pathname);
  const [open, setOpen] = React.useState(false);
  const [compactMenu, setCompactMenu] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onScroll = (e: Event) => {
    const window = e.currentTarget as Window;
    if (!compactMenu && window.scrollY > 90) {
      setCompactMenu(true);
    }
    if (compactMenu && window.scrollY <= 90) {
      setCompactMenu(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });

  const isActive = (name: string) => {
    const url = decodeURI(window.location.href.replace(window.location.origin, ""));
    if (name === "enesetutvustus" && url === "/") {
      return "#fff";
    }
    if (url.includes(name)) {
      return "#fff"
    }
  }

  const isMoodulidOpen = () => {
    const url = decodeURI(window.location.href.replace(window.location.origin, ""));
    return url.startsWith("/moodulid");
  }

  return (
    <Grid id="menu-bar" style={{
      width: "100%",
      height: compactMenu ? 30 : 90,
      display: "flex",
      justifyContent: "space-between",
      position: "fixed",
      top: 0,
      zIndex: 2,
      backgroundColor: "#F17E92",
      padding: "25px 35px",
    }}
    >
      <Grid style={{ alignSelf: "center" }}>
        <Typography
          className={classes.typo} style={{ fontSize: compactMenu ? "1.20rem" : "1.40rem" }}
        >
          arenguportfoolio
        </Typography>
      </Grid>

      <Grid display={{ xs: 'none', md: 'inline-block' }} style={{ alignSelf: "center" }}>
        <Link className={classes.noUnderline} onClick={() => setCurrentTab("/")} to="/">
          <CustomButton className="menu-button" style={{
            backgroundColor: "#F17E92",
            color: currentTab === "/" ? "#fff" : ""
          }}>Enesetutvustus</CustomButton>
        </Link>
        <Link className={classes.noUnderline} onClick={() => setCurrentTab("/moodulid")} to="/moodulid">
          <CustomButton className="menu-button" style={{
            backgroundColor: "#F17E92",
            color: currentTab === "/moodulid" ? "#fff" : ""
          }}>Moodulid</CustomButton>
        </Link>
        <Link className={classes.noUnderline} onClick={() => setCurrentTab("/praktika")} to="/praktika">
          <CustomButton className="menu-button" style={{
            backgroundColor: "#F17E92",
            color: currentTab === "/praktika" ? "#fff" : ""
          }}>Praktika</CustomButton>
        </Link>
        <Link className={classes.noUnderline} onClick={() => setCurrentTab("/koolitused")} to="/koolitused">
          <CustomButton className="menu-button" style={{
            backgroundColor: "#F17E92",
            color: currentTab === "/koolitused" ? "#fff" : ""
          }}>Koolitused</CustomButton>
        </Link>
        <Link className={classes.noUnderline} onClick={() => setCurrentTab("/eneserefleksioon")} to="/eneserefleksioon">
          <CustomButton className="menu-button" style={{
            backgroundColor: "#F17E92",
            color: currentTab === "/eneserefleksioon" ? "#fff" : ""
          }}>Eneserefleksioon</CustomButton>
        </Link>
      </Grid>

      <Grid display={{ sm: 'block', md: 'none' }} style={{ alignSelf: "center" }}>
        <MenuIcon className="burger-button"
          style={{ fontSize: compactMenu ? 30 : 40, display: "inherit" }}
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
              backgroundColor: "#F17E92",
              overflow: "hidden",
              padding: "0 10px",
              zIndex: 2,
            }
          }}
        >
          <Box style={{ height: "100%" }}>
            <Grid className="close-button-container">
              <CloseIcon className="close-button" onClick={handleClose}></CloseIcon>
            </Grid>
            <Grid style={{ width: "100%", height: "75%", overflowY: "scroll", overflowX: "hidden", padding: "0 10px" }}>
              <div className="nav">
                <ul>
                  <li><Link className="nav-link" style={{ color: isActive("enesetutvustus") }} to="/" onClick={handleClose}>enesetutvustus</Link></li>
                  <li><Link className="nav-link" style={{ color: isActive("moodulid") }} to="/moodulid" onClick={handleClose}>MOODULID</Link></li>

                  {isMoodulidOpen() &&
                    <ul>
                      <li><Link className="nav-link nav-link-sub" style={{ color: isActive("veebikujundus") }} to="/moodulid#veebikujundus" onClick={handleClose}>veebikujundus</Link></li>
                      <li><Link className="nav-link nav-link-sub" style={{ color: isActive("veebiarendus-ja-veebihaldus") }} to="/moodulid#veebiarendus-ja-veebihaldus" onClick={handleClose}>veebiarendus ja veebihaldus</Link></li>
                      <li><Link className="nav-link nav-link-sub" style={{ color: isActive("kasutajakogemuse-analüüs") }} to="/moodulid#kasutajakogemuse-analüüs" onClick={handleClose}>kasutajakogemuse analüüs</Link></li>
                      <li><Link className="nav-link nav-link-sub" style={{ color: isActive("arvutite-riistvara-ja-võrgud") }} to="/moodulid#arvutite-riistvara-ja-võrgud" onClick={handleClose}>arvutite riistvara ja võrgud</Link></li>
                      <li><Link className="nav-link nav-link-sub" style={{ color: isActive("programmeerimise-alused") }} to="/moodulid#programmeerimise-alused" onClick={handleClose}>programmeerimise alused</Link></li>
                      <li><Link className="nav-link nav-link-sub" style={{ color: isActive("projektijuhtimise-alused") }} to="/moodulid#projektijuhtimise-alused" onClick={handleClose}>projektijuhtimise alused</Link></li>
                      <li><Link className="nav-link nav-link-sub" style={{ color: isActive("varasemalt-läbitud-ained") }} to="/moodulid#varasemalt-läbitud-ained" onClick={handleClose}>varasemalt läbitud ained</Link></li>
                      <li><Link className="nav-link nav-link-sub" style={{ color: isActive("karjääriplaneerimine-ja-ettevõtlus") }} to="/moodulid#karjääriplaneerimine-ja-ettevõtlus" onClick={handleClose}>karjääriplaneerimine ja ettevõtlus</Link></li>
                      <li><Link className="nav-link nav-link-sub" style={{ color: isActive("arenguportfoolio-loomine-ja-tesitamine") }} to="/moodulid#arenguportfoolio-loomine-ja-tesitamine" onClick={handleClose}>arenguportfoolio loomine ja esitamine</Link></li>
                    </ul>

                  }

                  <li><Link className="nav-link" style={{ color: isActive("praktika") }} to="/praktika" onClick={handleClose}>PRAKTIKA</Link></li>
                  <li><Link className="nav-link" style={{ color: isActive("koolitused") }} to="/koolitused" onClick={handleClose}>KOOLITUSED</Link></li>
                  <li>
                    <Link className="nav-link" style={{ color: isActive("eneserefleksioon") }} to="/eneserefleksioon" onClick={handleClose}>ENESEREFLEKSIOON</Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid style={{ width: "100%", height: "10%" }}></Grid>
          </Box>
        </Dialog>
      </Grid>
    </Grid>
  )
}
