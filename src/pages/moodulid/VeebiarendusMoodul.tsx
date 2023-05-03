import React from 'react';
import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useStyles } from "../../styles";

const Praktika = () => {
  const classes = useStyles();


  return (
    <><Typography
          className={classes.typoCenter}
          id="veebiarendus"
      >
          veebiarendus ja veebihaldus
      </Typography><Grid className={classes.shortDivider} /><Grid item xs={5}>
              <Typography
                  className={classes.alampealkiri}
              >
                  sissejuhatus tarkvaraarendusse
              </Typography>
              <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised infosüsteemi arendamise etappidest. Kursuse sisuks on infosüsteemi elutsükkel, persoona ja kasutaja lugu, prototüüpimine, andmemudel ning protsessimudel. Lõime persoonasid ja koostasime kasutajalugusid. Panime saadud tulemuste põhjal paberile kirja e-poe nõuded ja koostasime kavandi, edasi tegime Moqups keskkonnas mockupi. Tutvusime andme- ja protsessimudelitega ning koostasime need Gliffy keskkonnas
              </p>
          </Grid><Grid item xs={5}>
          </Grid><Grid className={classes.shortDivider} /><Grid item xs={5}>
              <Typography
                  className={classes.alampealkiri}
              >
                  sisuhaldusüsteemid
              </Typography>
              <p className={classes.sisutekst}>
                  Õppisin selles aines kasutama WordPressi. Kirjutama postitusi, muutma lehe välimust, looma ja muutma menüüd, kasutama pluginaid ja looma e-poodi. XAMPP veebiserveri paigalduse juhend - Ülesandeks oli luua juhend mille järgi saaks XAMPP lokaalse veebiserveri paigaldada oma arvutisse. Õppisin paigalduse ära. E-poe disainikavand - Ülesandeks oli luua prototüübina kavand enda e-poe jaoks. Tegin mobiilivaatele. Õppisin looma erinevaid vaateid Adobe XD´s. E-pood - Ülesandeks oli luua toimiv e-pood. 10 toodet, igast tootest 2 vaadet. Õppisin kasutama WooCommerce pluginat. Disainitrendide lahendus - Ülesandeks oli valida kaks veebisaiti, millega need tegelevad ja milliseid disainitrende seal kasutatud on. Nägin erinevaid disainitrende ja kuidas neid kasutatud on.
              </p>
          </Grid><Grid item xs={5}>
          </Grid><Grid className={classes.shortDivider} /><Grid item xs={5}>
              <Typography
                  className={classes.alampealkiri}
              >
                  versioonihaldus
              </Typography>
              <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised versioonihaludsest ning tutvume erinevate keskkondadega. Õpime Githubis repo ja uue branchi loomist ning käsurealt muudatusi Githubi lisama. Pidime võrdlema kahte versioonihalduse programmi. Õppisime kasutama Githubi ja Giti, kasutade vahel liikumist, branchide loomist ja kloonimist. Lisaks õppisime käsurealt toimetama.
              </p>
          </Grid><Grid item xs={5}>
          </Grid><Grid className={classes.shortDivider} /><Grid item xs={5}>
              <Typography
                  className={classes.alampealkiri}
              >
                  veebihaldus
              </Typography>
              <p className={classes.sisutekst}>
                  Loob veebiserveri lähtudes lähteülesande olevatest funktsionaalsetest nõuetest; haldab veebiserverit seadistades haldusvahendeid. Lõime Ubuntu serveri, installisime Apache ja paigaldasime Wordpress'i.
              </p>
          </Grid><Grid item xs={5}>
          </Grid><Grid className={classes.shortDivider} /><Grid item xs={5}>
              <Typography
                  className={classes.alampealkiri}
              >
                  vahendite kasutamine prototüüpimiseks, arendusraamistikud
              </Typography>
              <p className={classes.sisutekst}>
                  Internetipanga kasutajaliidese loomine enda poolt valitud vahenditega ja tutvumine arendusraamistik Vue'ga.
                  Kasutatud vahendid: Figma ja Visual Studio code.
              </p>
          </Grid><Grid item xs={5}>
          </Grid><Grid className={classes.shortDivider} /><Grid item xs={5}>
              <Typography
                  className={classes.alampealkiri}
              >
                  IT Õigus
              </Typography>
              <p className={classes.sisutekst}>
                  Lähtub kasutajaliidese haldamisel õiguslikest alustest; seostab kasutajate erinevaid juurdepääsuõigusi lepingus sätestatuga; kasutab litsentseerimise põhimõtteid vastavalt õiguslikele alustele. Grupitööna tegime esitluse krüptorahast.
              </p>
          </Grid><Grid item xs={5}>
          </Grid></>
  )
}

export default Praktika;