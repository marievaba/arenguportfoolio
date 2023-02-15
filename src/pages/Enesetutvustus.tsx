import { Grid } from '@mui/material';
import { Typography } from "@material-ui/core";
import image from "../pilt.jpg";
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
                    <CustomButton>
                        <a className={classes.cvLink} href="https://docs.google.com/document/d/1KZA6vrWZoDUC6Ljf9sStSW41s0_8Y0oUHMGqYg5O-DE/edit?usp=sharing" target="_blank">cv</a>
                    </CustomButton>
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