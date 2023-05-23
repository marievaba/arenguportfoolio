import React, { useState } from 'react';
import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useStyles } from "../styles";
import visand from "../images/visand.jpg";
import libutigu0 from "../images/libutigu0.png";
import libutigu3 from "../images/libutigu3.png";
import libutigu4 from "../images/libutigu4.png";
import libutigu5 from "../images/libutigu5.png";
import libutigu6 from "../images/libutigu6.png";
import libutigu7 from "../images/libutigu7.png";
import mummud from "../images/mummmud.jpg";
import reklaam from "../images/reklaam.jpg";
// @ts-ignore
import video from "../images/putukad.mp4";
import CustomButton from '../components/CustomButton';

export const Animatsioonid = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);

  React.useEffect(() => {
    const width = window.innerWidth;
    if (width <= 680) {
      setIsAutoplay(false)
    }
  })

  const classes = useStyles();
  return (
    <>
      <Typography className={`${classes.alampealkiri} h2-header`}>
        animatsioonid
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised töömaailmas kasutatavatest veebitehnoloogiatest ja kujundusvahenditest.
        Kasutatud vahendid: After Effects ja Media Encoder.
      </p>
      <>
        <video id="animation-video" width="100%" preload="auto" autoPlay={isAutoplay} loop={isAutoplay} controls={!isAutoplay} playsInline>
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
        className={`${classes.alampealkiri} h2-header`}
      >
        bootstrap
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised töömaailmas kasutatavatest veebitehnoloogiatest ja kujundusvahenditest.
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
        className={`${classes.alampealkiri} h2-header`}
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
        className={`${classes.alampealkiri} h2-header`}
      >
        HTML ja CSS
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised töömaailmas kasutatavatest veebitehnoloogiatest ja kujundusvahenditest. Õppisin <i>HTML</i> ja <i>CSS</i> abil veebilehe loomist, lähtudes <i>W3C</i> standardist ja kokkulepitud koodistandarditest.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        veebitehnoloogiad ja kujundusvahendid
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames uurisin erinevate kujundus- ja prototüüpimisvahendite kohta, viisin end kurssi veebikujunduse trendidega ja täiendasin oma teadmisi erinevate veebitehnoloogiate osas.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        visandi loomine
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised piktogrammidest, ligatuuridest ja monogrammidest. Samuti rääkisime <i>Bikablo'st</i> ja teostasin iga teema kohta ülesande.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        struktuurikavand
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised veebirakenduste kujundamisest. Lõin <i>high fidelty</i> prototüübi ja õppisin <i>pixel perfect</i> disaini.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        testimise alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised kasutuskogemuse testi põhimõtetest. Aine jooksul viisin läbi testi ühel enda koostatud prototüübil. Lasin kasutajatel testida enda aasta tegija võistlustööd, tagasiside oli positiivne ja muudatusi sisse ei viinud.
      </p>
    </>
  )
}

export const UIDisain = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={`${classes.alampealkiri} h2-header`}
      >
        UI disain
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised visualiseerimise, kompositsiooni ja stiliseerimise kohta.  Ülesande teostamisel kasutasin <i>Adobe Illustaror'it</i>. Lõin illustratsiooni raamatule.
      </p>
      <img className="mummud-img" width="75%" src={mummud} />
    </>
  )
}

export const SissejuhatusTarkvaraarendusse = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={`${classes.alampealkiri} h2-header`}
      >
        sissejuhatus tarkvaraarendusse
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised infosüsteemi arendamise etappidest. Kursuse sisuks on infosüsteemi elutsükkel, persoona ja kasutaja lugu, prototüüpimine, andmemudel ning protsessimudel. Lõin persoonasid ja koostasin kasutajalugusid. Panin saadud tulemuste põhjal paberile kirja e-poe nõuded ja koostasin kavandi, edasi tegin <i>Moqups</i> keskkonnas <i>mockup'i</i>. Tutvusin andme- ja protsessimudelitega ning koostasin need <i>Gliffy</i> keskkonnas.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        sisuhaldusüsteemid
      </Typography>
      <p className={classes.sisutekst}>
        Õppisin selles aines kasutama <i>WordPress'i</i>. Kirjutama postitusi, muutma lehe välimust, looma ja muutma menüüd, kasutama pluginaid ja looma e-poodi. <i>XAMPP</i> veebiserveri paigalduse juhend - Ülesandeks oli luua juhend mille järgi saaks <i>XAMPP</i> lokaalse veebiserveri paigaldada oma arvutisse. Õppisin paigalduse ära. E-poe disainikavand - Ülesandeks oli luua prototüübina kavand enda e-poe jaoks. Tegin mobiilivaatele. Õppisin looma erinevaid vaateid <i>Adobe XD's</i>. E-pood - Ülesandeks oli luua toimiv e-pood. 10 toodet, igast tootest 2 vaadet. Õppisin kasutama <i>WooCommerce</i> pluginat. Disainitrendide lahendus - Ülesandeks oli valida kaks veebisaiti, millega need tegelevad ja milliseid disainitrende seal kasutatud on. Nägin erinevaid disainitrende ja kuidas neid kasutatud on.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        versioonihaldus
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised versioonihaldusest ning tutvusin erinevate keskkondadega. Õppisin <i>Github'is repo</i> ja uue <i>branch'i</i> loomist ning käsurealt muudatusi <i>Github'i</i> lisama. Pidin võrdlema kahte versioonihalduse programmi. Õppisin kasutama <i>Github'i</i> ja <i>Git'i</i>, kaustade vahel liikumist, <i>branch'ide</i> loomist ja kloonimist. Lisaks õppisin käsurealt toimetama.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        veebihaldus
      </Typography>
      <p className={classes.sisutekst}>
        Lõin veebiserveri lähtudes lähteülesande olevatest funktsionaalsetest nõuetest. Haldasin veebiserverit seadistades haldusvahendeid. Lõin <i>Ubuntu</i> serveri, installisin <i>Apache</i> ja paigaldasin <i>WordPress'i</i>.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        vahendite kasutamine prototüüpimiseks, arendusraamistikud
      </Typography>
      <p className={classes.sisutekst}>
        Lõin internetipanga kasutajaliidese enda poolt valitud vahenditega ja tutvusin arendusraamistik <i>Vue'ga</i>.
        Kasutatud vahendid: Figma ja Visual Studio Code.
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
        className={`${classes.alampealkiri} h2-header`}
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
        className={`${classes.alampealkiri} h2-header`}
      >
        <i>google analytics'i</i> kasutamine
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised <i>Google Analytics'i</i> funktsioonidest ja võimalustest. <i>Analytics'i</i> paigaldasin käsitsi ja <i>WordPress</i> pistikprogrammide abil. Lõin kampaania jaoks <i>UTM tag'idega</i> lingi. Lõin ise kampaania oma e-poe lehele ja jälgisin seda. Pidin välja tooma kolm tähtsamat näitajat, koostama dokumendi ja kirjeldama seal mida need teevad ja milleks kasulikud on. Analüüsisin <i>Google Merchandise Store</i> ja selle edukust viimase kahe kuu jooksul.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        intervjuu koostamine
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised erialasest intervjuu läbiviimisest lähtuvalt ülesandest ning analüüsisin tulemusi. Koostasin ise intervjuu ja viisin läbi. Rääkisime kvantitatiivsest ja kvalitatiivsest uurimise meetoditest ning intervjuu eesmärkidest. Pidin valima mingi lehe, millele analüüs koostada, koostasin küsimused ja valisin inimesed kellega intervjuud läbi viia. Saadud andmed pidin analüüsima ja koostama diagrammi.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        kasutajakogemuse analüüsi alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised kasutajakogemuse analüüsi põhimõtetest. Õppisin tundma sihtgruppi ja seda kirjeldama, kasutusmugavuse testi koostamist ja selle läbiviimist ning prototüüpimise aluseid ja prototüübi loomist. Kuulasin loenguid erinevatest sihtrühmadest ja pidin leidma ühe reklaami, millel on vale sihtrühm. Valisin reklaamiks Laste Fondi reklaami, pildil oli kujutatud lusikaga laps ja nõudepesukapslid. Kuulasin loengut erinevatest kasutusmugavuse testidest ja viisin ise läbi testi. Olin paaris kursusekaaslasega ja küsisin temalt hinnavaatluse foorumi kasutamise kohta küsimusi, tema küsis minult Elisa kõnekaartide kohta. Kuulasin loengut prototüüpide loomisest ja tegime koos õpetajaga <i>Figma's</i> e-valimiste programmi kasutajasõbralikumaks.
      </p>
    </>
  )
}

export const ABTestimine = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={`${classes.alampealkiri} h2-header`}
      >
        A/B testimine
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised testi läbiviimise põhimõtetest ja kasutatavatest vahenditest. Viisin iseseisvalt läbi A/B testi lähtuvalt lähteülesandest. Lõin <i>WordPress'i</i> lehe ja testisin kahte erinevat lahendust.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        reklaamipsühholoogia
      </Typography>
      <p className={classes.sisutekst}>
        Reklaami mõju ja roll. Mõjustamispsühholoogia võtted reklaamis. Reklaami tajumine: Tähelepanu ja mäluprotsessid. Veebis reklaamide analüüs ja hindamine. Kuidas võiks teha reklaami? Tarbijakäitumine. Reklaamistrateegiad. Veebis reklaamikampaania kavandamine. Reklaamitegevuse õiguslik ja eetiline regulatsioon Reklaami analüüs, pidime valima ühe reklaami ja koostama selle kohta analüüsi. Saadud teadmiste põhjal pidin ise looma reklaami.
      </p>
      <img className="reklaam-img" width="90%" src={reklaam} />
    </>
  )
}

export const SuhtlemiseAlused2 = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={`${classes.alampealkiri} h2-header`}
      >
        suhtlemise alused 2
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised suhtlemise ja kommunikatsiooni olemusest. Õppisime selgeks efektiivse kommunikatsiooni mõjutajad, suhtlemises kasutatavad mõjutusvõtted, aktiivse kuulamise ja peegeldamise teemad. Pidin koostama video põhjal analüüsi, täiendasin etteantud dokumenti ja koostasin küsimusi.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        suhtlemise psühholoogiline analüüs
      </Typography>
      <p className={classes.sisutekst}>
        Suhtlemiskompetentsus ja selle arendamise võimalused. Suhtlemine kui kommunikatsiooniprotsess. Suhtlemisvormid ja suhtlemisvahendid. Suhtlemistõkked. Kuulamine ja kuulamistehnikad ja -tõkked. Tagasisidestamine. Vaatasime erinevaid videoid ja arutlesime koos nende üle. Milliseid suhtlemise viise, mõjutusvõtteid ja näoilmeid me märkasime. Pidin valima ühe video ja seda kirjalikult analüüsima.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        arvutivõrkude alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursusel viisin end kurssi erinevate arvutivõrkude kasutamise põhimõtetega. Võrgunduse alustega tutvumine ja test, tegin erinevaid võrke, lisasin seadmeid ja ühendasin need omavahel. Kasutasin virtuaalmasinat ja <i>Cisco't</i>.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        infoturbe alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised infoturbe põhimõtetest ja kehtivast seadusandlusest. Lõin <i>Linux</i> terminalis kataloogi ja pidin selle kopeerima teise arvutisse. Veel pidin kopeerima asju õpetaja arvutisse, looma txt faili, <i>ping'ima</i> õpetaja arvutit ja kommenteerima käsurealt.
      </p>

    </>
  )
}

export const ITSüsteemideRiistvara = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={`${classes.alampealkiri} h2-header`}
      >
        IT süsteemide riistvara
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised arvutitest ja nendega seotud seadmetest. Võtsin arvuti ja tegin selle lahti, pidin leidma emaplaadi ja vahetama termopastat. Võtsin serveri ja tegime selle lahti, lisasin RAMi, ühendasin monitoriga ning vaatasin spetsifikatsioone. Õppisin kasutama projektorit. Pidin internetist leidma kuni 3000 euro väärtuses orienteerumise läbiviimiseks tehnikat.
      </p>
    </>
  )
}

export const Operatsioonisüsteemid = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={`${classes.alampealkiri} h2-header`}
      >
        operatsioonisüsteemid
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised erinevatest operatsioonsüsteemidest. <i>Windows</i> 10 operatsioonsüsteemi paigaldus. Lõin virtuaalmasina ja paigaldasin sinna <i>Windows</i> 10, installisin erinevaid programme ja vaatasin terminali. <i>Linux</i> operatsioonisüsteemi paigaldus. Lõin virtuaalmasina ja paigaldasin sinna <i>Ubuntu</i>, installisin käsurealt erinevaid asju. <i>Mac</i> operatsioonsüsteemi paigaldus. Lõin virtuaalmasina ja paigaldasin sinna <i>MacOS</i>, installisin erinevaid programme ja lisasin kasutajaid.
      </p>

    </>
  )
}

export const ErialaneMatemaatika = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={`${classes.alampealkiri} h2-header`}
      >
        erialane matemaatika
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised matemaatilisest loogikast. Õppisin positsioonilisi arvusüsteeme, lausearvutust, predikaatarvutust ja tõeväärtustabeli koostamist. Pidin välja mõtlema praktilise töö teema. Valisin uuritavad tunnused ja küsimused. Viisin läbi küsitluse ning selle põhjal koostasin analüüsitava andmestiku, koostasin ja kandsin ette esitluse tulemustest.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        objektorienteeritud programmeerimine
      </Typography>
      <p className={classes.sisutekst}>
        Koostasin lähekoodi lähtudes lähteülesande põhjal koostatud plokkskeemist; koostasin vigadeta lähekoodi vastavalt programmeerimiskeele reeglitele; kirjeldasin koodi tööpõhimõtet vastavalt programmeerimiskeele ülesehitusele.
        Kasutatud vahendid: Virtuaalmasin (Windows 10) ja JavaScript.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        programmeerimise alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised programmeerimise algoritmilistest põhimõtetest. Õppisin muutujaid ja andmetüüpe, matemaatilisi operaatoreid, tingimuslauseid ning tsükleid. Lõin virtuaalarvuti kooli serveris ja laadisin sinna tööks vajalikud programmid. Õppisin <i>JavaScript'i</i> põhitõdesid, lõin mitu erinevat programmi.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        IT korraldus
      </Typography>
      <p className={classes.sisutekst}>
        Organisatsioon ja IT struktuur. Äriorganisatsiooni ja IT struktuuri vahelised seosed. Organisatsiooni eesmärkide mõistmine, kasutajagrupid ja nende vajadused infosüsteemile. Organisatsiooni veebileht ja selle roll ettevõtte toote/teenuse turundamisel (koostöös ettevõtluse aluste teemaga). Infosüsteemi olulisus organisatsiooni tegevuste toimimisel. Kooli infosüsteemi analüüs grupitööna. Pidime analüüsima Tartu Rakendusliku Kolledži infosüsteemi. Koostasin veebilehe analüüsi. Lisaks külastasime ettevõtet ja kirjutasin selle kohta raporti.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        meeskonnatöö alused
      </Typography>
      <p className={classes.sisutekst}>
        Projektiorganisatsiooni struktuur. Meeskonnatöö projektides. Meeskonnatöö kavandamine ja käivitamine ning meeskonnajuhi tegevused. Koostöövormid, nende põhimõtted ja kasutamine meeskonnatöös. Pidin looma meeskonna ja korraldama kursusele tuuri mõnda ettevõttesse, lisaks pidin kogu protsessi dokumenteerima. Kursuse lõpus pidin leidma meeskonna, kellega lähme üksikule saarele. Eelarveks oli 1500 eurot ja selle raha eest pidime leidma internetist vajalikud vahendid ellujäämiseks.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        projektihalduse alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames omandasin teadmised projektijuhtimisest. Läbisin kursuse jooksul projekti eesmärgi, tegevuskava, skoobi ja projektijuhtimise meetodi teemad. <i>SWOT</i> analüüs. Tutvusin erinevate projektijuhtimise meetoditega ja koostasime meeskonnatööna esitluse ühest projektijuhtimise meetodist. Pidin valima ühe projektihalduse programmi ja tegema selle kohta esitluse.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        graafiline disain & multimeedia toote disain ja tootearendus
      </Typography>
      <p className={classes.sisutekst}>
        Olen lõpetanud Tartu Kunstikooli kujundaja eriala.
        Minu oskusi illustreerib Tartu Kunstikoolis loodud portfoolio, kust võib leida mitmesuguseid töid.<br></br>
         Filmisin ja monteerisin mitmeid erineva lähteülesandega videoid, näiteks muusikale taustavideod, antireklaam ja <i>stop motion</i> õudusfilm. Praktikal tegin firmale nende pakutavaid huvitegevusi tutvustava video. Lisaks telliti minult Kirjanduslinn Tartu jaoks video ja Forseliuse kooli perepäeva video.<br></br>
        Iga kursuse lõpus korraldasid tudengid projekti raames enda näituse. Pidin leidma mentori ja temaga koos valima sobivad tööd. Näitusel esitlesin oma videoid, mõnd maali, ühte kaussi ja tassi. Sain võimaluse kasutada tervet ühte tuba. Viisin sinna teleka, kust näitasin oma videoid. Istumiseks ja vaatamiseks sai kohale toodud tugitool, millele asetasin enda õmmeldud lapiteki. Seinale paigutasin enda tehtud maalid ja aknalauale minu loodud keraamikat.<br></br>
        Iga kursus pidi ise looma ajakirja, alustades ideest ja lõpetades füüsilise tootega. Jagasime kujundajate vahel ülesanded ära. Mina pidin kirjutama artikli välismaal õppimisest. Etteantud kriteeriumite järgi töötlesin foto, paigutasin pealkirjad, kujunduselemendid ja teksti.<br></br>
        Täiesti eraldiseisvaks projektiks on Libutigu. Selle idee autoriteks oleme mina ja mu sõbranna. Erilist eesmärki või tagamõtet Libutigul ei olegi, lihtsalt naljakas asi, mida igal pool kasutada või linnas tänavatele kleepida. Oleme oma kleepsudega osalenud vähemalt neljal näitusel ja kavatseme seda ka kindlasti tulevikus teha.<br></br>
        Portfooliost leiab lisaks minu tehtud tootefotod. Need on kõik tehtud minu enda loodud keraamikast: kausid, tass, viinapits ja seebialus.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        asjaajamise alused
      </Typography>
      <p className={classes.sisutekst}>
        Lähteülesandeks oli luua erialane CV,  praktikakoha taotlemiseks motivatsiooni -ja kaaskiri ning eraldi motivatsioonikiri. Olen kursuse varasemalt läbinud. Koostasime CV, praktikale kandideerimiseks vajalikud dokumendid ja kirjutasime motivatsioonikirja teemal "Kus näen end viie aasta pärast?"
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
        className={`${classes.alampealkiri} h2-header`}
      >
        ettevõtluse alused & majanduse alused
      </Typography>
      <p className={classes.sisutekst}>
        Olen kursuse varemalt läbinud ja kandsin VÕTAga üle. Kasutasime <i>TOY</i> meetodit. Valisime tiimid ja panime paberile kirja 20 erinevat ideed, sealt valisime kolm parimat ja edasi ühe, millega tegeleda. Tegime liftikõne ja erinevaid esitlusi. Kursuse lõpuks saime oma toote valmis. Selleks oli korgipuu.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        karjääriplaneerimise alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse raames viisin end kurssi kooli infosüsteemiga ja õppetöökorraldusega.Tutvusin Tartu Rakendusliku Kolledži infosüsteemi ja koduleheküljega. Töövahendusportaalide info otsimine ja kaardistamine. Pidin leidma erinevaid töökuulutusi ja koostama neist dokumendi.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        suhtlemisõpetus
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisin erinevaid suhtlemise viise ja võtteid. Pidin meeskonnas tegema antireklaami vabalt valitud tootele.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        töökeskkonnaohutus
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisin erinevaid tööohutuse võtteid ja ergonoomilisi töövahendeid. Pidin koostama esitluse võimalikest ergonoomilistest töövahenditest. Õppisin turvaliselt kasutama redelit.
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
        className={`${classes.alampealkiri} h2-header`}
      >
        töötamise õiguslikud alused
      </Typography>
      <p className={classes.sisutekst}>
        Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisin erinevaid autoriõiguseid. Pidin valima ühe teose ja seda muutma nii, et sellega ei tekiks autoriõiguse probleeme.
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
        Arenguportfoolio loomise kursuse raames õpib õpilane oma erialast arengut analüüsima. Koostasime elektroonilise arenguportfoolio põhja, mida iseseisvalt täiendasin õpingute jooksul.
        Enesetutvustus arenguportfoolio jaoks. Sissejuhatus ainesse- rääkisime reeglitest, teemadest ja hindamisest. Vaatasime üle, mis on arenguportfoolio, millel see põhineb ning nägime näiteid mõningatest eelmiste aastate töödest. Tunni raames pidin <i>Google Sites</i> looma arenguportfoolio põhja ja tegema valmis portfoolio struktuuri koos enesetutvustusega. Õppisin käsitlema <i>Google Sites'i</i>, varasem kokkupuude puudus.
      </p>
    </>
  )
}