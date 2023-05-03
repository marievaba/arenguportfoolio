import React from 'react';
import { Grid} from '@mui/material';
import { Typography } from "@material-ui/core";
import image from "../pilt.jpg";
import linkedin from "../linkedin.png";
import CustomButton from "../CustomButton";
import { useStyles } from "../styles";

const Enesetutvustus = () => {
    const classes = useStyles();
    return (
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
                    <Grid style={{paddingRight:"15px"}}>
                    <CustomButton>
                        <a className={classes.cvLink} href="https://docs.google.com/document/d/1KZA6vrWZoDUC6Ljf9sStSW41s0_8Y0oUHMGqYg5O-DE/edit?usp=sharing" target="_blank">cv</a>
                    </CustomButton>
                    </Grid>
                    <Grid>
                    <CustomButton>
                        <a className={classes.cvLink} href="https://ee.linkedin.com/in/marie-vabam%C3%A4gi-b6a36818b" target="_blank">linkedin </a>
                    </CustomButton>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                sm={7}
                className={`${classes.sisu} `}
            >
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