import React from 'react';
import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useStyles } from "../../styles";
import visand from "../../visand.jpg";
import libutigu0 from "../../libutigu0.png";
import libutigu1 from "../../libutigu1.png";
import libutigu2 from "../../libutigu2.png";
import libutigu3 from "../../libutigu3.png";
import libutigu4 from "../../libutigu4.png";
import libutigu5 from "../../libutigu5.png";
import libutigu6 from "../../libutigu6.png";
import libutigu7 from "../../libutigu7.png";
import mummud from "../../mummmud.jpg";
import reklaam from "../../reklaam.jpg";
// @ts-ignore
import video from "../../putukad.mp4";
import CustomButton from '../../CustomButton';

export const Animatsioonid = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.alampealkiri}>
        animatsioonid
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised töömaailmas kasutatavatest veebitehnoloogiatest ja kujundusvahenditest.
        Kasutatud vahendid: After Effects ja Media Encoder.
      </p>
      <>
        <video width="100%" autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      </>

    </>
  )
}

export const Bootstrap = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        bootstrap
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised töömaailmas kasutatvatest veebitehnoloogiatest ja kujundusvahenditest.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/bootstrap/1018/iseseisev/" target="_blank">veebileht kassidele</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/bootstrap/1026/" target="_blank">veebileht</a>
      </CustomButton>
    </>
  )
}

export const DisainiKavandamine = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        disaini kavandamine ja prototüüpimine
      </Typography>
      <p className={classes.sisutekst}>
        Veebidisaini kavandamise etapid. Prototüüpimise protsess. Erinevat liiki prototüüpimine (ühekordne, evolutsiooniline, lisanduv). Disaini nõuded ja juhised. Nõuete kogumine. Prototüüpimise plaan. Prototüübi funktsionaalsus. Üldise kirjelduse loomine. Prototüüpimise keeled ja tööriistad. Esialgsete kavandite loomine ja esitlemine.
        Kasutatud vahendid: Adobe XD
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://xd.adobe.com/view/c72e66fa-3f1c-4b91-89d2-0913ae32985a-927d/" target="_blank">graafilise disaini ajalugu</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://xd.adobe.com/view/26aceeee-3bb7-4666-88b2-713b0343713e-73ff/" target="_blank">don't make me think</a>
      </CustomButton>
    </>
  )
}

export const HTMLjaCSS = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        HTML ja CSS
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised töömaailmas kasutatvatest veebitehnoloogiatest ja kujundusvahenditest. Õpime HTML ja CSS abil veebilehe loomist, lähtudes W3C standardist ja kokkulepitud koodistandartitest.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/HTML%20&%20CSS/1005/iseseisev/" target="_blank">trükifirma koduleht</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/HTML%20&%20CSS/0930/" target="_blank">talvesport veebileht</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://vabamagimarieelisabeth.ikt.khk.ee/HTML%20&%20CSS/0916/iseseisev/" target="_blank">kosmosereisid veebileht</a>
      </CustomButton>
    </>
  )
}

export const VeebitehnoloogiadJaKujundusvahendid = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        veebitehnoloogiad ja kujundusvahendid
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames uurime erinevate kujundus- ja prototüüpimisvahendite kohta, viime kurssi end veebikujundus trendidega ja täiendame oma teadmisi erinevate veebitehnoloogiate osas.
      </p>

      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1RkW2Uenj8e_t7IoUqHPWmWmfv5AwppnDIPn3jms0jf8/present?slide=id.p" target="_blank">wireframe, mockup & prototype</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1qlupf4qaOsntdSOQ-v3egk4DGCuR2HJ8rTXEPw7roH8/present?slide=id.p" target="_blank">veebikujunduse trendid</a>
      </CustomButton>
    </>
  )
}

export const VisandiLoomine = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        visandi loomine
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised piktogrammidest, ligatuuridest ja monogrammidest. Samuti räägime Bikablost ja teostame iga teema kohta ülesande.
      </p>

      <img width="100%" src={visand} />

    </>
  )
}

export const StruktuuriKavand = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        struktuurikavand
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised veebirakenduste kujundamisest.Loome high fidelty prototüübi ja õpime pixel perfect designi.
      </p>

      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://xd.adobe.com/view/e88779c3-3857-4260-86fb-282409323e33-bdd4/?fullscreen&hints=off" target="_blank">pixel perfect disain</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://xd.adobe.com/view/5140bb87-4a92-45d9-8a28-2fc446ac7042-0413/?fullscreen&hints=off" target="_blank">veebipood banaanidele</a>
      </CustomButton>
    </>
  )
}

export const TestimiseAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        testimise alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised kasutuskogemuse testi põhimõtetest. Aine jooksul viime läbi testi mõnel enda koostatud prototüübil. Lasin kasutajatel testida enda aasta tegija võistlustööd, tagasiside oli positiivne ja muudatusi sisse ei viinud.
      </p>
    </>
  )
}

export const UIDisain = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        UI disain
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised visualiseerimise, kompositsiooni ja stiliseerimise kohta.  Ülesande teostamisel kasutame Adobe Illustarorit. Illustaratsioon raamatule.
      </p>
      <img width="75%" src={mummud} />
    </>
  )
}

export const SissejuhatusTarkvaraarendusse = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        sissejuhatus tarkvaraarendusse
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised infosüsteemi arendamise etappidest. Kursuse sisuks on infosüsteemi elutsükkel, persoona ja kasutaja lugu, prototüüpimine, andmemudel ning protsessimudel. Lõime persoonasid ja koostasime kasutajalugusid. Panime saadud tulemuste põhjal paberile kirja e-poe nõuded ja koostasime kavandi, edasi tegime Moqups keskkonnas mockupi. Tutvusime andme- ja protsessimudelitega ning koostasime need Gliffy keskkonnas
      </p>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="60%" src={libutigu0} />
      </Grid>
    </>
  )
}

export const SisuhaldusSüsteemid = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        sisuhaldusüsteemid
      </Typography>
      <p className={classes.sisutekst}>
        Õppisin selles aines kasutama WordPressi. Kirjutama postitusi, muutma lehe välimust, looma ja muutma menüüd, kasutama pluginaid ja looma e-poodi. XAMPP veebiserveri paigalduse juhend - Ülesandeks oli luua juhend mille järgi saaks XAMPP lokaalse veebiserveri paigaldada oma arvutisse. Õppisin paigalduse ära. E-poe disainikavand - Ülesandeks oli luua prototüübina kavand enda e-poe jaoks. Tegin mobiilivaatele. Õppisin looma erinevaid vaateid Adobe XD´s. E-pood - Ülesandeks oli luua toimiv e-pood. 10 toodet, igast tootest 2 vaadet. Õppisin kasutama WooCommerce pluginat. Disainitrendide lahendus - Ülesandeks oli valida kaks veebisaiti, millega need tegelevad ja milliseid disainitrende seal kasutatud on. Nägin erinevaid disainitrende ja kuidas neid kasutatud on.
      </p>

      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/document/d/1hrBuElDJ-wvr-GrNPZ_lIvs2p6bS2eenACnNO65QoGQ/edit?usp=sharing" target="_blank">XAMPP lokaalne veebiserver</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://xd.adobe.com/view/357302aa-52c1-4a03-8551-663e40113468-6020/?fullscreen" target="_blank">e-poe disainikavand</a>
      </CustomButton>
    </>
  )
}

export const Versioonihaldus = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        versioonihaldus
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised versioonihaludsest ning tutvume erinevate keskkondadega. Õpime Githubis repo ja uue branchi loomist ning käsurealt muudatusi Githubi lisama. Pidime võrdlema kahte versioonihalduse programmi. Õppisime kasutama Githubi ja Giti, kasutade vahel liikumist, branchide loomist ja kloonimist. Lisaks õppisime käsurealt toimetama.
      </p>

      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/document/d/1_m3NeGGlcnVhDSR1GsT1xOo4c4e2YU9h6zwFpRnRxNw/edit?usp=sharing" target="_blank">bitbucket vs github</a>
      </CustomButton>
    </>
  )
}

export const Veebihaldus = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        veebihaldus
      </Typography>
      <p className={classes.sisutekst}>
        Loob veebiserveri lähtudes lähteülesande olevatest funktsionaalsetest nõuetest; haldab veebiserverit seadistades haldusvahendeid. Lõime Ubuntu serveri, installisime Apache ja paigaldasime Wordpress'i.
      </p>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="70%" src={libutigu4} />
      </Grid>
    </>
  )
}

export const VahenditeKasutaminePrototüüpimiseks = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        vahendite kasutamine prototüüpimiseks, arendusraamistikud
      </Typography>
      <p className={classes.sisutekst}>
        Internetipanga kasutajaliidese loomine enda poolt valitud vahenditega ja tutvumine arendusraamistik Vue'ga.
        Kasutatud vahendid: Figma ja Visual Studio code.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://github.com/marievaba/vue3" target="_blank">vue</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://www.figma.com/proto/rn9Y6tCjrtZOvKw7Brd04N/Vahendite-kasutamine-protot%C3%BC%C3%BCpimiseks%2C-arendusraamistikud%2C-EL-%26-MV?node-id=1%3A10&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A10&show-proto-sidebar=1" target="_blank">internetipank</a>
      </CustomButton>
    </>
  )
}

export const ITÕigus = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        IT Õigus
      </Typography>
      <p className={classes.sisutekst}>
        Lähtub kasutajaliidese haldamisel õiguslikest alustest; seostab kasutajate erinevaid juurdepääsuõigusi lepingus sätestatuga; kasutab litsentseerimise põhimõtteid vastavalt õiguslikele alustele. Grupitööna tegime esitluse krüptorahast.
      </p>

      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1Ad3zL-o8AtepYuHai9u_hbIXA8-J-0i9iS4YMvzUUBA/present?slide=id.p" target="_blank">krüptoraha</a>
      </CustomButton>
    </>
  )
}

export const GoogleAnalyticsKasutamine = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        google analyticsi kasutamine
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised. Google Analyticsi funktsioonidest ja võimalustest. Analyticsi paigaldamine käsitsi ja Wordpress pistikprogrammide abil. Lõime kampaania jaoks UTM tagidega lingi. Lõime ise kampaania oma e-poe lehele ja jälgisime seda. Pidime välja tooma kolm tähtsamat näitajat, koostama dokumendi ja kirjeldama seal mida need teevad ja milleks kasulikud on. Analüüsisime Google Merchandise Store ja selle edukust viimase kahe kuu jooksul.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/document/d/1a51LYmRxMCzd0qlhm6xVT79wxjF-g8oEiMEbMalBt58/edit?usp=sharing" target="_blank">google analytics</a>
      </CustomButton>
    </>
  )
}

export const IntervjuuKoostamine = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        intervjuu koostamine
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised erialasest intervjuu läbiviimisest lähtuvalt ülesandest ning analüüsitakse tulemusi. Kursuse raames koostame ise intervjuu ja viime läbi. Rääkisime kavntitatiivsest ja kvalitatiivsest uurimis meetodist ning intervjuu eesmärkidest. Pidime valima mingi lehe millele analüüs koostada, koostasin küsimused ja valisin inimesed kellega intervjuud läbi viia. Saadud andmed pidin analüüsima ja koostama diagrammi.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/document/d/1RSZZLbagCL8cOjhpZOZv0Wqmw8ve7RU4uHveJOcEJEg/edit?usp=sharing" target="_blank">intervjuu</a>
      </CustomButton>
    </>
  )
}

export const KasutajakogemuseAnalüüsiAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        kasutajakogemuse analüüsi alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised kasutajakogemuse analüüsi põhimõtetest. Õpime tundma sihtgruppi ja seda kirjeldama, kasutusmugavuse testi koostamist ja selle läbiviimist ning prototüüpimise aluseid ja prototüübi loomist. Kuulasime loengud erinevatest sihtrühmadest ja pidime leidma ühe reklaami, millel on vale sihtrühm. Valisime reklaamiks Laste Fondi reklaami, pildil oli kujutatud lusikaga laps ja nõudepesukapslid. Kuulasime loengut erinevatest kasutusmugavuse testidest ja viisime ise läbi testi. Olin paaris kursusekaaslasega ja küsisin temalt hinnavaatluse foorumi kasutamise kohta küsimusi, tema küsisi minult Elisa kõnekaartide kohta. Kuulasime loengut prototüüpide loomisest ja tegime koos õpetajaga Figmas e-valimiste programmi kasutajasõbralikumaks.
      </p>
    </>
  )
}

export const ABTestimine = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        A/B testimine
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised testi läbiviimise põhimõtetest ja kasutatavatest vahenditest. Viime iseseisvalt läbi A/B testi lähtuvalt lähteülesandest. Lõime wordpressi lehe ja testisime kahte erinevat lahendust.
      </p>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="45%" src={libutigu6} />
      </Grid>


    </>
  )
}

export const ReklaamiPsühholoogia = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        reklaamipsühholoogia
      </Typography>
      <p className={classes.sisutekst}>
        Reklaami mõju ja roll. Mõjustamispsühholoogia võtted reklaamis. Reklaami tajumine: Tähelepanu ja mäluprotsessid. Veebis reklaamide analüüs ja hindamine. veebi mõjutusvahendite Kuidas võiks teha reklaami?: Tarbijakäitumine. Reklaamistrateegiad. Veebis reklaamikampaania kavandamine. Reklaamitegevuse õiguslik ja eetiline regulatsioon Reklaami analüüs, pidime valima ühe reklaami ja koostama selle kohta analüüsi.  Saadud teadmiste põhjal pidime ise looma reklaami.
      </p>
      <img width="90%" src={reklaam} />
    </>
  )
}

export const SuhtlemiseAlused2 = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        suhtlemise alused 2
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised suhtlemise ja kommunikatsiooni olemusest. Teeme selgeks efektiivse kommunikatsiooni mõjutajad, suhtlemises kasutatavad mõjutusvõtted, aktiivse kuulamise ja peegeldamise teemad. Pidime koostama video põhjal analüüsi. Täiendama etteantud dokumenti ja koostama küsimusi.
      </p>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="60%" src={libutigu3} />
      </Grid>
    </>
  )
}

export const SuhtlemisePsühholoogilineAnalüüs = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        suhtlemise psühholoogiline analüüs
      </Typography>
      <p className={classes.sisutekst}>
        Suhtlemiskompetentsus ja selle arendamise võimalused. Suhtlemine kui kommunikatsiooniprotsess. Suhtlemisvormid ja suhtlemisvahendid. Suhtlemistõkked. Kuulamine ja kuulamistehnikad ja -tõkked. Tagasisidestamine. Vaatasime erinevaid videoid ja arutlesime koos nende üle. Milliseid suhtlemise viise, mõjutusvõtteid ja näoilmeid me märkasime. Pidime valima ühe video ja seda kirjalikult analüüsima.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/document/d/1kPZUGCkJTL_FcHTY17rO6vc1L_9jK-FtttclfsvIvSw/edit?usp=sharing" target="_blank">suhtlemisel põhineva salvestuse analüüs</a>
      </CustomButton>
    </>
  )
}

export const ArvutivõrkudeAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        arvutivõrkude alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursusel viisime end kurssi erinevate arvutivõrkude kasutamise põhimõtetega. Võrgunduse alustega tutvumine ja test, tegime erinevaid võrke, lisasime seadmeid ja ühendasime need omavahel. Kasutasime virtuaalmasinat ja Ciscot.
      </p>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="30%" src={libutigu5} />
        <img width="30%" src={libutigu5} />
        <img width="30%" src={libutigu5} />
      </Grid>

    </>
  )
}

export const InfoturbeAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        infoturbe alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised infoturbe põhimõtetest ja kehtivast seadusandlusest. Lõime linux terminalis kataloogi ja pidime selle kopeerima teise arvutisse. Veel pidime kopeerima asju õpetaja arvutisse, looma txt faili, pingima õpetaja arvutit ja kommenteerima käsurealt.
      </p>

    </>
  )
}

export const ITSüsteemideRiistvara = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        IT süsteemide riistvara
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised arvutitest ja nendega seotud seadmetest. Võtsime arvuti ja tegime selle lahti, pidime leidma emaplaadi ja vahetama termopastat. Võtsime serveri ja tegime selle lahti, lisasime RAMi ja ühendasime monitoriga ja vaatasime spetsifikatsioone. Õppisime kasutama projektorit. Pidime internetist leidma kuni 3000 euro väärtuses orienteerumise läbiviimiseks tehnikat.
      </p>
    </>
  )
}

export const Operatsioonisüsteemid = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        operatsioonisüsteemid
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised erinevatest operatsioonsüsteemidest. Windows 10 operatsioonsüsteemi paigaldus. Lõime virtuaalmasina ja paigaldasime sinna Windows10, installisime erinevaid programme ja vaatasime terminali. Linux operatsioonisüsteemi paigaldus. Lõime virtuaalmasina ja paigaldasime sinna Ubuntu, installisime käsurealt erinevaid asju. Mac opertasioonsüsteemi paigaldus. Lõime virtuaalmasina ja paigaldasime sinna MacOS, installisime erinevaid programme ja lisasime kasutajaid
      </p>

    </>
  )
}

export const ErialaneMatemaatika = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        erialane matemaatika
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised matemaatilisest loogikast. Õpime positsioonilisi arvusüsteeme, lausearvutust, predikaatarvutust ja tõeväärtustabeli koostamist. Välja mõelda praktilise töö teema, valim, uuritavad tunnused ja küsimused. Viia läbi küsitlus ning selle põhjal koostada analüüsitav andmestik, koostada ja ette kanda esitlus tulemustest.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1LIASYz6xIPSZUFppP0iwLgmjQ_jPSgPNJucth08lqrI/present?slide=id.p" target="_blank">tartus elamine</a>
      </CustomButton>
    </>
  )
}

export const ObjektorienteeritudProgrammeerimine = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        objektorienteeritud programmeerimine
      </Typography>
      <p className={classes.sisutekst}>
        Koostab lähekoodi lähtudes lähteülesande põhjal koostatud plokkskeemist; koostab vigadeta lähekoodi vastavalt programmeerimiskeele reeglitele; kirjeldab koodi tööpõhimõtet vastavalt programmeerimiskeele ülesehitusele.
        Kasutatud vahendid: Virtuaalmasin (Win10) ja Javascript
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://github.com/marievaba/weather" target="_blank">weather project</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://github.com/marievaba/oop_books" target="_blank">books project</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://github.com/marievaba/calory_tracker" target="_blank">calorie tracker project</a>
      </CustomButton>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="50%" src={libutigu6} />
      </Grid>
    </>
  )
}

export const ProgrammeerimiseAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        programmeerimise alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised programmeerimise algoritmilistest põhimõtetest. Õpime muutujaid ja andmetüüpe, matemaatilisi operaatoreid, tingimuslauseid ning tsükleid. Loome virtuaalarvuti kooli serveris ja laeme sinna tööks vajalikud programmid. Õppsime JavaScripti põhitõdesid, lõime mitu erinevat programmi.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://github.com/marievaba/prog_alused/tree/main/iseseisev" target="_blank">tehtud tööd</a>
      </CustomButton>

    </>
  )
}

export const ITKorraldus = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        IT korraldus
      </Typography>
      <p className={classes.sisutekst}>
        Organisatsioon ja IT struktuur. Äriorganisatsiooni ja IT struktuuri vahelised seosed. Organisatsiooni eesmärkide mõistmine, kasutajagrupid ja nende vajadused infosüsteemile. Organisatsiooni veebileht. Selle roll ettevõtte toote/teenuse turundamisel (koostöös ettevõtluse aluste teemaga). Infosüsteemi olulisus organisatsiooni tegevuste toimimisel. Kooli infosüsteemi analüüs Grupitööna pidime analüüsima Tartu Rakendusliku Kolledži infosüsteemi. Koostasime veebilehe analüüsi. Lisaks külastasime ettevõtet ja kirjutasime selle kohta raporti.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/spreadsheets/d/1gcmmSHzxsSrkeNk_ANx-V8FS3t7rDUU5ZuMryDOlNAs/edit?usp=sharing" target="_blank">veebilehe analüüs</a>
      </CustomButton>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/document/d/1OfNoK3OAMW049oxz2nCdooWM8uo68tdcKxDjfp2REoo/edit?usp=sharing" target="_blank">raport</a>
      </CustomButton>
    </>
  )
}

export const MeeskonnatööAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        meeskonnatöö alused
      </Typography>
      <p className={classes.sisutekst}>
        Projektiorganisatsiooni struktuur. Meeskonnatöö projektides. Meeskonnatöö kavandamine ja käivitamine ning meeskonnajuhi tegevused. Koostöövormid, nende põhimõtted ja kasutamine meeskonnatöös. Pidime looma meeskonna ja korraldama kursusele tuuri mõnda ettevõttesse, lisaks pidime kogu protsessi dokumenteerima. Kursuse lõpus pidime leidma meeskonna, kellega lähme üksikule saarele. Eelarveks oli 1500 eurot ja selle raha eest pidime leidma internetist vajalikud vahendid ellujäämiseks.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/document/d/1haqGsC2PerF-EnHdrSwb7D5IK1MLjSm9Di1ZkRNjiRM/edit?usp=sharing" target="_blank">õppekäik ettevõttesse Redwall</a>
      </CustomButton>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="80%" src={libutigu5} />
      </Grid>
    </>
  )
}

export const ProjektihalduseAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        projektihalduse alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandatakse teadmised projektijuhtimisest. Läbime kursuse jooksul projekti eesmärgi, tegevuskava, skoobi ja projektijuhtimise meetodi teemad. SWOT analüüs. Tutvusime erinevate projektijuhtimise meetoditega ja koostasime meeskonnatööna esitluse ühest projektijhtimise meetodist. Pidime valima ühe projektihalduse programmi ja tegema selle kohta esitluse.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1U49bgFVQzX_FMIJG7bfPzovB4kB-7w8JVoHUV5homJw/present?slide=id.p" target="_blank">koolitusfirma koduleht agile meetodil</a>
      </CustomButton>
    </>
  )
}

export const GraafilineDisainJaMultimeedia = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        graafiline disain & multimeedia toode disain ja tootearendus
      </Typography>
      <p className={classes.sisutekst}>
        Olen lõpetanud Tartu Kunstikooli Kujundaja erialal.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://marievaba.wixsite.com/mvaba" target="_blank">Tartu Kunstikooli portfoolio</a>
      </CustomButton>
    </>
  )
}

export const AsjaajamiseAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        asjaajamise alused
      </Typography>
      <p className={classes.sisutekst}>
        Lähteülesandeks oli luua erialane CV,  praktikakoha taotlemiseks motivatsiooni -ja kaaskiri ning eraldi motivatsioonikiri. Olen kursuse varasemalt läbinud. Koostasime CV, praktikale kandideerimikseks vajalikud dokumendid ja kirjutasime motivatsioonikirja teemal "Kus näen end viie aasta pärast?"
      </p>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="50%" src={libutigu7} />
      </Grid>
    </>
  )
}

export const EttevõtluseAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        ettevõtluse alused & majanduse alused
      </Typography>
      <p className={classes.sisutekst}>
        Olen kursuse varemalt läbinud ja kandsin VÕTAga üle. Kasutasime TOY meetodit. Valisime tiimid ja panime paberile kirja 20 erinevat ideed, sealt valisime kolm parimat ja edasi ühe, millega tegeleda. Tegime liftikõne ja erinevaid esitlusi. Kuruse lõpuks saime oma toote valmis. Selleks oli korgipuu.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/presentation/d/1ml141qCw6NePLjYmfLiw4ad6-KzLX4wHkvDmNG_d6og/present?slide=id.p" target="_blank">korgipuu</a>
      </CustomButton>
    </>
  )
}

export const KarjääriplaneerimiseAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        karjääriplaneerimise alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames viime end kurssi kooli infosüsteemiga ja õppetöökorraldusega. Tartu Rakendusliku Kolledži infosüsteemi ja koduleheküljega tutvumine. Töövahendusportaalide info otsimine ja kaardistamine. Pidime leidma erinevaid töökuulutusi ja koostama neist dokumendi.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://docs.google.com/document/d/1O6h1sxmCYk5UxCgBWxFdf6xc-bqgUV7qTHFCyOJxyUU/edit?usp=sharing" target="_blank">infosüsteem ja kodulehekülg</a>
      </CustomButton>
    </>
  )
}

export const SuhtlemisÕpetus = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        suhtlemisõpetus
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisime erinevaid suhtlemise viise ja võtteid. Pidime meeskonnas tegema antireklaami vabalt valitud tootele.
      </p>
      <CustomButton style={{ margin: 4 }}>
        <a className={classes.cvLink} href="https://www.youtube.com/watch?v=axnGtwRLlyg&ab_channel=MarieVabam%C3%A4gi" target="_blank">antireklaam</a>
      </CustomButton>
    </>
  )
}

export const Töökeskkonnaohutus = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        töökeskkonnaohutus
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisime erinevaid tööohutuse võtteid ja ergonoomilisi töövahendeid. Pidin koostama esitluse võimalikest örgonoomilistest töövahenditest. Õppisime turvaliselt kasutama redelit.
      </p>
      {/* <Grid style={{ display: "flex", justifyContent:"center" }}>
      <img width="60%" src={libutigu3} />
      </Grid> */}
    </>
  )
}

export const TöötamiseÕiguslikudAlused = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.alampealkiri}
      >
        töötamise õiguslikud alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisime erinevaid autoriõiguseid. Pidime valima ühe teose ja seda muutma nii, et sellega ei tekiks autoriõiguse probleeme.
      </p>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <img width="60%" src={libutigu4} />
      </Grid>
    </>
  )
}

export const ArenguportfoolioEsitamine = () => {
  const classes = useStyles();
  return (
    <>
      <p className={classes.sisutekst}>
        Arenguportfoolio loomise kursuse raames õpib õpilane oma erialast arengut analüüsima. Koostame elektroonilise arenguportfoolio põhja, mida iseseivalt hakkame õpingute jooksul täiendama.
        Enesetuvustus arenguportfoolio jaoks. Sissejuhatus ainesse- rääkisime reeglitest, teemadest ja hindamisest. Vaatasime üle, mis on arenguportfoolio, millel see põhineb ning nägime näiteid mõningatest eelmiste aastate töödest. Tunni raames pidin Google Sites looma arenguportfoolio põhja ja tegema valmis portfoolio struktuuri koos enesetutvustusega. Õppisin käsitlema Google Sites'i, varasem kokkupuude puudus. Enestutvustus nähtav portfoolio avalehel. 2. Sisuhaldussüsteemide aine kokkuvõte Alustasin esimese aine kokkuvõtte kirjutamist Google Sites. Tõin välja sisuhaldussüsteemide aine jooksul omandataud teadmised, kirjeldused tehtud töödest ja kasutatud vahenditest. Kokkuvõtte tegemine andis mulle väga hea ülevaate ja selgema pildi kursusest.
      </p>
    </>
  )
}