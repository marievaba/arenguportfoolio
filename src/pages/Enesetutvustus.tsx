import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Typography } from "@material-ui/core";
import image from "../images/pilt.jpg";
import CustomButton from "../components/CustomButton";
import { useStyles } from "../styles";
import libutigu from "../images/libutigu0.png";

const Enesetutvustus = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  });

  const classes = useStyles();
  return (
    <Grid
      className="home-content"
      container
      md={12}
    >
      <Grid container md={5} className="img-container" alignItems="center" direction="column" style={{
      }}>
        <img className={classes.image} src={image} />
        <Grid item style={{ paddingTop: 20 }}>
          <CustomButton style={{ margin: 4 }}>
            <a className={classes.cvLink} href="https://docs.google.com/document/d/1KZA6vrWZoDUC6Ljf9sStSW41s0_8Y0oUHMGqYg5O-DE/edit?usp=sharing" target="_blank">cv</a>
          </CustomButton>
          <CustomButton style={{ margin: 4 }}>
            <a className={classes.cvLink} href="https://github.com/marievaba" target="_blank">github </a>
          </CustomButton>
          <CustomButton style={{ margin: 4 }}>
            <a className={classes.cvLink} href="https://ee.linkedin.com/in/marie-vabam%C3%A4gi-b6a36818b" target="_blank">linkedin </a>
          </CustomButton>
        </Grid>

      </Grid>

      <Grid
        md={7}
        item
        direction="column"
        justifyContent="center"
        sx={{ paddingTop: { xs: "20px", md: "60px" } }}
      >
        <Grid className="libutigu-bg-img" style={{
          position: "absolute",
          left: 350,
          top: 20,
          overflow: "hidden",
          zIndex: "-1",
          opacity: "0.2"
        }} >
          <img width="75%" src={libutigu} />
        </Grid>

        <Typography
          className={classes.typo}
        >
          tere!
        </Typography>

        <p className={classes.sisutekst}>
          <p className={classes.alampealkiri}>mina olen Marie</p> ja õpin kasutajakogemuse disaini nooremspetsialistiks Tartu Rakenduslikus Kolledžis. Eelnevalt õppisin Tartu Kunstikoolis kujundusgraafikuks ja aastakese Järvamaa Kutsehariduskeskuses hobuhooldajaks.<br></br>
          Esimese kursuse praktika sooritasin Saksamaal, tänu sellele saan hakkama uutes olukordades ja võõrastes keskkondades. Teise kursuse praktika läbisin hoopis front-end arendajana. Ma ei karda suhelda ja vajadusel abi küsida. Minu eesmärgiks on õppida võimalikult palju, saada tagasisidet ja selle põhjal areneda.<br></br>
          Otsutasin antud eriala valida, sest mulle meeldib asju ise teha ja kohe tulemusi näha ning ITs on tulevik ning ma ei taha elu lõpuni töötada klienditeeninduses.  Antud eriala õppides sain aga iga päevaga aina rohkem aru kui vähe mind tegelikult disain huvitab. Sellepärast olen eriti tänulik, et sain spetsialiseerumispraktika läbida arendajana ja leida lõpuks asja mis mulle ka päriselt pinget pakub. Varasem kogemus oli minimaalne, Kunstikoolis tutvusime natuke HTMLi ja CSSiga.<br></br>
          Mulle meeldib väga ka tänavakunst ja sõbrannaga teeme kleepse nimega
          <a className={classes.link} target="blank" href="https://www.instagram.com/libutigu/?hl=en"> Libutigu</a>
        </p>

      </Grid>

    </Grid>
  )
}
export default Enesetutvustus