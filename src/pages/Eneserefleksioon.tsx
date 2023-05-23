import React, { useEffect } from 'react';
import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useStyles } from "../styles";
import libutigu from "../images/libutigu7.png";
import libutigu1 from "../images/libutigu6.png";
import libutigu2 from "../images/libutigu5.png";
import eelmine from "../images/eelmine.png";

const Eneserefleksioon = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  });

  const classes = useStyles();
  return (
    <Grid
      className="app-content"
      container
      md={12}
      spacing={4}
    >
      <Grid
        item
        md={6}
      >
        <Typography
          className={classes.typo}
        >
          esimene aasta
        </Typography>
        <p className={classes.sisutekst}>
          Olles varasemalt lõpetanud Tartu Kunstikooli, tahtsin õppida erialal, kus saaksin oma varasemaid teadmisi kasutada. Lisaks tahtsin kindlasti õppida IT erialal.<br></br>
          Esimesel aastal alustasime kohe <i>HTML & CSS</i> õppimist, olin sellega varasemalt natuke kokku puutunud. Aine oli ülimalt põhjalik ja õppisin palju. Lisaks kasutasime erinevaid <i>Adobe</i> programme, enamus neist mulle juba tuttavad. <i>Adobe XD</i> oli uus, aga kasutamine väga raske ei ole. Lisaks kirjutasime natuke <i>JavaScript</i>'i, millega olen ka varem kokku puutunud, aga see jäi mulle segaseks. Tutvusime erinevate operatsioonisüsteemidega, lammutasime arvutit ja uurisime serverit.<br></br>
          Varem polnud ma kokku puutunud prototüüpimisega. See on küll aeganõudev, aga mulle meeldib seda teha. Kasutasin ka esimest korda <i>WordPress</i>'i, palju võimalusi erinevate asjade jaoks. Kasutajakogemuse tunnid olid kõige põnevamad, nüüd tean mis on <i>primary</i> ja <i>secondary</i> nupp!<br></br>
          Praktikal olin Saksamaal ettevõttes  <a className={classes.link} target="blank" href="https://www.juston.com/en/home_en/"> JustOn GmbH,</a> kus sain omandatud teadmisi kasutada. Koolis tegin kõik tööd <i>Adobe XD</i>'ga aga praktikal võtsin eesmärgiks kasutada ainult <i>Figma</i>, et ka see selgeks saaks. Vahepeal on tunne, et pole eriti midagi õppinud, aga tehtud töid vaadates näen, et miskit ikka jäi külge ja uusi teadmisi ning oskusi on omajagu.
          
        </p>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <img width="100%" src={eelmine} />
          </Grid>
          <Grid>
          <p className={classes.sisutekst}>Esimesel aastal loodud arenguportfoolio.</p>
          </Grid>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <img width="45%" src={libutigu} />
        </Grid>
      </Grid>
      
      <Grid
        item
        md={6}
      >
        <Grid className="eneseref-tigu-desktop" style={{ display: "flex", justifyContent: "center" }}>
          <img width="50%" src={libutigu2} />
        </Grid>
        <Typography
          className={classes.typo}
        >
          teine aasta
        </Typography>
        <p className={classes.sisutekst}>
          Natuke kordasime eelmisel aastal <i>Linux</i>'iga õpitut ja kasutasime uusi käske terminalis. Lõime internetipanga prototüübi ja piilusime teisi prototüüpimise vahendeid. A/B testimise aines oli kõik täiesti uus.<br></br>
          Põhiline rõhk oli praktikakoha leidmisel, kuna selleks oli aega ainult viis nädalat. Kirjutasin e-maile, täiendasin oma CVd ja tegin portfoolio. Praktikakoha sain ettevõttes <a className={classes.link} target="blank" href="https://www.quretec.com/"> Quretec OÜ. </a><br></br>
          Praktikaperioodi jooksul õppisin arendustiimis töötama, tagasiside põhjal oma tööd muutma, uusi keskkondi ja programme kasutama ning täiendasin oma koodikirjutamise oskuseid. Sain väärtusliku kogemuse erialases töökeskkonnas, omandasin suhtlemise, meeskonnas töötamise ja enesedistsipliini oskusi.<br></br>
          Kuna kasutajakogemusega seotud ülesandeid oli vähe, siis otsustasin mitte kasutada sisuhaldussüsteeme (näiteks <i>Google Sites</i> või <i>WordPress</i>). Kirjutasin oma arenguportfoolio ise nullist valmis kasutades <i>HTML</i>, <i>CSS</i>, <i>JavaScript</i>, <i>React</i> ja <i>Material UI</i>. Kõigeks selleks kasutasin oma UX/UI teadmisi ja omandatud koodikirjutamise oskuseid. Lasin korduvalt oma loodud portfooliot testida tuttavatel, arendajal ja ka juhendajal. Saadud tagasiside põhjal viisin sisse täiendused ja parandused. Lisaks kasutan igapäevaselt ka oma töös <i>Material UI</i>'d, mis on kasutajaliidese disaini raamistik.<br></br>
          Üldiselt tunnen, et minu areng on olnud suur. Oktoobris olin inimene, kes ei julgenud teha koodis muudatusi, kartes et see lõhub midagi ära. Küsisin iga asjaga abi ja mõnikord ei saanud ka siis aru, mida ma täpselt tegema pean. Täna olen inimene, kes leiab iseseisvalt lahendusi, pakub ise välja ideid ja ei karda enam küsida, kui ei leia midagi üles või täpselt aru ei saa. Lisaks leian koodist üles ka kohti, mille leidmiseks minult abi palutakse. Ma ei anna alla kui kohe lahendust ei leia, võimalusel võtan ette teise pileti, et mõtted eemale saada ja vaatan hiljem probleemi uuesti värskema pilguga.
        </p>
      </Grid>
      <Grid className="eneseref-tigu-mobile" style={{ display: "flex", justifyContent: "center" }}>
        <img width="50%" src={libutigu2} />
      </Grid>
      
    </Grid >
  )
}
export default Eneserefleksioon