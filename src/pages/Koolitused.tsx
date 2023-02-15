import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useStyles } from "../styles";

const Koolitused = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            sm={12}
            className={classes.marginTop}
        ><Grid
            sm={5}
            className={`${classes.sisu} ${classes.contentMargin}`}
        >
                <Typography
                    className={classes.typo}
                >
                    Õppekäik Tartu Kunstimuuseumisse 25.03.2022
                </Typography>
                <p className={classes.sisutekst}>
                    Giidiga tuur näitustel: Ludmilla Siim „Olemise helk“, Lilly Walther  „Piiritu“, Nele Tiidelepp „Keda saab ainult igatseda”.
                </p>

                <Grid className={classes.shortDivider} />

                <Typography
                    className={classes.typo}
                >
                    Õppekäik disaini ja tarkvaraarenduse ettevõttesse <a className={classes.link} target="blank" href="https://www.redwall.ee/en/"> Redwall</a>
                </Typography>
                <p className={classes.sisutekst}>
                    15.03.2021 Osalesin õppekäigul ettevõttesse Redwall. Õppekäiku viis läbi ettevõtte projektijuht Kristel Orusalu. Selgitas meile, kuidas nende ettevõttes toimetatakse, milliseid inimesi nad oma kollektiivi otsivad ja mis protsessid käiakse läbi ühe projekti loomisel. Õppekäik oli meeldiv ja informatiivne.
                </p>
                
                <Grid className={classes.shortDivider} />

                <Typography
                    className={classes.typo}
                >
                    Õppekäik tarkvaraarenduse ettevõttesse Navinmedia
                </Typography>
                <p className={classes.sisutekst}>
                    09.03.2021 Osalesin õppekäigul ettevõttesse Navinmedia. Õppekäiku viis läbi ettevõtte asutaja ja tegevjuht Keirin Rebane. Rääkis lähemalt, kuidas nende ettevõtte toimib, millised on nende eeldused UX disainerile, kes üldse on UX disainer ning milliste erinevate klienditüüpidega on ta kokku puutunud. Õppekäik oli väga tore ja informatiivne.
                </p>

                <Grid className={classes.shortDivider} />

                <Typography
                    className={classes.typo}
                >
                    Õppekäik <a className={classes.link} target="blank" href="https://www.nope.ee/"> Nope</a>  ja <a className={classes.link} target="blank" href="https://play.ee/"> GotoandPlay</a> ettevõttesse
                </Typography>
                <p className={classes.sisutekst}>
                    15.10.2021 külastasime disaini ettevõtet Nope Creative ja tarkvaraarenduse ettevõtet GotoandPlay. Mõlemad firmaf asuvad sama katuse all ja teevad koostööd. Õppekäiku viis läbi Nope ettevõtte müügi- ja projektijuht Kristel-Maria Kadajane. Ta rääkis meile lähemalt, kuidas ettevõtte toimib ja milliste omadustega disainereid nad oma tiimi ootavad. Lisaks näitas ta meile mõningaid ettevõtte projekte ning kuidas nad erinevates protsessides toimetavad.
                </p>
            </Grid>

            <Grid
                sm={5}
                className={`${classes.sisu} ${classes.contentMargin}`}
            >
                <Typography
                    className={classes.typo}
                >
                    Learn w <a className={classes.link} target="blank" href="https://nortal.com/"> Nortal</a> 13.02.2023
                </Typography>
                <p className={classes.sisutekst}>
                    Writing and maintaining clean code.
                    Code organisation, naming conventions and refactoring techniques.
                </p>


                <Grid className={classes.shortDivider} />

                <Typography
                    className={classes.typo}
                >
                    Overalli koolitus "Värvihaldus"
                </Typography>
                <p className={classes.sisutekst}>
                    Overalli koolitust 29.10.2021 viis läbi üks Overalli töötajatest. Tutvustas meile värvihaldust, rääkisime lähemalt meelepetest, silma värvitajust, värvipimedusest ning erinevatest värvidest ja seadmetest. Nägime ära, kuidas toimub ekraani värvide kalibreerimine vastavate vahenditega.
                </p>

                <Grid className={classes.shortDivider} />

                <Typography
                    className={classes.typo}
                >
                    Google koolitus "Leia uusi kliente. Mõistlik ja kulutõhus videokampaania Youtubes"

                </Typography>
                <p className={classes.sisutekst}>
                    14.10.2021 Google koolituse raames saime teadmised digiturnudusest Youtubes. Rääkisime lähemalt, kuidas ennast reklaamida, kuidas teha seda kõige optimaalsemalt ning kuidas püüda klientide tähelepanu.
                </p>
            </Grid>
        </Grid>
    )
}
export default Koolitused