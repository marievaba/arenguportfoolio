import { Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid } from '@mui/material';
import React from 'react';
import image from "./pilt.jpg";
import './App.css';
import CustomButton from "./CustomButton";
import { useStyles } from "./styles";


function App() {
  const classes = useStyles();

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

        <CustomButton>Enesetutvustus</CustomButton>
        <CustomButton>Moodulid</CustomButton>
        <CustomButton>Praktika</CustomButton>
        <CustomButton>Koolitused</CustomButton>
        <CustomButton>Eneserefleksioon</CustomButton>
      </Grid>

      <Grid
        container
        sm={12}
        className={classes.marginTop}
      >
        <Grid
          container
          className={classes.pilt}
          sm={5}
        >
          <Grid
            sm={12}
            className={classes.pilt}
          >
            <img className={classes.image} src={image} />
          </Grid>
          <Grid
            className={classes.pilt}
            sm={12}
          >
            <CustomButton>CV</CustomButton>
          </Grid>
        </Grid>

        <Grid
          sm={7}
          className={classes.sisu}
        >
          <Typography
            className={classes.typo}
          >
            mina olen Marie
          </Typography>
          <p className={classes.sisutekst}>
            Mina olen Marie, 23. Õpin kasutajakogemuse disaini nooremspetsialistiks Tartu Rakenduslikus Kolledžis. Eelnevalt õppisin Tartu Kunstikoolis kujundusgraafikuks ja aastakese Järvamaa Kutsehariduskeskuses hobuhooldajaks.<br></br>
            Tahan luua ilusaid ja kergesti kasutatavaid lahendusi. Esimese kursuse praktika sooritasin Saksamaal, tänu sellele saan hakkama uutes olukordades ja võõrastes keskkondades. Ma ei karda suhelda ja vajadusel abi küsida. Minu eesmärgiks on õppida võimalikult palju UX/UI kohta, saada tagasisidet ja selle põhjal areneda.<br></br>
            Otsutasin antud eriala valida, sest mulle meeldib asju ise teha ja kohe tulemusi näha ning ITs on tulevik, ma ei taha elu lõpuni töötada klienditeeninduses.. Varasem kogemus on minimaalne, Kunstikoolis tutvusime natuke HTMLi ja CSSiga.<br></br>
            Mulle meeldib väga ka tänavakunst ja sõbrannaga teeme kleepse nimega Libutigu. Kunstikoolis osalesin kursusekaaslasega COOP toidukunsti võistlusel ja ka võitsime selle.
          </p>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
