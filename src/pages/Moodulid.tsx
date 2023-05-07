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
    <Grid
      container
      sm={12}
    >
      <Grid container spacing={2}>
        <Grid item xs={2} style={{ position: "fixed", top: 90, left: 0 }}>
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
        <Grid item xs={10} style={{ paddingLeft: 250 }}>
          <Grid className={classes.sisuPadding}>
            <Typography
              className={classes.typoCenter}
              id="veebikujundus"
            >
              veebikujundus
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  animatsioonid
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised töömaailmas kasutatavatest veebitehnoloogiatest ja kujundusvahenditest.
                  Kasutatud vahendid: After Effects ja Media Encoder.
                </p>
              </Grid>
              <Grid item xs={6}>
                <>
                  <video width="320" height="240" controls>
                    <source src={video} type="video/mp4" />
                  </video>
                  <video width="320" height="240" controls>
                    <source src={video1} type="video/mp4" />
                  </video>
                </>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  bootstrap
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised töömaailmas kasutatvatest veebitehnoloogiatest ja kujundusvahenditest.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/bootstrap/1018/iseseisev/" target="_blank">veebileht kassidele</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/bootstrap/1026/" target="_blank">veebileht</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  disaini kavandamine ja prototüüpimine
                </Typography>
                <p className={classes.sisutekst}>
                  Veebidisaini kavandamise etapid. Prototüüpimise protsess. Erinevat liiki prototüüpimine (ühekordne, evolutsiooniline, lisanduv). Disaini nõuded ja juhised. Nõuete kogumine. Prototüüpimise plaan. Prototüübi funktsionaalsus. Üldise kirjelduse loomine. Prototüüpimise keeled ja tööriistad. Esialgsete kavandite loomine ja esitlemine.
                  Kasutatud vahendid: Adobe XD
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://xd.adobe.com/view/26aceeee-3bb7-4666-88b2-713b0343713e-73ff/" target="_blank">don't make me think</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://xd.adobe.com/view/c72e66fa-3f1c-4b91-89d2-0913ae32985a-927d/" target="_blank">graafilise disaini ajalugu</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  HTML ja CSS
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised töömaailmas kasutatvatest veebitehnoloogiatest ja kujundusvahenditest. Õpime HTML ja CSS abil veebilehe loomist, lähtudes W3C standardist ja kokkulepitud koodistandartitest.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/HTML%20&%20CSS/1005/iseseisev/" target="_blank">trükifirma koduleht</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/HTML%20&%20CSS/0930/" target="_blank">talvesport veebileht</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/HTML%20&%20CSS/0916/iseseisev/" target="_blank">kosmosereisid veebileht</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  veebitehnoloogiad ja kujundusvahendid
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames uurime erinevate kujundus- ja prototüüpimisvahendite kohta, viime kurssi end veebikujundus trendidega ja täiendame oma teadmisi erinevate veebitehnoloogiate osas.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1RkW2Uenj8e_t7IoUqHPWmWmfv5AwppnDIPn3jms0jf8/present?slide=id.p" target="_blank">wireframe, mockup & prototype</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1qlupf4qaOsntdSOQ-v3egk4DGCuR2HJ8rTXEPw7roH8/present?slide=id.p" target="_blank">veebikujunduse trendid</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  visandi loomine
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised piktogrammidest, ligatuuridest ja monogrammidest. Samuti räägime Bikablost ja teostame iga teema kohta ülesande.
                </p>
              </Grid>
              <Grid item xs={6}>
                <img width="320" height="240" src={visand} />
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  struktuurikavand
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised veebirakenduste kujundamisest.Loome high fidelty prototüübi ja õpime pixel perfect designi.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://xd.adobe.com/view/e88779c3-3857-4260-86fb-282409323e33-bdd4/?fullscreen&hints=off" target="_blank">pixel perfect disain</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://xd.adobe.com/view/5140bb87-4a92-45d9-8a28-2fc446ac7042-0413/?fullscreen&hints=off" target="_blank">veebipood banaanidele</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container spacing={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  testimise alused
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised kasutuskogemuse testi põhimõtetest. Aine jooksul viime läbi testi mõnel enda koostatud prototüübil. Lasin kasutajatel testida enda aasta tegija võistlustööd, tagasiside oli positiivne ja muudatusi sisse ei viinud.
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M42,-46C53.1,-31,59.7,-15.5,59.9,0.3C60.2,16,54.1,32,43,40.1C32,48.3,16,48.6,2.9,45.7C-10.2,42.8,-20.4,36.7,-33.1,28.5C-45.9,20.4,-61.1,10.2,-67.3,-6.1C-73.4,-22.4,-70.3,-44.9,-57.6,-59.9C-44.9,-74.9,-22.4,-82.4,-3.5,-79C15.5,-75.5,31,-61,42,-46Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  UI disain
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised visualiseerimise, kompositsiooni ja stiliseerimise kohta.  Ülesande teostamisel kasutame Adobe Illustarorit. Illustaratsioon raamatule.
                </p>
              </Grid>
              <Grid item xs={6}>
                <img width="320" height="320" src={mummud} />
              </Grid>
            </Grid>

            <Grid className={classes.shortDividerBlack} ref={veebiarendusRef} />

            <Typography
              className={classes.typoCenter}
            >
              veebiarendus ja veebihaldus
            </Typography>
            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  sissejuhatus tarkvaraarendusse
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised infosüsteemi arendamise etappidest. Kursuse sisuks on infosüsteemi elutsükkel, persoona ja kasutaja lugu, prototüüpimine, andmemudel ning protsessimudel. Lõime persoonasid ja koostasime kasutajalugusid. Panime saadud tulemuste põhjal paberile kirja e-poe nõuded ja koostasime kavandi, edasi tegime Moqups keskkonnas mockupi. Tutvusime andme- ja protsessimudelitega ning koostasime need Gliffy keskkonnas
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M25.2,-45.2C32.8,-39.2,39.2,-32.7,48.5,-25.1C57.8,-17.5,70,-8.8,71,0.6C72.1,10,62,20,55.2,31.9C48.4,43.8,44.8,57.5,36.1,64C27.4,70.6,13.7,69.9,-0.3,70.3C-14.3,70.8,-28.6,72.5,-40.4,67.9C-52.3,63.2,-61.7,52.1,-65.8,39.7C-70,27.3,-69,13.7,-69.9,-0.5C-70.8,-14.7,-73.6,-29.4,-67.5,-38.6C-61.5,-47.8,-46.7,-51.4,-33.9,-54.5C-21.2,-57.5,-10.6,-59.9,-0.9,-58.3C8.8,-56.7,17.6,-51.2,25.2,-45.2Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  sisuhaldusüsteemid
                </Typography>
                <p className={classes.sisutekst}>
                  Õppisin selles aines kasutama WordPressi. Kirjutama postitusi, muutma lehe välimust, looma ja muutma menüüd, kasutama pluginaid ja looma e-poodi. XAMPP veebiserveri paigalduse juhend - Ülesandeks oli luua juhend mille järgi saaks XAMPP lokaalse veebiserveri paigaldada oma arvutisse. Õppisin paigalduse ära. E-poe disainikavand - Ülesandeks oli luua prototüübina kavand enda e-poe jaoks. Tegin mobiilivaatele. Õppisin looma erinevaid vaateid Adobe XD´s. E-pood - Ülesandeks oli luua toimiv e-pood. 10 toodet, igast tootest 2 vaadet. Õppisin kasutama WooCommerce pluginat. Disainitrendide lahendus - Ülesandeks oli valida kaks veebisaiti, millega need tegelevad ja milliseid disainitrende seal kasutatud on. Nägin erinevaid disainitrende ja kuidas neid kasutatud on.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/document/d/1hrBuElDJ-wvr-GrNPZ_lIvs2p6bS2eenACnNO65QoGQ/edit?usp=sharing" target="_blank">XAMPP lokaalne veebiserver</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://xd.adobe.com/view/357302aa-52c1-4a03-8551-663e40113468-6020/?fullscreen" target="_blank">e-poe disainikavand</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  versioonihaldus
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised versioonihaludsest ning tutvume erinevate keskkondadega. Õpime Githubis repo ja uue branchi loomist ning käsurealt muudatusi Githubi lisama. Pidime võrdlema kahte versioonihalduse programmi. Õppisime kasutama Githubi ja Giti, kasutade vahel liikumist, branchide loomist ja kloonimist. Lisaks õppisime käsurealt toimetama.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/document/d/1_m3NeGGlcnVhDSR1GsT1xOo4c4e2YU9h6zwFpRnRxNw/edit?usp=sharing" target="_blank">bitbucket vs github</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  veebihaldus
                </Typography>
                <p className={classes.sisutekst}>
                  Loob veebiserveri lähtudes lähteülesande olevatest funktsionaalsetest nõuetest; haldab veebiserverit seadistades haldusvahendeid. Lõime Ubuntu serveri, installisime Apache ja paigaldasime Wordpress'i.
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M40.9,-67.9C55.1,-62.6,70.3,-56,75.2,-44.4C80.2,-32.9,74.8,-16.5,74.1,-0.4C73.5,15.7,77.4,31.3,71.9,41.7C66.3,52.1,51.2,57.3,37.6,58.5C24,59.6,12,56.8,-1.1,58.7C-14.1,60.5,-28.3,67,-42,65.9C-55.8,64.9,-69.3,56.3,-74.7,44.1C-80.2,31.8,-77.7,15.9,-73.2,2.6C-68.8,-10.8,-62.4,-21.6,-57.2,-34.3C-52.1,-47,-48,-61.6,-38.7,-69.8C-29.4,-78,-14.7,-79.8,-0.7,-78.6C13.3,-77.4,26.6,-73.3,40.9,-67.9Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  vahendite kasutamine prototüüpimiseks, arendusraamistikud
                </Typography>
                <p className={classes.sisutekst}>
                  Internetipanga kasutajaliidese loomine enda poolt valitud vahenditega ja tutvumine arendusraamistik Vue'ga.
                  Kasutatud vahendid: Figma ja Visual Studio code.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://github.com/marievaba/vue3" target="_blank">vue</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://www.figma.com/proto/rn9Y6tCjrtZOvKw7Brd04N/Vahendite-kasutamine-protot%C3%BC%C3%BCpimiseks%2C-arendusraamistikud%2C-EL-%26-MV?node-id=1%3A10&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A10&show-proto-sidebar=1" target="_blank">internetipank</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  IT Õigus
                </Typography>
                <p className={classes.sisutekst}>
                  Lähtub kasutajaliidese haldamisel õiguslikest alustest; seostab kasutajate erinevaid juurdepääsuõigusi lepingus sätestatuga; kasutab litsentseerimise põhimõtteid vastavalt õiguslikele alustele. Grupitööna tegime esitluse krüptorahast.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1Ad3zL-o8AtepYuHai9u_hbIXA8-J-0i9iS4YMvzUUBA/present?slide=id.p" target="_blank">krüptoraha</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDividerBlack} ref={kasutajakogemusRef} />

            <Typography
              className={classes.typoCenter}
            >
              kasutajakogemuse analüüs
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  google analyticsi kasutamine
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised. Google Analyticsi funktsioonidest ja võimalustest. Analyticsi paigaldamine käsitsi ja Wordpress pistikprogrammide abil. Lõime kampaania jaoks UTM tagidega lingi. Lõime ise kampaania oma e-poe lehele ja jälgisime seda. Pidime välja tooma kolm tähtsamat näitajat, koostama dokumendi ja kirjeldama seal mida need teevad ja milleks kasulikud on. Analüüsisime Google Merchandise Store ja selle edukust viimase kahe kuu jooksul.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/document/d/1a51LYmRxMCzd0qlhm6xVT79wxjF-g8oEiMEbMalBt58/edit?usp=sharing" target="_blank">google analytics</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  intervjuu koostamine
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised erialasest intervjuu läbiviimisest lähtuvalt ülesandest ning analüüsitakse tulemusi. Kursuse raames koostame ise intervjuu ja viime läbi. Rääkisime kavntitatiivsest ja kvalitatiivsest uurimis meetodist ning intervjuu eesmärkidest. Pidime valima mingi lehe millele analüüs koostada, koostasin küsimused ja valisin inimesed kellega intervjuud läbi viia. Saadud andmed pidin analüüsima ja koostama diagrammi.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/document/d/1RSZZLbagCL8cOjhpZOZv0Wqmw8ve7RU4uHveJOcEJEg/edit?usp=sharing" target="_blank">intervjuu</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  kasutajakogemuse analüüsi alused
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised kasutajakogemuse analüüsi põhimõtetest. Õpime tundma sihtgruppi ja seda kirjeldama, kasutusmugavuse testi koostamist ja selle läbiviimist ning prototüüpimise aluseid ja prototüübi loomist. Kuulasime loengud erinevatest sihtrühmadest ja pidime leidma ühe reklaami, millel on vale sihtrühm. Valisime reklaamiks Laste Fondi reklaami, pildil oli kujutatud lusikaga laps ja nõudepesukapslid. Kuulasime loengut erinevatest kasutusmugavuse testidest ja viisime ise läbi testi. Olin paaris kursusekaaslasega ja küsisin temalt hinnavaatluse foorumi kasutamise kohta küsimusi, tema küsisi minult Elisa kõnekaartide kohta. Kuulasime loengut prototüüpide loomisest ja tegime koos õpetajaga Figmas e-valimiste programmi kasutajasõbralikumaks.
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M32,-55.2C43.8,-48.6,57.3,-44.7,67.1,-36C76.8,-27.3,82.7,-13.6,84,0.7C85.3,15.1,82,30.3,74,42.1C66,53.9,53.5,62.4,40.4,67.3C27.3,72.3,13.6,73.6,2.6,69.1C-8.4,64.5,-16.7,54,-25.8,46.7C-34.8,39.4,-44.5,35.4,-50.6,28.1C-56.7,20.8,-59.2,10.4,-59.8,-0.3C-60.4,-11.1,-59.1,-22.2,-53.9,-31.1C-48.7,-39.9,-39.7,-46.5,-30,-54.4C-20.4,-62.3,-10.2,-71.7,-0.1,-71.6C10.1,-71.5,20.2,-61.9,32,-55.2Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  A/B testimine
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised testi läbiviimise põhimõtetest ja kasutatavatest vahenditest. Viime iseseisvalt läbi A/B testi lähtuvalt lähteülesandest. Lõime wordpressi lehe ja testisime kahte erinevat lahendust.
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M37.1,-66.2C46,-59.2,49.5,-44.9,58.4,-32.7C67.2,-20.4,81.3,-10.2,81.3,0C81.2,10.2,67,20.3,58.4,33C49.8,45.6,46.8,60.7,38,67.4C29.2,74,14.6,72.2,2.5,67.9C-9.6,63.6,-19.3,56.8,-33.3,53.2C-47.3,49.6,-65.7,49.1,-75.2,40.7C-84.8,32.4,-85.4,16.2,-79,3.7C-72.5,-8.7,-59,-17.5,-52.8,-31.7C-46.7,-45.9,-48,-65.6,-40.4,-73.4C-32.8,-81.2,-16.4,-77.1,-1.1,-75.1C14.1,-73.2,28.3,-73.3,37.1,-66.2Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDividerBlack} ref={psühholoogiaRef} />


            <Typography
              className={classes.typoCenter}
            >
              psühholoogia ja suhtlemine
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  reklaamipsühholoogia
                </Typography>
                <p className={classes.sisutekst}>
                  Reklaami mõju ja roll. Mõjustamispsühholoogia võtted reklaamis. Reklaami tajumine: Tähelepanu ja mäluprotsessid. Veebis reklaamide analüüs ja hindamine. veebi mõjutusvahendite Kuidas võiks teha reklaami?: Tarbijakäitumine. Reklaamistrateegiad. Veebis reklaamikampaania kavandamine. Reklaamitegevuse õiguslik ja eetiline regulatsioon Reklaami analüüs, pidime valima ühe reklaami ja koostama selle kohta analüüsi.  Saadud teadmiste põhjal pidime ise looma reklaami.
                </p>
              </Grid>
              <Grid item xs={6}>
                <img width="240" height="320" src={reklaam} />
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  suhtlemise alused 2
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised suhtlemise ja kommunikatsiooni olemusest. Teeme selgeks efektiivse kommunikatsiooni mõjutajad, suhtlemises kasutatavad mõjutusvõtted, aktiivse kuulamise ja peegeldamise teemad. Pidime koostama video põhjal analüüsi. Täiendama etteantud dokumenti ja koostama küsimusi.
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M38.2,-64.2C49.4,-59.7,58.4,-49.3,67.1,-37.6C75.8,-25.9,84.1,-13,86,1.1C87.9,15.2,83.3,30.3,73.3,39.7C63.3,49.1,47.9,52.7,34.8,54.6C21.7,56.6,10.8,56.8,0.5,55.9C-9.8,55,-19.6,53,-27.9,48.3C-36.1,43.5,-42.8,36,-53.3,27.5C-63.8,19,-78.2,9.5,-82.8,-2.7C-87.5,-14.8,-82.2,-29.6,-72.6,-39.7C-62.9,-49.7,-48.8,-54.9,-36,-58.6C-23.2,-62.2,-11.6,-64.3,0.9,-66C13.5,-67.6,27,-68.8,38.2,-64.2Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  suhtlemise psühholoogiline analüüs
                </Typography>
                <p className={classes.sisutekst}>
                  Suhtlemiskompetentsus ja selle arendamise võimalused. Suhtlemine kui kommunikatsiooniprotsess. Suhtlemisvormid ja suhtlemisvahendid. Suhtlemistõkked. Kuulamine ja kuulamistehnikad ja -tõkked. Tagasisidestamine. Vaatasime erinevaid videoid ja arutlesime koos nende üle. Milliseid suhtlemise viise, mõjutusvõtteid ja näoilmeid me märkasime. Pidime valima ühe video ja seda kirjalikult analüüsima.
                </p>
              </Grid>
              <Grid item xs={6}>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/document/d/1kPZUGCkJTL_FcHTY17rO6vc1L_9jK-FtttclfsvIvSw/edit?usp=sharing" target="_blank">suhtlemisel põhineva salvestuse analüüs</a>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid className={classes.shortDividerBlack} ref={riistvaraRef} />


            <Typography
              className={classes.typoCenter}
            >
              arvutite riistvara ja võrgud
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  arvutivõrkude alused
                </Typography>
                <p className={classes.sisutekst}>
                  Kursusel viisime end kurssi erinevate arvutivõrkude kasutamise põhimõtetega. Võrgunduse alustega tutvumine ja test, tegime erinevaid võrke, lisasime seadmeid ja ühendasime need omavahel. Kasutasime virtuaalmasinat ja Ciscot.
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M24.1,-44.2C31.6,-37.5,38.2,-31.7,49.6,-24.4C61,-17.2,77.3,-8.6,78.7,0.8C80.1,10.2,66.5,20.4,58.4,33.4C50.3,46.4,47.7,62.2,38.9,69.9C30,77.6,15,77.1,1.9,73.9C-11.3,70.6,-22.5,64.5,-35.4,59.2C-48.3,53.9,-62.9,49.3,-71.7,39.5C-80.5,29.8,-83.7,14.9,-85,-0.8C-86.4,-16.4,-85.9,-32.9,-78.2,-44.6C-70.5,-56.4,-55.6,-63.4,-41.3,-66.1C-27.1,-68.9,-13.5,-67.4,-2.6,-62.9C8.3,-58.4,16.7,-50.9,24.1,-44.2Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  infoturbe alused
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised infoturbe põhimõtetest ja kehtivast seadusandlusest. Lõime linux terminalis kataloogi ja pidime selle kopeerima teise arvutisse. Veel pidime kopeerima asju õpetaja arvutisse, looma txt faili, pingima õpetaja arvutit ja kommenteerima käsurealt.
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M30.8,-57.7C40.5,-47.7,49.3,-40.6,58.9,-31.5C68.4,-22.4,78.7,-11.2,81.4,1.5C84.1,14.3,79.1,28.6,72.5,42.7C65.8,56.9,57.4,70.9,45,73.2C32.7,75.5,16.3,66.1,2.6,61.6C-11.1,57.1,-22.3,57.5,-35.6,55.7C-48.9,53.9,-64.3,50,-73,40.3C-81.6,30.7,-83.5,15.3,-79.7,2.2C-75.8,-10.9,-66.2,-21.8,-58.4,-33C-50.6,-44.1,-44.6,-55.5,-35.2,-65.7C-25.8,-75.9,-12.9,-84.8,-1.2,-82.8C10.5,-80.8,21.1,-67.8,30.8,-57.7Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  IT süsteemide riistvara
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised arvutitest ja nendega seotud seadmetest. Võtsime arvuti ja tegime selle lahti, pidime leidma emaplaadi ja vahetama termopastat. Võtsime serveri ja tegime selle lahti, lisasime RAMi ja ühendasime monitoriga ja vaatasime spetsifikatsioone. Õppisime kasutama projektorit. Pidime internetist leidma kuni 3000 euro väärtuses orienteerumise läbiviimiseks tehnikat.
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M31.4,-51.2C43.1,-47.6,56.7,-44.1,67.1,-35.6C77.4,-27.1,84.4,-13.5,82.2,-1.3C80,11,68.7,22.1,61.6,36.2C54.6,50.4,51.8,67.7,42.3,77.9C32.7,88.2,16.4,91.4,0.9,89.7C-14.5,88.1,-29,81.7,-38.9,71.7C-48.7,61.6,-54,47.9,-62.3,35.4C-70.6,22.8,-81.9,11.4,-81.7,0.1C-81.5,-11.2,-69.9,-22.4,-58.6,-29.7C-47.2,-37,-36.3,-40.4,-26.6,-45.3C-16.9,-50.1,-8.4,-56.3,0.7,-57.5C9.8,-58.7,19.6,-54.8,31.4,-51.2Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
              <Grid item xs={6}>
                <Typography
                  className={classes.alampealkiri}
                >
                  operatsioonisüsteemid
                </Typography>
                <p className={classes.sisutekst}>
                  Kursuse raames omandatakse teadmised erinevatest operatsioonsüsteemidest. Windows 10 operatsioonsüsteemi paigaldus. Lõime virtuaalmasina ja paigaldasime sinna Windows10, installisime erinevaid programme ja vaatasime terminali. Linux operatsioonisüsteemi paigaldus. Lõime virtuaalmasina ja paigaldasime sinna Ubuntu, installisime käsurealt erinevaid asju. Mac opertasioonsüsteemi paigaldus. Lõime virtuaalmasina ja paigaldasime sinna MacOS, installisime erinevaid programme ja lisasime kasutajaid
                </p>
              </Grid>
              <Grid item xs={6}>
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F17E92" d="M34.8,-61.8C42.6,-55.8,44.7,-41.4,50.3,-29.7C56,-18,65,-9,71.6,3.8C78.1,16.6,82.1,33.2,75.5,43.1C68.9,53.1,51.7,56.4,37.3,62.2C23,68,11.5,76.3,1,74.6C-9.6,73,-19.2,61.4,-32.5,55C-45.7,48.6,-62.7,47.3,-70.1,39C-77.5,30.7,-75.3,15.3,-76.3,-0.6C-77.4,-16.5,-81.5,-33,-74.9,-42.7C-68.3,-52.4,-50.9,-55.2,-36.7,-57.6C-22.4,-60,-11.2,-61.8,1.2,-63.8C13.5,-65.8,27,-67.9,34.8,-61.8Z" transform="translate(100 100)" />
                </svg>
              </Grid>
            </Grid>

            <Grid className={classes.shortDividerBlack} ref={programmeerimiseRef} />


            <Typography
              className={classes.typoCenter}
            >
              programmeerimise alused
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                erialane matemaatika
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised matemaatilisest loogikast. Õpime positsioonilisi arvusüsteeme, lausearvutust, predikaatarvutust ja tõeväärtustabeli koostamist. Välja mõelda praktilise töö teema, valim, uuritavad tunnused ja küsimused. Viia läbi küsitlus ning selle põhjal koostada analüüsitav andmestik, koostada ja ette kanda esitlus tulemustest.
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1LIASYz6xIPSZUFppP0iwLgmjQ_jPSgPNJucth08lqrI/present?slide=id.p" target="_blank">tartus elamine</a>
                </CustomButton>
            </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                objektorienteeritud programmeerimine
              </Typography>
              <p className={classes.sisutekst}>
                Koostab lähekoodi lähtudes lähteülesande põhjal koostatud plokkskeemist; koostab vigadeta lähekoodi vastavalt programmeerimiskeele reeglitele; kirjeldab koodi tööpõhimõtet vastavalt programmeerimiskeele ülesehitusele.
                Kasutatud vahendid: Virtuaalmasin (Win10) ja Javascript
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://github.com/marievaba/calory_tracker" target="_blank">calorie tracker project</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://github.com/marievaba/weather" target="_blank">weather project</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://github.com/marievaba/oop_books" target="_blank">books project</a>
                </CustomButton>
            </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

           <Grid container md={12}>
           <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                programmeerimise alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised programmeerimise algoritmilistest põhimõtetest. Õpime muutujaid ja andmetüüpe, matemaatilisi operaatoreid, tingimuslauseid ning tsükleid. Loome virtuaalarvuti kooli serveris ja laeme sinna tööks vajalikud programmid. Õppsime JavaScripti põhitõdesid, lõime mitu erinevat programmi.
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://github.com/marievaba/prog_alused/tree/main/iseseisev" target="_blank">tehtud tööd</a>
                </CustomButton>
            </Grid>
           </Grid>

            <Grid className={classes.shortDividerBlack} ref={projektijuhtimiseRef} />

            <Typography
              className={classes.typoCenter}
            >
              projektijuhtimise alused
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                IT korraldus
              </Typography>
              <p className={classes.sisutekst}>
                Organisatsioon ja IT struktuur. Äriorganisatsiooni ja IT struktuuri vahelised seosed. Organisatsiooni eesmärkide mõistmine, kasutajagrupid ja nende vajadused infosüsteemile. Organisatsiooni veebileht. Selle roll ettevõtte toote/teenuse turundamisel (koostöös ettevõtluse aluste teemaga). Infosüsteemi olulisus organisatsiooni tegevuste toimimisel. Kooli infosüsteemi analüüs Grupitööna pidime analüüsima Tartu Rakendusliku Kolledži infosüsteemi. Koostasime veebilehe analüüsi. Lisaks külastasime ettevõtet ja kirjutasime selle kohta raporti.
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/spreadsheets/d/1gcmmSHzxsSrkeNk_ANx-V8FS3t7rDUU5ZuMryDOlNAs/edit?usp=sharing" target="_blank">veebilehe analüüs</a>
                </CustomButton>
                <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/document/d/1OfNoK3OAMW049oxz2nCdooWM8uo68tdcKxDjfp2REoo/edit?usp=sharing" target="_blank">raport</a>
                </CustomButton>
            </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                meeskonnatöö alused
              </Typography>
              <p className={classes.sisutekst}>
                Projektiorganisatsiooni struktuur. Meeskonnatöö projektides. Meeskonnatöö kavandamine ja käivitamine ning meeskonnajuhi tegevused. Koostöövormid, nende põhimõtted ja kasutamine meeskonnatöös. Pidime looma meeskonna ja korraldama kursusele tuuri mõnda ettevõttesse, lisaks pidime kogu protsessi dokumenteerima. Kursuse lõpus pidime leidma meeskonna, kellega lähme üksikule saarele. Eelarveks oli 1500 eurot ja selle raha eest pidime leidma internetist vajalikud vahendid ellujäämiseks.
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/document/d/1haqGsC2PerF-EnHdrSwb7D5IK1MLjSm9Di1ZkRNjiRM/edit?usp=sharing" target="_blank">õppekäik ettevõttesse Redwall</a>
                </CustomButton>
            </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                projektihalduse alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised projektijuhtimisest. Läbime kursuse jooksul projekti eesmärgi, tegevuskava, skoobi ja projektijuhtimise meetodi teemad. SWOT analüüs. Tutvusime erinevate projektijuhtimise meetoditega ja koostasime meeskonnatööna esitluse ühest projektijhtimise meetodist. Pidime valima ühe projektihalduse programmi ja tegema selle kohta esitluse.
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1U49bgFVQzX_FMIJG7bfPzovB4kB-7w8JVoHUV5homJw/present?slide=id.p" target="_blank">koolitusfirma koduleht agile meetodil</a>
                </CustomButton>
            </Grid>
            </Grid>


            <Grid className={classes.shortDividerBlack} ref={ainedRef} />

            <Typography
              className={classes.typoCenter}
            >
              varasemalt läbitud ained
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                graafiline disain & multimeedia toode disain ja tootearendus
              </Typography>
              <p className={classes.sisutekst}>
                Olen lõpetanud Tartu Kunstikooli Kujundaja erialal.
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://marievaba.wixsite.com/mvaba" target="_blank">Tartu Kunstikooli portfoolio</a>
                </CustomButton>
            </Grid>
            </Grid>


            <Grid className={classes.shortDividerBlack} ref={karjääriplaneerimineRef} />

            <Typography
              className={classes.typoCenter}
            >
              karjääriplaneerimine ja ettevõtlus
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                asjaajamise alused
              </Typography>
              <p className={classes.sisutekst}>
                Lähteülesandeks oli luua erialane CV,  praktikakoha taotlemiseks motivatsiooni -ja kaaskiri ning eraldi motivatsioonikiri. Olen kursuse varasemalt läbinud. Koostasime CV, praktikale kandideerimikseks vajalikud dokumendid ja kirjutasime motivatsioonikirja teemal "Kus näen end viie aasta pärast?"
              </p>
            </Grid>
            <Grid item xs={6}>
            <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F17E92" d="M35.6,-65.8C43.8,-56.9,46.7,-42.7,52.1,-30.9C57.5,-19.1,65.5,-9.5,69.5,2.3C73.6,14.2,73.6,28.4,67.2,38.4C60.7,48.4,47.7,54.2,35.4,56.6C23.1,59,11.6,57.9,-2.1,61.6C-15.8,65.2,-31.5,73.6,-44.9,71.8C-58.3,70,-69.2,58.2,-73.7,44.5C-78.2,30.9,-76.1,15.4,-71.4,2.7C-66.6,-9.9,-59.2,-19.9,-53.3,-31.2C-47.5,-42.4,-43.2,-55,-34.6,-63.7C-26,-72.5,-13,-77.4,0.3,-78C13.7,-78.6,27.3,-74.8,35.6,-65.8Z" transform="translate(100 100)" />
</svg>
            </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                ettevõtluse alused & majanduse alused
              </Typography>
              <p className={classes.sisutekst}>
                Olen kursuse varemalt läbinud ja kandsin VÕTAga üle. Kasutasime TOY meetodit. Valisime tiimid ja panime paberile kirja 20 erinevat ideed, sealt valisime kolm parimat ja edasi ühe, millega tegeleda. Tegime liftikõne ja erinevaid esitlusi. Kuruse lõpuks saime oma toote valmis. Selleks oli korgipuu.
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1ml141qCw6NePLjYmfLiw4ad6-KzLX4wHkvDmNG_d6og/present?slide=id.p" target="_blank">korgipuu</a>
                </CustomButton>
            </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                karjääriplaneerimise alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames viime end kurssi kooli infosüsteemiga ja õppetöökorraldusega. Tartu Rakendusliku Kolledži infosüsteemi ja koduleheküljega tutvumine. Töövahendusportaalide info otsimine ja kaardistamine. Pidime leidma erinevaid töökuulutusi ja koostama neist dokumendi.
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://docs.google.com/document/d/1O6h1sxmCYk5UxCgBWxFdf6xc-bqgUV7qTHFCyOJxyUU/edit?usp=sharing" target="_blank">infosüsteem ja kodulehekülg</a>
                </CustomButton>
            </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                suhtlemisõpetus
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisime erinevaid suhtlemise viise ja võtteid. Pidime meeskonnas tegema antireklaami vabalt valitud tootele.
              </p>
            </Grid>
            <Grid item xs={6}>
            <CustomButton style={{ margin: 4 }}>
                  <a className={classes.cvLink} href="https://www.youtube.com/watch?v=axnGtwRLlyg&ab_channel=MarieVabam%C3%A4gi" target="_blank">antireklaam</a>
                </CustomButton>
            </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                töökeskkonnaohutus
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisime erinevaid tööohutuse võtteid ja ergonoomilisi töövahendeid. Pidin koostama esitluse võimalikest örgonoomilistest töövahenditest. Õppisime turvaliselt kasutama redelit.
              </p>
            </Grid>
            <Grid item xs={6}>
            <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F17E92" d="M31,-51.1C43.5,-46.6,59.1,-44.8,68.5,-36.8C77.9,-28.7,81.1,-14.4,78.1,-1.7C75,10.9,65.7,21.7,57.4,31.6C49,41.4,41.5,50.2,32.1,54.8C22.7,59.4,11.3,59.9,-0.7,61.1C-12.8,62.3,-25.5,64.3,-37.2,61C-48.9,57.7,-59.5,49,-69,38C-78.5,27,-86.9,13.5,-83.2,2.1C-79.4,-9.2,-63.6,-18.4,-53.7,-28.7C-43.7,-38.9,-39.6,-50.2,-31.6,-57.3C-23.7,-64.5,-11.8,-67.4,-1.3,-65.2C9.3,-63,18.6,-55.7,31,-51.1Z" transform="translate(100 100)" />
</svg>
            </Grid>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid container md={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.alampealkiri}
              >
                töötamise õiguslikud alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisime erinevaid autoriõiguseid. Pidime valima ühe teose ja seda muutma nii, et sellega ei tekiks autoriõiguse probleeme.
              </p>
            </Grid>
            <Grid item xs={6}>
            <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F17E92" d="M34.1,-63.8C44.1,-53.3,52,-43.9,61.5,-33.5C71.1,-23.1,82.2,-11.5,83.7,0.9C85.3,13.3,77.2,26.6,67.6,36.9C58,47.2,46.9,54.6,35.3,64.2C23.8,73.9,11.9,85.8,1.2,83.8C-9.5,81.7,-19.1,65.6,-27.9,54.4C-36.8,43.3,-44.9,37,-50.3,28.7C-55.7,20.4,-58.4,10.2,-62.1,-2.1C-65.8,-14.5,-70.5,-29,-66.3,-39.3C-62.1,-49.5,-48.8,-55.6,-36.3,-64.6C-23.7,-73.6,-11.9,-85.6,0.1,-85.7C12.1,-85.9,24.1,-74.2,34.1,-63.8Z" transform="translate(100 100)" />
</svg>
            </Grid>
            </Grid>

            <Grid className={classes.shortDividerBlack} ref={arenguportfoolioRef} />

            <Typography
              className={classes.typoCenter}
            >
              arenguportfoolio loomine ja esitamine
            </Typography>

            <Grid className={classes.shortDivider} />

            <p className={classes.sisutekst}>
              Arenguportfoolio loomise kursuse raames õpib õpilane oma erialast arengut analüüsima. Koostame elektroonilise arenguportfoolio põhja, mida iseseivalt hakkame õpingute jooksul täiendama.
              Enesetuvustus arenguportfoolio jaoks. Sissejuhatus ainesse- rääkisime reeglitest, teemadest ja hindamisest. Vaatasime üle, mis on arenguportfoolio, millel see põhineb ning nägime näiteid mõningatest eelmiste aastate töödest. Tunni raames pidin Google Sites looma arenguportfoolio põhja ja tegema valmis portfoolio struktuuri koos enesetutvustusega. Õppisin käsitlema Google Sites'i, varasem kokkupuude puudus. Enestutvustus nähtav portfoolio avalehel. 2. Sisuhaldussüsteemide aine kokkuvõte Alustasin esimese aine kokkuvõtte kirjutamist Google Sites. Tõin välja sisuhaldussüsteemide aine jooksul omandataud teadmised, kirjeldused tehtud töödest ja kasutatud vahenditest. Kokkuvõtte tegemine andis mulle väga hea ülevaate ja selgema pildi kursusest.
            </p>


          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Moodulid;