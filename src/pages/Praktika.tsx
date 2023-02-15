import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useStyles } from "../styles";

const Praktika = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      sm={12}
      className={classes.marginTop}
    >
      
      {/* SPETSIALISEERUMISPRAKTIKA */}

      <Grid
        sm={5}
        className={`${classes.sisu} ${classes.contentMargin}`}
      >
        <Typography
          className={classes.typo}
        >
          spetsialiseerumispraktika
        </Typography>
        <p className={classes.sisutekst}>
          Minu spetsialiseerumispraktika toimus vahemikus 10.10.2022 - 23.04.2023 asutuses <a className={classes.link} target="blank" href="https://www.quretec.com/"> Quretec OÜ</a><br></br>
        </p>

        <Grid className={classes.shortDivider}/>
        
        <Typography
          className={classes.typo}
        >
          minu praktika eesmärgid
        </Typography>
        <p className={classes.sisutekst}>
          leida koht mis oleks minu mugavustsoonist väljas<br></br>
          täiendada oma teadmisi ja praktilisi oskusi programmeerimises<br></br>
        </p>

        <Grid className={classes.shortDivider}/>

        <Typography
          className={classes.typo}
        >
          juhendi järgsed eesmärgid
        </Typography>
        <p className={classes.sisutekst}>
          tere
        </p>

      </Grid>

      <Grid
        sm={6}
        className={`${classes.sisu} ${classes.contentMargin}`}
      >
        <Typography
          className={classes.typo}
        >
          juhendaja hinnang
        </Typography>
        <p className={classes.sisutekst}>
          Marju kirjutab siia hästi pika teksti sellest kui tubli ma ikka olen :P
        </p>
      </Grid>


      <Grid className={classes.divider}/>


      {/* TUTVUMISPRAKTIKA */}
      <Grid
        sm={5}
        className={`${classes.sisu} ${classes.contentMargin}`}
      >
        <Typography
          className={classes.typo}
        >
          tutvumispraktika
        </Typography>
        <p className={classes.sisutekst}>
          Minu tutvumispraktika toimus vahemikus 04.04.2022 - 08.05.2022 asutuses <a className={classes.link} target="blank" href="https://www.juston.com/en/home_en/"> JustOn GmbH</a>. Neli nädalat viibisin Saksamaal ja ühe nädala viisin läbi kaugtööna.<br></br>
          Pakkumise sain Tartu Rakendusliku Kolledži rahvusvaheliste suhete koordinaatorilt, kes pakkus välispraktika võimalust. Praktikal oli kaks projekti, mille eesmärkideks olid settlement protsessi optimeerimine ja entry sobitamise informatsiooni kuvamine.
        </p>

        <Grid className={classes.shortDividerLeft}/>

        <Typography
          className={classes.typo}
        >
          minu praktika eesmärgid
        </Typography>
        <p className={classes.sisutekst}>
          saada kogemus välismaal elamises ja erialases töökeskkonnas<br></br>
          täiendada oma teadmisi ja praktilisi oskusi erialaselt<br></br>
          suhelda saksa- ja inglisekeelses keskkonnas<br></br>
          rakendada oma seni omandatud teadmisi ja oskusi tööülesannetes<br></br>
          arendada enesedistsipliini ja iseseisvust
        </p>
        <Grid className={classes.shortDivider}/>

        <Typography
          className={classes.typo}
        >
          juhendi järgsed eesmärgid
        </Typography>
        <p className={classes.sisutekst}>
          rakendada oma seniseid teadmisi töösituatsioonis<br></br>
          arendada sotsiaalseid ja enesekohaseid pädevusi ning meeskonnatöö oskust<br></br>
          leida seoseid koolis õpitu ja töömaailma vahel<br></br>
          täiendada oma teadmisi ja praktilisi oskusi kasutajakogemuse disaini valdkonnas
        </p>

      </Grid>

      <Grid
        sm={6}
        className={`${classes.sisu} ${classes.contentMargin}`}
      >
        <Typography
          className={classes.typo}
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
        
        <Grid className={classes.shortDivider}/>

        <Typography
          className={classes.typo}
        >
          trainee development
        </Typography>
        <p className={classes.sisutekst}>
          <span className={classes.boldInside}>responsibility</span> - self-reliant work<br></br>
          <span className={classes.boldInside}>independence</span> - independent work, own ideas<br></br>
        <span className={classes.boldInside}>communication</span> - reserved, always friendly, self-initiative could be better<br></br>
        <span className={classes.boldInside}>schedule</span> - work was done in the expected time frames<br></br>
        <span className={classes.boldInside}>adaptability</span> - often had to adapt to changed requirements that came up from the daily feedback meetings (multiple solution iterations)<br></br>
        </p>

        

      </Grid>
    </Grid>
  )
}

export default Praktika;