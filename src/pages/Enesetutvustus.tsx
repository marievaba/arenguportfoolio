import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Typography } from "@material-ui/core";
import image from "../pilt.jpg";
import CustomButton from "../CustomButton";
import { useStyles } from "../styles";

const Enesetutvustus = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  });

  const classes = useStyles();
  return (
    <Grid container md={12}>
      <Grid container md={5} alignItems="center" direction="column" style={{
        paddingTop: 100
      }}>
        <img className={classes.image} src={image} />
        <Grid item style={{paddingTop: 20}}>
          <CustomButton style={{ margin: 4}}>
            <a className={classes.cvLink} href="https://docs.google.com/document/d/1KZA6vrWZoDUC6Ljf9sStSW41s0_8Y0oUHMGqYg5O-DE/edit?usp=sharing" target="_blank">cv</a>
          </CustomButton>
          <CustomButton style={{ margin: 4}}>
            <a className={classes.cvLink} href="https://github.com/marievaba" target="_blank">github </a>
          </CustomButton>
          <CustomButton style={{ margin: 4}}>
            <a className={classes.cvLink} href="https://ee.linkedin.com/in/marie-vabam%C3%A4gi-b6a36818b" target="_blank">linkedin </a>
          </CustomButton>
        </Grid>
      </Grid>

      <Grid
        md={7}
        direction="column"
        justifyContent="center"
        sx={{paddingTop: {xs: "20px", md: "60px"}}}
      >
        <svg style={{
          position: "absolute",
          left: 200,
          top: 0,
          overflow: "hidden",
          zIndex: "-1",
        }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F17E92" d="M42,-46C53.1,-31,59.7,-15.5,59.9,0.3C60.2,16,54.1,32,43,40.1C32,48.3,16,48.6,2.9,45.7C-10.2,42.8,-20.4,36.7,-33.1,28.5C-45.9,20.4,-61.1,10.2,-67.3,-6.1C-73.4,-22.4,-70.3,-44.9,-57.6,-59.9C-44.9,-74.9,-22.4,-82.4,-3.5,-79C15.5,-75.5,31,-61,42,-46Z" transform="translate(100 100)" />
        </svg>

        <Typography
          className={classes.typo}
        >
          tere!
        </Typography>

        <p className={classes.sisutekst}>
          <p className={classes.alampealkiri}>Mina olen Marie</p> ja õpin kasutajakogemuse disaini nooremspetsialistiks Tartu Rakenduslikus Kolledžis. Eelnevalt õppisin Tartu Kunstikoolis kujundusgraafikuks ja aastakese Järvamaa Kutsehariduskeskuses hobuhooldajaks.<br></br>
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