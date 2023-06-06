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
        <Grid className="buttons-container" item style={{ paddingTop: 20 }}>
          <CustomButton style={{ margin: 4 }}>
            <a className={classes.cvLink} href="https://drive.google.com/file/d/1VWjzFrgfKpzMXYCH5ktFBKzC8fs_4M6X/view?usp=sharing" target="_blank">cv</a>
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

        <Typography
          className={classes.typo}
        >
          mina olen <span className="marie-text">Marie</span> <span className="nimi">Vabamägi</span>
        </Typography>

        <p className={classes.sisutekst}>
          ja õpin kasutajakogemuse disaini nooremspetsialistiks Tartu Rakenduslikus Kolledžis. Eelnevalt õppisin Tartu  Kunstikoolis kujundusgraafikuks ja aastakese Järvamaa Kutsehariduskeskuses hobuhooldajaks.<br></br>
          Esimese kursuse praktika sooritasin Saksamaal, tänu sellele saan uutes olukordades ja võõrastes keskkondades hästi hakkama. Teise kursuse praktika läbisin hoopis <i>front-end</i> arendajana. Ma ei karda suhelda ja vajadusel abi küsida. Minu eesmärgiks on õppida võimalikult palju, saada tagasisidet ja selle põhjal areneda.<br></br>
          Valisin kasutajakogemuse disaini nooremspetsialisti eriala, sest mulle meeldib asju ise teha ja kohe tulemusi näha. Arvan, et ITs on tulevik ja ma ei taha elu lõpuni vaid klienditeeninduses töötada. Antud erialal õppides sain iga päevaga aina rohkem aru, kui vähe mind disain tegelikult huvitab.  Sellepärast olen eriti tänulik, et sain spetsialiseerumispraktika läbida arendajana ja leidsin lõpuks töö, mis mulle päriselt pinget pakub. Varasem kogemus oli minimaalne, Kunstikoolis tutvusime natuke <i>HTML</i>'i ja <i>CSS</i>'iga.<br></br>
          Mulle meeldib väga ka tänavakunst ja sõbrannaga teeme kleepse nimega
          <a className={classes.link} target="blank" href="https://www.instagram.com/libutigu/?hl=en"> Libutigu</a>
        </p>

      </Grid>

    </Grid>
  )
}
export default Enesetutvustus