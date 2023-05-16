import React, { useEffect } from 'react';
import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useStyles } from "../styles";
import libutigu from "../images/libutigu7.png";
import libutigu2 from "../images/libutigu5.png";

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
          Olles lõpetanud varasemalt Tartu Kunstikooli, tahtsin eriala kus saaks eelnevaid teadmisi kasutada. Lisaks tahtsin kindlasti IT eriala.<br></br>
          Esimesel aastal alustasime kohe HTML & CSS õppimist, olin sellega varasemalt natuke kokku puutunud. Aine oli ülimalt põhjalik ja õppisin palju. Lisaks kasutasime erinevaid Adobe programme, enamus neist mulle juba tuttavad. Adobe XD oli uus, aga kasutamine väga raske ei ole. Lisaks kirjutasime natuke JavaScripti, olen ka natuke varasemalt kokku puutunud, aga siiani jäi segaseks. Tutvusime erinevate operatsioonisüsteemidega, lammutasime arvutit ja uurisime serverit.<br></br>
          Üks asi millega ma varem ei olnud kokku puutunud oli prototüüpimine, mulle meeldib seda teha, kuigi see on aeganõudev. Kasutasin ka esimest korda WordPressi, palju võimalusi erinevate asjade jaoks. Kasutajakogemuse tunnid olid kõige põnevamad, nüüd tean mis on primary ja secondary button!<br></br>
          Praktikal sain omandatud teadmisi kasutada. Koolis tegin kõik tööd Adobe XDga aga praktikal võtsin eesmärgiks kasutada ainult Figma, et ka see selgeks saaks. Vahepeal on tunne, et pole eriti midagi õppinud, aga tehtud töid vaadates näen, et miskit ikka jäi külge ja uusi teadmisi ning oskusi on omajagu.
        </p>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="50%" src={libutigu} />
      </Grid>
      </Grid>
      
      <Grid
        item
        md={6}
      >
        <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="50%" src={libutigu2} />
      </Grid>
        <Typography
          className={classes.typo}
        >
          teine aasta
        </Typography>
        <p className={classes.sisutekst}>
          Natuke kordasime eelmisel aastal Linuxiga õpitut ja kasutasime uusi käske terminalis. Lõime internetipanga prototüübi ja piilusime teisi portotüüpimise vahendeid. A/B testimise aines oli kõik täiesti uus.<br></br>
          Põhiline rõhk oli praktikakoha leidmisel kuna selleks oli aega ainult viis nädalat. Kirjutasin e-maile, täiendasin oma CVd ja tegin portfoolio. Tunnen end IT maailmas juba natuke kindlamalt, sellele aitab kaasa ka väga hea praktikakoht.<br></br>
          Praktikaperioodi jooksul õppisin arendustiimis töötama, tagasiside põhjal oma tööd muutma, uusi keskkondi ja programme kasutama ning täiendasin oma koodikirjutamise oskuseid. Sain väärtusliku kogemuse erialases töökeskkonnas, omandasin suhtlemise, meeskonnas töötamise ja enesedistsipliini oskusi.<br></br>
          Üldiselt tunnen, et minu areng on olnud suur. Oktoobris olin inimene, kes ei julgenud teha koodis muudatusi, kartes et see lõhub midagi ära. Küsisin iga asjaga abi ja mõnikord ei saanud ka siis aru, mida ma täpselt tegema pean. Täna olen inimene, kes leiab iseseisvalt lahendusi, pakub ise välja ideid ja ei karda enam küsida, kui ei leia midagi üles või täpselt aru ei saa. Lisaks leian koodist üles ka kohti, mille leidmiseks minult abi palutakse. Ma ei anna alla kui kohe lahendust ei leia, võimalusel võtan ette teise pileti, et mõtted eemale saada ja vaatan hiljem probleemi uuesti värskema pilguga.
        </p>
      </Grid>
      
    </Grid >
  )
}
export default Eneserefleksioon