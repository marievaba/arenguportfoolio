import { Grid, Tooltip, useMediaQuery } from '@mui/material';
import { Typography } from "@material-ui/core";
import image from "../pilt.jpg";
import linkedin from "../linkedin.png";
import CustomButton from "../CustomButton";
import { useStyles } from "../styles";

const Enesetutvustus = () => {
    const classes = useStyles();
    const atLeastSm = useMediaQuery('(min-width:600px)');
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
                    <CustomButton>
                        <a className={classes.cvLink} href="https://docs.google.com/document/d/1KZA6vrWZoDUC6Ljf9sStSW41s0_8Y0oUHMGqYg5O-DE/edit?usp=sharing" target="_blank">cv</a>
                    </CustomButton>
                    <CustomButton>
                        <a className={classes.cvLink} href="https://ee.linkedin.com/in/marie-vabam%C3%A4gi-b6a36818b" target="_blank">linkedin </a>
                    </CustomButton>
                </Grid>
            </Grid>

            <Grid
                sm={atLeastSm ? 7 : 12}
                className={`${atLeastSm ? classes.sisu : classes.sisuResponsive} 
                ${ atLeastSm ? "" : classes.contentMargin}`}
            >
                <Typography
                    className={classes.typo}
                >
                    mina olen Marie
                </Typography>
                
                <p className={classes.sisutekst}>
                    Õpin kasutajakogemuse disaini nooremspetsialistiks Tartu Rakenduslikus Kolledžis. Eelnevalt õppisin Tartu Kunstikoolis kujundusgraafikuks ja aastakese Järvamaa Kutsehariduskeskuses hobuhooldajaks.<br></br>
                    Esimese kursuse praktika sooritasin Saksamaal, tänu sellele saan hakkama uutes olukordades ja võõrastes keskkondades. Ma ei karda suhelda ja vajadusel abi küsida. Minu eesmärgiks on õppida võimalikult palju, saada tagasisidet ja selle põhjal areneda.<br></br>
                    Otsutasin antud eriala valida, sest mulle meeldib asju ise teha ja kohe tulemusi näha ning ITs on tulevik ning ma ei taha elu lõpuni töötada klienditeeninduses. Varasem kogemus oli minimaalne, Kunstikoolis tutvusime natuke HTMLi ja CSSiga.<br></br>
                    Mulle meeldib väga ka tänavakunst ja sõbrannaga teeme kleepse nimega
                    <a className={classes.link} target="blank" href="https://www.instagram.com/libutigu/?hl=en"> Libutigu</a>
                </p>
                
            </Grid>
        </Grid>
    )
}
export default Enesetutvustus