import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useStyles } from "../styles";

const Eneserefleksioon = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            sm={12}
            className={classes.marginTop}
        >
            <Grid
                sm={12}
                className={`${classes.sisu} ${classes.contentMargin}`}
            >
                <Typography
                    className={classes.typo}
                >
                    esimene aasta
                </Typography>
                <p className={classes.sisutekst}>
                    Olles lõpetanud varasemalt Tartu Kunstikooli, tahtsin eriala kus saaks eelnevaid teadmisi kasutada. Lisaks tahtsin kindlasti IT eriala.<br></br>
                    Esimesel aastal alustasime kohe HTML & CSS õppimist, olin sellega varasemalt natuke kokku puutunud. Aine oli ülimalt põhjalik ja õppisin palju. Lisaks kasutasime erinevaid Adobe programme, enamus neist mulle juba tuttavad. Adobe XD oli uus, aga kasutamine väga raske ei ole. Lisaks kirjutasime natuke JavaScripti, olen ka natuke varasemalt kokku puutunud, aga siiani jäi segaseks. Tutvusime erinevate operatsioonisüsteemidega, lammutasime arvutit ja uurisime serverit.<br></br>
                    Üks asi millega ma varem ei olnud kokku puutunud oli prototüüpimine, mulle meeldib seda teha, kuigi see on aeganõudev. Kasutasin ka esimest korda WordPressi, palju võimalusi erinevate asjade jaoks. Kasutajakogemuse tunnid olid kõige põnevamad, nüüd tean mis on primary ja secondary button!<br></br>
                    Praktikal sain omandatud teadmisi kasutada. Koolis tegin kõik tööd Adobe XDga aga praktikal võtsin eesmärgiks kasutada ainult Figma, et ka see selgeks saaks. Vahepeal on tunne, et pole eriti midagi õppinud, aga tehtud töid vaadates näeb, et miskit ikka jäi külge ja uusi teadmisi ning oskusi on omajagu.

                </p>
            </Grid>

            <Grid className={classes.divider}/>

            <Grid
                sm={12}
                className={`${classes.sisu} ${classes.contentMargin}`}
            >
                <Typography
                    className={classes.typo}
                >
                    teine aasta
                </Typography>
                <p className={classes.sisutekst}>
                Natuke kordasime eelmisel aastal Linuxiga õpitut ja kasutasime uusi käske terminalis. Lõime internetipanga prototüübi ja piilusime teisi portotüüpimise vahendeid. A/B testimise aines oli kõik täiesti uus.<br></br>
                Põhiline rõhk oli praktikakoha leidmisel kuna selleks oli aega ainult viis nädalat. Kirjutasin e-maile, täiendasin oma CVd ja tegin portfoolio. Tunnen end IT maailmas juba natuke kindlamalt, sellele aitab kaasa ka väga hea praktikakoht.

                </p>
            </Grid>
        </Grid>
    )
}
export default Eneserefleksioon