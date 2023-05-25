import React, { useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { useStyles } from "../styles";
import { useLocation } from 'react-router-dom';
import { useRef } from "react";
import { ABTestimine, Animatsioonid, ArenguportfoolioEsitamine, ArvutivõrkudeAlused, AsjaajamiseAlused, Bootstrap, DisainiKavandamine, ErialaneMatemaatika, EttevõtluseAlused, GoogleAnalyticsKasutamine, GraafilineDisainJaMultimeedia, HTMLjaCSS, ITKorraldus, ITSüsteemideRiistvara, ITÕigus, InfoturbeAlused, IntervjuuKoostamine, KarjääriplaneerimiseAlused, KasutajakogemuseAnalüüsiAlused, MeeskonnatööAlused, ObjektorienteeritudProgrammeerimine, Operatsioonisüsteemid, ProgrammeerimiseAlused, ProjektihalduseAlused, ReklaamiPsühholoogia, SissejuhatusTarkvaraarendusse, SisuhaldusSüsteemid, StruktuuriKavand, SuhtlemiseAlused2, SuhtlemisePsühholoogilineAnalüüs, SuhtlemisÕpetus, TestimiseAlused, Töökeskkonnaohutus, TöötamiseÕiguslikudAlused, UIDisain, VahenditeKasutaminePrototüüpimiseks, Veebihaldus, VeebitehnoloogiadJaKujundusvahendid, Versioonihaldus, VisandiLoomine } from './AlamMoodulid';
import { SideBar } from '../components/SideBar';
import { GoUpButton } from '../components/GoUpButton';

const Moodulid = () => {
  const classes = useStyles();
  const veebiarendusRef = useRef(null);
  const kasutajakogemusRef = useRef(null);
  const psühholoogiaRef = useRef(null);
  const riistvaraRef = useRef(null);
  const programmeerimiseRef = useRef(null);
  const projektijuhtimiseRef = useRef(null);
  const ainedRef = useRef(null);
  const karjääriplaneerimineRef = useRef(null);
  const arenguportfoolioRef = useRef(null);

  // @ts-ignore
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  const location = useLocation();
  useEffect(() => {
    const url = decodeURI(window.location.href.replace(window.location.origin, ""));  
    switch (url) {
      case "/moodulid#veebikujundus": {
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      }
      case "/moodulid#veebiarendus-ja-veebihaldus": {
        handleScroll(veebiarendusRef);
        break;
      }
      case "/moodulid#kasutajakogemuse-analüüs": {
        handleScroll(kasutajakogemusRef);
        break;
      }
      case "/moodulid#psühholoogia-ja-suhtlemine": {
        handleScroll(psühholoogiaRef);
        break;
      }
      case "/moodulid#arvutite-riistvara-ja-võrgud": {
        handleScroll(riistvaraRef)
        break;
      }
      case "/moodulid#programmeerimise-alused": {
        handleScroll(programmeerimiseRef)
        break;
      }
      case "/moodulid#projektijuhtimise-alused": {
        handleScroll(projektijuhtimiseRef)
        break;
      }
      case "/moodulid#karjääriplaneerimine-ja-ettevõtlus": {
        handleScroll(karjääriplaneerimineRef)
        break;
      }
      case "/moodulid#varasemalt-läbitud-ained": {
        handleScroll(ainedRef)
        break;
      }
      case "/moodulid#arenguportfoolio-loomine-ja-esitamine": {
        handleScroll(arenguportfoolioRef)
        break;
      }
      default: window.scrollTo({ top: 0 });
    }
}, [location]);

  return (
    <>
      <GoUpButton />
      <SideBar />
      <Grid
        container
        md={12}
        spacing={{ xs: 0, md: 4 }}
        style={{ paddingLeft: 300 }}
        className="moodulid-content"
      >
        <Grid className="veebikujundus-title" item md={12}>
          <Typography className={`${classes.typoCenter} h1-header`}>
            veebikujundus
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Animatsioonid />
          <Grid className={classes.padding} />
          <DisainiKavandamine />
          <Grid className={classes.padding} />
          <Bootstrap />
          <Grid className={classes.padding} />

          <UIDisain />
        </Grid>
        <Grid item md={6}>
        <Grid className="mobile-divider" />
          <VeebitehnoloogiadJaKujundusvahendid />

          <Grid className={classes.padding} />
          <HTMLjaCSS />
          <Grid className={classes.padding} />
          <VisandiLoomine />
          <Grid className={classes.padding} />
          <StruktuuriKavand />
          <Grid className={classes.padding} />
          <TestimiseAlused />

        </Grid>

        <Grid item md={12} ref={veebiarendusRef}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={`${classes.typoCenter} h1-header`}>
            veebiarendus ja veebihaldus
          </Typography>
        </Grid>
        <Grid item md={6}>
          <SissejuhatusTarkvaraarendusse />
          <Grid className={classes.padding} />
          <Versioonihaldus />
          <Grid className={classes.padding} />
          <VahenditeKasutaminePrototüüpimiseks />
        </Grid>
        <Grid item md={6}>
        <Grid className="mobile-divider" />
          <SisuhaldusSüsteemid />
          <Grid className={classes.padding} />
          <ITÕigus />
          <Grid className={classes.padding} />
          <Veebihaldus />
        </Grid>

        <Grid item md={12} ref={kasutajakogemusRef}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={`${classes.typoCenter} h1-header`}>
            kasutajakogemuse analüüs
          </Typography>
        </Grid>
        <Grid item md={6}>
          <GoogleAnalyticsKasutamine />
          <Grid className={classes.padding} />
          <KasutajakogemuseAnalüüsiAlused />
        </Grid>
        <Grid item md={6}>
        <Grid className="mobile-divider" />
          <IntervjuuKoostamine />
          <Grid className={classes.padding} />
          <ABTestimine />
        </Grid>

        <Grid item md={12} ref={psühholoogiaRef}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={`${classes.typoCenter} h1-header`}>
            psühholoogia ja suhtlemine
          </Typography>
        </Grid>
        <Grid item md={6}>
          <SuhtlemiseAlused2 />
          <Grid className={classes.padding} />
          <SuhtlemisePsühholoogilineAnalüüs />
        </Grid>
        <Grid item md={6}>
        <Grid className="mobile-divider" />
          <ReklaamiPsühholoogia />
        </Grid>

        <Grid item md={12} ref={riistvaraRef}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={`${classes.typoCenter} h1-header`}>
            arvutite riistvara ja võrgud
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Operatsioonisüsteemid />
          <Grid className={classes.padding} />
          <ITSüsteemideRiistvara />
        </Grid>
        <Grid item md={6}>
        <Grid className="mobile-divider" />
          <InfoturbeAlused />
          <Grid className={classes.padding} />
          <ArvutivõrkudeAlused />
        </Grid>

        <Grid item md={12} ref={programmeerimiseRef}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={`${classes.typoCenter} h1-header`}>
            programmeerimise alused
          </Typography>
        </Grid>
        <Grid item md={6}>
          <ErialaneMatemaatika />
          <Grid className={classes.padding} />
          <ProgrammeerimiseAlused />
        </Grid>
        <Grid item md={6}>
        <Grid className="mobile-divider" />
          <ObjektorienteeritudProgrammeerimine />
        </Grid>

        <Grid item md={12} ref={projektijuhtimiseRef}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={`${classes.typoCenter} h1-header`}>
            projektijuhtimise alused
          </Typography>
        </Grid>
        <Grid item md={6}>
          <ITKorraldus />
          <Grid className={classes.padding} />
          <ProjektihalduseAlused />
        </Grid>
        <Grid item md={6}>
        <Grid className="mobile-divider" />
          <MeeskonnatööAlused />
        </Grid>

        

        <Grid item md={12} ref={karjääriplaneerimineRef}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={`${classes.typoCenter} h1-header`}>
            karjääriplaneerimine ja ettevõtlus
          </Typography>
        </Grid>
        <Grid item md={6}>
          <AsjaajamiseAlused />
          <Grid className={classes.padding} />
          <KarjääriplaneerimiseAlused />
          <Grid className={classes.padding} />
          <Töökeskkonnaohutus />
        </Grid>
        <Grid item md={6}>
        <Grid className="mobile-divider" />
          <EttevõtluseAlused />
          <Grid className={classes.padding} />
          <SuhtlemisÕpetus />
          <Grid className={classes.padding} />
          <TöötamiseÕiguslikudAlused />
        </Grid>
        
        <Grid item md={12} ref={ainedRef}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={`${classes.typoCenter} h1-header`}>
            varasemalt läbitud ained
          </Typography>
        </Grid>
        <Grid item md={12}>
          <GraafilineDisainJaMultimeedia />
        </Grid>

        <Grid item md={12} ref={arenguportfoolioRef}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={`${classes.typoCenter} h1-header`}>
            arenguportfoolio loomine ja esitamine
          </Typography>
        </Grid>
        <Grid style={{paddingBottom: 60}} item md={12}>
          <ArenguportfoolioEsitamine />
        </Grid>
        {/* <Grid item md={6}>

        </Grid> */}

      </Grid>
    </>
  )
}

export default Moodulid;