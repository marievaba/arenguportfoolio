import React, { useEffect } from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import CustomButton from "../CustomButton";
import { useStyles } from "../styles";
import { useRef } from "react";
import visand from "../visand.jpg";
import mummud from "../mummmud.jpg";
import reklaam from "../reklaam.jpg";
// @ts-ignore
import video from "../comp1.mp4";
// @ts-ignore
import video1 from "../putukad.mp4";
import { ABTestimine, Animatsioonid, ArenguportfoolioEsitamine, ArvutivõrkudeAlused, AsjaajamiseAlused, Bootstrap, DisainiKavandamine, ErialaneMatemaatika, EttevõtluseAlused, GoogleAnalyticsKasutamine, GraafilineDisainJaMultimeedia, HTMLjaCSS, ITKorraldus, ITSüsteemideRiistvara, ITÕigus, InfoturbeAlused, IntervjuuKoostamine, KarjääriplaneerimiseAlused, KasutajakogemuseAnalüüsiAlused, MeeskonnatööAlused, ObjektorienteeritudProgrammeerimine, Operatsioonisüsteemid, ProgrammeerimiseAlused, ProjektihalduseAlused, ReklaamiPsühholoogia, SissejuhatusTarkvaraarendusse, SisuhaldusSüsteemid, StruktuuriKavand, SuhtlemiseAlused2, SuhtlemisePsühholoogilineAnalüüs, SuhtlemisÕpetus, TestimiseAlused, Töökeskkonnaohutus, TöötamiseÕiguslikudAlused, UIDisain, VahenditeKasutaminePrototüüpimiseks, Veebihaldus, VeebitehnoloogiadJaKujundusvahendid, Versioonihaldus, VisandiLoomine } from './moodulid/VeebiarendusMoodul';

function Moodulid() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  });

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
  return (
    <>
      <Grid style={{ position: "fixed", top: 90, left: 0, width: 250, padding: "20px 0 0 40px" }}>
        <CustomButton fullWidth={true} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Veebikujundus
        </CustomButton>
        <CustomButton fullWidth={true} onClick={() => handleScroll(veebiarendusRef)}>
          Veebiarendus ja veebihaldus
        </CustomButton>
        <CustomButton fullWidth={true} onClick={() => handleScroll(kasutajakogemusRef)}>
          Kasutajakogemuse analüüs
        </CustomButton>
        <CustomButton fullWidth={true} onClick={() => handleScroll(psühholoogiaRef)}>
          Psühholoogia ja suhtlemine
        </CustomButton>
        <CustomButton fullWidth={true} onClick={() => handleScroll(riistvaraRef)}>
          Arvutite riistvara ja võrgud
        </CustomButton>
        <CustomButton fullWidth={true} onClick={() => handleScroll(programmeerimiseRef)}>
          Programmeerimise alused
        </CustomButton>
        <CustomButton fullWidth={true} onClick={() => handleScroll(projektijuhtimiseRef)}>
          Projektijuhtimise alused
        </CustomButton>
        <CustomButton fullWidth={true} onClick={() => handleScroll(ainedRef)}>
          varasemalt läbitud ained
        </CustomButton>
        <CustomButton fullWidth={true} onClick={() => handleScroll(karjääriplaneerimineRef)}>
          Karjääriplaneerimine ja ettevõtlus
        </CustomButton>
        <CustomButton fullWidth={true} onClick={() => handleScroll(arenguportfoolioRef)}>
          Arenguportfoolio loomine ja esitamine
        </CustomButton>
      </Grid>
      <Grid
        container
        md={12}
        spacing={4}
        style={{ paddingLeft: 300 }}
      >
        <Grid item md={12} style={{ paddingTop: 60 }}>
          <Typography className={classes.typoCenter}>
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

        <Grid item md={12}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={classes.typoCenter}>
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
          <SisuhaldusSüsteemid />
          <Grid className={classes.padding} />
          <ITÕigus />
          <Grid className={classes.padding} />
          <Veebihaldus />
        </Grid>

        <Grid item md={12}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={classes.typoCenter}>
            kasutajakogemuse analüüs
          </Typography>
        </Grid>
        <Grid item md={6}>
          <GoogleAnalyticsKasutamine />
          <Grid className={classes.padding} />
          <KasutajakogemuseAnalüüsiAlused />

        </Grid>

        <Grid item md={6}>
          <IntervjuuKoostamine />
          <Grid className={classes.padding} />
          <ABTestimine />
        </Grid>

        <Grid item md={12}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={classes.typoCenter}>
            psühholoogia ja suhtlemine
          </Typography>
        </Grid>
        <Grid item md={6}>
          <SuhtlemiseAlused2 />
          <Grid className={classes.padding} />
          <SuhtlemisePsühholoogilineAnalüüs />
        </Grid>
        <Grid item md={6}>
          <ReklaamiPsühholoogia />
        </Grid>

        <Grid item md={12}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={classes.typoCenter}>
            arvutite riistvara ja võrgud
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Operatsioonisüsteemid />
          <Grid className={classes.padding} />
          <ITSüsteemideRiistvara />

        </Grid>
        <Grid item md={6}>
          <InfoturbeAlused />
          <Grid className={classes.padding} />

          <ArvutivõrkudeAlused />
        </Grid>

        <Grid item md={12}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={classes.typoCenter}>
            programmeerimise alused
          </Typography>
        </Grid>
        <Grid item md={6}>
          <ErialaneMatemaatika />
          <Grid className={classes.padding} />
          <ProgrammeerimiseAlused />
        </Grid>
        <Grid item md={6}>
          <ObjektorienteeritudProgrammeerimine />
        </Grid>

        <Grid item md={12}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={classes.typoCenter}>
            projektijuhtimise alused
          </Typography>
        </Grid>
        <Grid item md={6}>
          <ITKorraldus />
          <Grid className={classes.padding} />
          <ProjektihalduseAlused />
        </Grid>
        <Grid item md={6}>
          <MeeskonnatööAlused />
        </Grid>

        <Grid item md={12}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={classes.typoCenter}>
            varasemalt läbitud ained
          </Typography>
        </Grid>
        <Grid item md={12}>
          <GraafilineDisainJaMultimeedia />
        </Grid>
        {/* <Grid item md={6}>

        </Grid> */}

        <Grid item md={12}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={classes.typoCenter}>
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
          <EttevõtluseAlused />
          <Grid className={classes.padding} />
          <SuhtlemisÕpetus />
          <Grid className={classes.padding} />
          <TöötamiseÕiguslikudAlused />
        </Grid>

        <Grid item md={12}>
          <Grid className={classes.shortDividerBlack} />
          <Typography className={classes.typoCenter}>
            arenguportfoolio loomine ja esitamine
          </Typography>
        </Grid>
        <Grid item md={12}>
          <ArenguportfoolioEsitamine />
          <Grid className={classes.padding} />
        </Grid>
        {/* <Grid item md={6}>

        </Grid> */}

      </Grid>
    </>
  )
}

export default Moodulid;