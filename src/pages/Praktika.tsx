import React, { useEffect } from 'react';
import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useStyles } from "../styles";
import libutigu from "../images/libutigu1.png";
import libutigu1 from "../images/libutigu3.png";
import lugemisvaade from "../images/lugemisvaade.png";
import muutmisvaade from "../images/muutmisvaade.png";
import proto from "../images/proto.png";
import proto1 from "../images/proto1.png";
import tabelid from "../images/tabelid.png";
import CustomButton from '../components/CustomButton';

const Praktika = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  });

  const classes = useStyles();
  return (
    <Grid
      className="app-content praktika-body"
      container
      md={12}
      spacing={4}
    >
      {/* SPETSIALISEERUMISPRAKTIKA */}
      <Grid
        item
        md={6}
      >
        <Typography
          className={`${classes.typo} h1-header-praktika`}
        >
          spetsialiseerumispraktika
        </Typography>
        <p className={classes.sisutekst}>
          Minu spetsialiseerumispraktika toimus vahemikus 10.10.2022 - 21.04.2023 asutuses <a className={classes.link} target="blank" href="https://www.quretec.com/"> Quretec OÜ </a> Praktikakoha leidsin tänu tutvustele ja Tartu Rakendusliku Kolledži praktikakohtade nimekirjale.
        </p>
        <CustomButton style={{ margin: 4 }}>
          <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1_qMiPXZKCB2cQxtJ1A4bQaHCqH5S51Pdp_e7GSItzYk/edit?usp=sharing" target="_blank">praktika esitlus</a>
        </CustomButton>

        <Grid className={classes.padding} />

        <Typography
          className={`${classes.typo} h1-header-praktika`}
        >
          minu praktika eesmärgid
        </Typography>
        <p className={classes.sisutekst}>
          •	saada kogemus arendustiimis töötamises<br></br>
          •	täiendada oma teadmisi ja praktilisi oskusi erialaselt<br></br>
          •	saada kogemus erialases töökeskkonnas <br></br>
          •	rakendada oma seni omandatud teadmisi ja oskusi tööülesannetes<br></br>
          •	arendada enesedistsipliini ja iseseisvust<br></br>
          •	täiendada oma koodikirjutamise oskuseid<br></br>
          •	täiendada oma teadmisi ja praktilisi oskusi programmeerimises<br></br>
        </p>

        <Grid className={classes.padding} />

        <Typography
          className={`${classes.typo} h1-header-praktika`}
        >
          juhendijärgsed eesmärgid
        </Typography>
        <p className={classes.sisutekst}>
          •	kinnistada reaalses töösituatsioonis oma seni omandatud kutsealaseid teadmisi ja oskusi kliendipoolsete rakenduste programmeerijana<br></br>
          •	arendada sotsiaalseid ja enesekohaseid pädevusi ning meeskonnatöö oskust<br></br>
          •	leida seoseid koolis õpitu ja töömaailma vahel<br></br>
          •	täiendada oma teadmisi ja praktilisi oskusi kasutajakogemuse disaini valdkonnas<br></br>
          •	parandada oma võtmeoskusi (suhtlemise, probleemilahenduse, ajaplaneerimise-, koostöö- ja õppimisoskusi)<br></br>
        </p>
        <Grid className={classes.padding} />

        <Typography
          className={`${classes.typo} h1-header-praktika`}
        >
          juhendaja hinnang
        </Typography>
        <p className={classes.sisutekst}>
          Praktikant sobib suurepäraselt <i>frontend</i> arendaja rolli. Ta on
          näidanud üles suurt huvi ja entusiasmi veebiarenduse vastu ning
          on väga pühendunud oma oskuste täiendamisele selles
          valdkonnas. Praktikant on väga kiiresti õppinud looma keeruka
          veebirakenduse visuaalselt poolt ning saab edukalt hakkama 
          <i> HTML</i>, <i>CSS</i> ja <i>JavaScript</i> koodi kirjutamisega. Praktikant on
          suutnud kiiresti kohaneda uute tehnoloogiatega ja õppinud uusi
          programmeerimisvahendeid, mis on oluline, et olla edukas
          <i> frontend</i> arendaja. Ta on väga hea meeskonnakaaslane ning
          suudab hästi koostööd teha erinevate meeskonnaliikmetega, et
          tagada projekti ülesannete täitmine. Ta on väga täpne ja
          tähelepanelik, mis on veebiarenduse valdkonnas kahtlemata
          oluline omadus. Praktikant sobib väga hästi antud erialal
          töötamiseks, mida näitab ka see, et ta jätkab tulevikus meie
          ettevõttes töötajana.
        </p>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <img width="60%" src={libutigu} />
        </Grid>
      </Grid>


      <Grid
        item
        md={6}
      >
        <Grid>
          <Typography
            className={`${classes.typo} h1-header-praktika`}
          >
            praktikal tehtud tööd
          </Typography>
          <p><b>Kirjeldamise muutmisvaade</b> <br></br>
            Kirjeldamine on museaali kirjeldus, kus on erinevad alamkategooriad: identifitseeritavad andmed, füüsiline kirjeldus, seisukorra ja eritingimuste andmed, märgid ja tekstid objektil, sündmused, seosed ja viited, kasutusõiguste andmed, administratiivsed toimingud, muuseumisisene märkus ning failid.<br></br>
            Minu ülesandeks oli kõikides nendes alamkategooriates viia elemendid vastavusse UI kontseptsiooniga. Näiteks pealkirjade, sisestusväljade, nuppude, valikuväljade, tabelite ning kõikide teiste elementide paigutused, värvid ja stiilid.
          </p>
          <img width="100%" src={muutmisvaade} />

          <Grid className={classes.padding} />

          <p> <b>Kirjeldamise lugemisvaade</b> <br></br>
            Kirjeldamise lugemisvaatele saab kasutaja juhul, kui avab objekti, millele muuseumis kasutajal objektide kirjeldamise õigust pole, ehk siis kasutaja ei saa midagi muuta, aga saab vaadata eelnevalt sisestatud infot.<br></br>
            Lugemisvaate tegemise jaoks oli vaja kõikidele elementidele tingimusega lisada klassid.
            Pidin peitma kõik nupud ja kõik sisestusväljad ning valikuväljad juhul kui neil ei ole sisu.
            Raadionupud ja märkeruudud läksid ka peitu, kuvati ainult nendes valitud sisu.
          </p>

          <img width="100%" src={lugemisvaade} />

          <Grid className={classes.padding} />

          <p><b>Tabelid</b> <br></br>

            Tabelitega tegelesin mitmes erinevas väiksemas ja suuremas piletis.
            Üks suur muudatus olid detailfiltrite asukoht, need pidid olema samal joonel sisuga, mille tegi raskeks koodist õige koha leidmine.<br></br>
            Teine suurem muudatus oli töölaua tabeli pealkirjas lugemata teadete arvu kuvamine, selle lahenduseks otsisin abi internetist – päringule maksimum vastuste arvu lisamine.

          </p>

          <img width="100%" src={tabelid} />
        </Grid>
      </Grid>

      <Grid className="desktop-only" item md={12}>
        <Grid className={classes.shortDividerBlack} />
      </Grid>

      {/* TUTVUMISPRAKTIKA */}
      <Grid
        item
        md={6}
      >
        <Typography
          className={`${classes.typo} h1-header-praktika`}
        >
          tutvumispraktika
        </Typography>
        <p className={classes.sisutekst}>
          Minu tutvumispraktika toimus vahemikus 04.04.2022 - 08.05.2022 asutuses <a className={classes.link} target="blank" href="https://www.juston.com/en/home_en/"> JustOn GmbH</a>. Neli nädalat viibisin Saksamaal ja ühe nädala läbisin kaugtööna.<br></br>
          Välispraktika võimalust pakkus mulle Tartu Rakendusliku Kolledži rahvusvaheliste suhete koordinaator. Praktikal oli kaks projekti, mille eesmärkideks olid <i>settlement</i> protsessi optimeerimine ja <i>entry</i> sobitamise protsess.
        </p>
        <CustomButton style={{ margin: 4 }}>
          <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1OdWvR2VNg-1ZFuuUnroBrT3RWrsUYWyBfBMH8Fm__WA/edit?usp=sharing" target="_blank">praktika esitlus</a>
        </CustomButton>

        <Grid className={classes.padding} />

        <Typography
          className={`${classes.typo} h1-header-praktika`}
        >
          minu praktika eesmärgid
        </Typography>
        <p className={classes.sisutekst}>
          •	saada kogemus välismaal elamises ja erialases töökeskkonnas<br></br>
          •	täiendada oma teadmisi ja praktilisi oskusi erialaselt<br></br>
          •	suhelda saksa- ja inglisekeelses keskkonnas<br></br>
          •	rakendada oma seni omandatud teadmisi ja oskusi tööülesannetes<br></br>
          •	arendada enesedistsipliini ja iseseisvust
        </p>
        <Grid className={classes.padding} />

        <Typography
          className={`${classes.typo} h1-header-praktika`}
        >
          juhendijärgsed eesmärgid
        </Typography>
        <p className={classes.sisutekst}>
          •	rakendada oma seniseid teadmisi töösituatsioonis<br></br>
          •	arendada sotsiaalseid ja enesekohaseid pädevusi ning meeskonnatöö oskust<br></br>
          •	leida seoseid koolis õpitu ja töömaailma vahel<br></br>
          •	täiendada oma teadmisi ja praktilisi oskusi kasutajakogemuse disaini valdkonnas
        </p>

        <Grid className={classes.padding} />

        <Typography
          className={`${classes.typo} h1-header-praktika`}
        >
          juhendaja hinnang
        </Typography>
        <p className={classes.sisutekst}>
          Has knowledge of the principles and methods of conducting user experience (UX) analysis: basics good, learned new principles (e.g. personas)<br></br>
          Explaines web development goals based on the initial input/incentive/objective/goal and carried out UX tests (accordingly): good, brought up ideas for suitable solutions<br></br>
          Familiarizes themselves with and applied, when possible, the web technologies and design tools used by the organization (where the internship was carried out): good, learned about Salesforce UI and Salesforce UI Kit by herself<br></br>
          Writes structured and optimized CSS and semantic HTML code using W3C standard and/or any other code standards that were agreed upon: was not part of the internship, instead creation of wire frames & prototypes with figma was done very good<br></br>
          Participates in web development teamwork projects: good, daily meeting and presentation of daily results in the team<br></br>
        </p>


        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <img width="20%" src={libutigu1} />
          <img width="20%" src={libutigu1} />
          <img width="20%" src={libutigu1} />
          <img width="20%" src={libutigu1} />
          <img width="20%" src={libutigu1} />
        </Grid>
      </Grid>

      <Grid
        item
        md={6}
      >

        <Typography
          className={`${classes.typo} h1-header-praktika`}
        >
          praktikal tehtud tööd
        </Typography>
        <p><b><i>Settlement</i> protsessi optimeerimine</b> <br></br>
          Alustasin erinevate jooniste tegemisega, kuhu nupud ja tekst paigutada ning mida kuvada. Kõige suuremaks katsumuseks oli protsessi näitamine kasutajale, selleks joonistasin erinevaid indikaatoreid. Pidin koostama kasutajalood, et saaksin paremini aru, mida muuta. Oluline oli, et kasutajal oleks võimalikult lihtne kogu protsess läbida.<br></br>
          Esimese versiooni tegin ilma värvideta ja panin paika tähtsamate elementide asukohad. Juhendajalt tagasiside saades lisasin värvid, muutsin asukohti ja leidsime, et kasutajal peaks olema valik, kui palju infot korraga  kuvada. Avastasin, et <i>Figma</i>'s on olemas <i>Salesforce UI kit</i> ja tänu sellele sain palju kiiremini ja lihtsamalt edasi töötada. Proovisin erinevaid protsessi indikaatoreid ja juhendaja valis parima lahenduse. Tagasiside saades muutsin info kuvamise elemente ja lisasin ikoonid, millel hiirega hõljudes näeb veel lisaks informatsiooni.
        </p>
        <img width="100%" src={proto1} />

        <Grid className={classes.padding} />

        <p><b><i>Entry</i> sobitamise protsess</b> <br></br>
          Järgmises projektis keskendusin ühele osale eelmisest. Ülesandeks oli kasutajale kuvada <i>entry</i> sobitamise protsess. Esimese asjana lugesin põhjalikumat kirjeldust, tegin konspekti ja esimesed kavandid. Arutasime juhendajaga, mida lisada ja kuidas seda visualiseerida.<br></br>
          Esimese lahendusena pakkusin välja tabeli <i>entry</i> valimiseks ja info kuvamiseks ning teise lahendusena kaardid. Juhendajaga nõu pidades otsustasime esimese kasuks. Töötasin sellega edasi ja lisasin võimaluse kuvada rohkem või vähem informatsiooni. Arutasime erinevaid visuaalseid võimalusi ning valisime välja ikoonid, mida kasutada. Lõpuks muutsin veel väärtuste asukohta, lisasin <i>IBAN</i>'i ja järjestasin info protsendi väärtuse alusel.

        </p>
        <img width="100%" src={proto} />

      </Grid>
    </Grid>
  )
}

export default Praktika;