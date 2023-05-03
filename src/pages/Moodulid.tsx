import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import { useStyles } from "../styles";
import { useRef } from "react";

function Moodulid() {
  const classes = useStyles();
  const veebiarendusRef = useRef(null)

  const handleScroll = () => {
    setTimeout(() => {
      // @ts-ignore
      veebiarendusRef.current.scrollIntoView({
        behavior: "smooth"
      })
    }, 500)
  } 
  return (
    <Grid
      container
      sm={12}
      className={classes.menuPadding}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Link className={`${classes.noUnderline}`} to="#veebikujundus">
            <CustomButton fullWidth={true}> Veebikujundus</CustomButton>
          </Link>
          <Link className={classes.noUnderline} onClick={() => handleScroll()} to={{
            pathname: "/moodulid"
          }}>
            <CustomButton fullWidth={true}>  Veebiarendus ja veebihaldus </CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/praktika">
            <CustomButton fullWidth={true}>Kasutajakogemuse analüüs</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/koolitused">
            <CustomButton fullWidth={true}>Psühholoogia ja suhtlemine</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/eneserefleksioon">
            <CustomButton fullWidth={true}>Arvutite riistvara ja võrgud</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/eneserefleksioon">
            <CustomButton fullWidth={true}>Programmeerimise alused</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/eneserefleksioon">
            <CustomButton fullWidth={true}>Projektijuhtimise alused</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/eneserefleksioon">
            <CustomButton fullWidth={true}>varasemalt läbitud ained</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/eneserefleksioon">
            <CustomButton fullWidth={true}>Karjääriplaneerimine ja ettevõtlus</CustomButton>
          </Link>
          <Link className={classes.noUnderline} to="/eneserefleksioon">
            <CustomButton fullWidth={true}>Arenguportfoolio loomine ja esitamine</CustomButton>
          </Link>
        </Grid>
        <Grid item xs={10}>
          <Grid className={classes.sisuPadding}>

            <Typography
              className={classes.typoCenter}
              id="veebikujundus"
            >
              veebikujundus
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
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
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                bootstrap
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised töömaailmas kasutatvatest veebitehnoloogiatest ja kujundusvahenditest.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
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
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                HTML ja CSS
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised töömaailmas kasutatvatest veebitehnoloogiatest ja kujundusvahenditest. Õpime HTML ja CSS abil veebilehe loomist, lähtudes W3C standardist ja kokkulepitud koodistandartitest.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                veebitehnoloogiad ja kujundusvahendid
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames uurime erinevate kujundus- ja prototüüpimisvahendite kohta, viime kurssi end veebikujundus trendidega ja täiendame oma teadmisi erinevate veebitehnoloogiate osas.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                visandi loomine
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised piktogrammidest, ligatuuridest ja monogrammidest.  Samuti räägime Bikablost ja teostame iga teema kohta ülesande.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                struktuurikavand
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised veebirakenduste kujundamisest.Loome high fidelty prototüübi ja õpime pixel perfect designi.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                testimise alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised kasutuskogemuse testi põhimõtetest. Aine jooksul viime läbi testi mõnel enda koostatud prototüübil. Lasin kasutajatel testida enda aasta tegija võistlustööd, tagasiside oli positiivne ja muudatusi sisse ei viinud.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                UI disain
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised visualiseerimise, kompositsiooni ja stiliseerimise kohta.  Ülesande teostamisel kasutame Adobe Illustarorit. Illustaratsioon raamatule.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDividerBlack} ref={veebiarendusRef} />

            <Typography
              className={classes.typoCenter}
            >
              veebiarendus ja veebihaldus
            </Typography>
            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                sissejuhatus tarkvaraarendusse
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised infosüsteemi arendamise etappidest. Kursuse sisuks on infosüsteemi elutsükkel, persoona ja kasutaja lugu, prototüüpimine, andmemudel ning protsessimudel. Lõime persoonasid ja koostasime kasutajalugusid. Panime saadud tulemuste põhjal paberile kirja e-poe nõuded ja koostasime kavandi, edasi tegime Moqups keskkonnas mockupi. Tutvusime andme- ja protsessimudelitega ning koostasime need Gliffy keskkonnas
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                sisuhaldusüsteemid
              </Typography>
              <p className={classes.sisutekst}>
                Õppisin selles aines kasutama WordPressi. Kirjutama postitusi, muutma lehe välimust, looma ja muutma menüüd, kasutama pluginaid ja looma e-poodi. XAMPP veebiserveri paigalduse juhend - Ülesandeks oli luua juhend mille järgi saaks XAMPP lokaalse veebiserveri paigaldada oma arvutisse. Õppisin paigalduse ära. E-poe disainikavand - Ülesandeks oli luua prototüübina kavand enda e-poe jaoks. Tegin mobiilivaatele. Õppisin looma erinevaid vaateid Adobe XD´s. E-pood - Ülesandeks oli luua toimiv e-pood. 10 toodet, igast tootest 2 vaadet. Õppisin kasutama WooCommerce pluginat. Disainitrendide lahendus - Ülesandeks oli valida kaks veebisaiti, millega need tegelevad ja milliseid disainitrende seal kasutatud on. Nägin erinevaid disainitrende ja kuidas neid kasutatud on.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                versioonihaldus
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised versioonihaludsest ning tutvume erinevate keskkondadega. Õpime Githubis repo ja uue branchi loomist ning käsurealt muudatusi Githubi lisama. Pidime võrdlema kahte versioonihalduse programmi. Õppisime kasutama Githubi ja Giti, kasutade vahel liikumist, branchide loomist ja kloonimist. Lisaks õppisime käsurealt toimetama.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                veebihaldus
              </Typography>
              <p className={classes.sisutekst}>
                Loob veebiserveri lähtudes lähteülesande olevatest funktsionaalsetest nõuetest; haldab veebiserverit seadistades haldusvahendeid. Lõime Ubuntu serveri, installisime Apache ja paigaldasime Wordpress'i.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
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
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                IT Õigus
              </Typography>
              <p className={classes.sisutekst}>
                Lähtub kasutajaliidese haldamisel õiguslikest alustest; seostab kasutajate erinevaid juurdepääsuõigusi lepingus sätestatuga; kasutab litsentseerimise põhimõtteid vastavalt õiguslikele alustele. Grupitööna tegime esitluse krüptorahast.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDividerBlack} />

            <Typography
              className={classes.typoCenter}
            >
              kasutajakogemuse analüüs
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                Google Analyticsi kasutamine
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised. Google Analyticsi funktsioonidest ja võimalustest. Analyticsi paigaldamine käsitsi ja Wordpress pistikprogrammide abil. Lõime kampaania jaoks UTM tagidega lingi. Lõime ise kampaania oma e-poe lehele ja jälgisime seda. Pidime välja tooma kolm tähtsamat näitajat, koostama dokumendi ja kirjeldama seal mida need teevad ja milleks kasulikud on. Analüüsisime Google Merchandise Store ja selle edukust viimase kahe kuu jooksul.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                intervjuu koostamine
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised erialasest intervjuu läbiviimisest lähtuvalt ülesandest ning analüüsitakse tulemusi. Kursuse raames koostame ise intervjuu ja viime läbi. Rääkisime kavntitatiivsest ja kvalitatiivsest uurimis meetodist ning intervjuu eesmärkidest. Pidime valima mingi lehe millele analüüs koostada, koostasin küsimused ja valisin inimesed kellega intervjuud läbi viia. Saadud andmed pidin analüüsima ja koostama diagrammi.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                kasutajakogemuse analüüsi alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised kasutajakogemuse analüüsi põhimõtetest. Õpime tundma sihtgruppi ja seda kirjeldama, kasutusmugavuse testi koostamist ja selle läbiviimist ning prototüüpimise aluseid ja prototüübi loomist. Kuulasime loengud erinevatest sihtrühmadest ja pidime leidma ühe reklaami, millel on vale sihtrühm. Valisime reklaamiks Laste Fondi reklaami, pildil oli kujutatud lusikaga laps ja nõudepesukapslid. Kuulasime loengut erinevatest kasutusmugavuse testidest ja viisime ise läbi testi. Olin paaris kursusekaaslasega ja küsisin temalt hinnavaatluse foorumi kasutamise kohta küsimusi, tema küsisi minult Elisa kõnekaartide kohta. Kuulasime loengut prototüüpide loomisest ja tegime koos õpetajaga Figmas e-valimiste programmi kasutajasõbralikumaks.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                A/B testimine
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised testi läbiviimise põhimõtetest ja kasutatavatest vahenditest. Viime iseseisvalt läbi A/B testi lähtuvalt lähteülesandest. Lõime wordpressi lehe ja testisime kahte erinevat lahendust.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDividerBlack} />


            <Typography
              className={classes.typoCenter}
            >
              psühholoogia ja suhtlemine
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                reklaamipsühholoogia
              </Typography>
              <p className={classes.sisutekst}>
                Reklaami mõju ja roll. Mõjustamispsühholoogia võtted reklaamis. Reklaami tajumine: Tähelepanu ja mäluprotsessid. Veebis reklaamide analüüs ja hindamine. veebi mõjutusvahendite Kuidas võiks teha reklaami?: Tarbijakäitumine. Reklaamistrateegiad. Veebis reklaamikampaania kavandamine. Reklaamitegevuse õiguslik ja eetiline regulatsioon Reklaami analüüs, pidime valima ühe reklaami ja koostama selle kohta analüüsi.  Saadud teadmiste põhjal pidime ise looma reklaami.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                suhtlemise alused 2
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised suhtlemise ja kommunikatsiooni olemusest. Teeme selgeks efektiivse kommunikatsiooni mõjutajad, suhtlemises kasutatavad mõjutusvõtted, aktiivse kuulamise ja peegeldamise teemad. Pidime koostama video põhjal analüüsi. Täiendama etteantud dokumenti ja koostama küsimusi.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                suhtlemise psühholoogiline analüüs
              </Typography>
              <p className={classes.sisutekst}>
                Suhtlemiskompetentsus ja selle arendamise võimalused. Suhtlemine kui kommunikatsiooniprotsess. Suhtlemisvormid ja suhtlemisvahendid. Suhtlemistõkked. Kuulamine ja kuulamistehnikad ja -tõkked. Tagasisidestamine. Vaatasime erinevaid videoid ja arutlesime koos nende üle. Milliseid suhtlemise viise, mõjutusvõtteid ja näoilmeid me märkasime. Pidime valima ühe video ja seda kirjalikult analüüsima.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDividerBlack} />


            <Typography
              className={classes.typoCenter}
            >
              arvutite riistvara ja võrgud
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                arvutivõrkude alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursusel viisime end kurssi erinevate arvutivõrkude kasutamise põhimõtetega. Võrgunduse alustega tutvumine ja test, tegime erinevaid võrke, lisasime seadmeid ja ühendasime need omavahel. Kasutasime virtuaalmasinat ja Ciscot.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                infoturbe alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised infoturbe põhimõtetest ja kehtivast seadusandlusest. Lõime linux terminalis kataloogi ja pidime selle kopeerima teise arvutisse. Veel pidime kopeerima asju õpetaja arvutisse, looma txt faili, pingima õpetaja arvutit ja kommenteerima käsurealt.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                IT süsteemide riistvara
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised arvutitest ja nendega seotud seadmetest. Võtsime arvuti ja tegime selle lahti, pidime leidma emaplaadi ja vahetama termopastat. Võtsime serveri ja tegime selle lahti, lisasime RAMi ja ühendasime monitoriga ja vaatasime spetsifikatsioone. Õppisime kasutama projektorit. Pidime internetist leidma kuni 3000 euro väärtuses orienteerumise läbiviimiseks tehnikat.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                operatsioonisüsteemid
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised erinevatest operatsioonsüsteemidest. Windows 10 operatsioonsüsteemi paigaldus. Lõime virtuaalmasina ja paigaldasime sinna Windows10, installisime erinevaid programme ja vaatasime terminali. Linux operatsioonisüsteemi paigaldus. Lõime virtuaalmasina ja paigaldasime sinna Ubuntu, installisime käsurealt erinevaid asju. Mac opertasioonsüsteemi paigaldus. Lõime virtuaalmasina ja paigaldasime sinna MacOS, installisime erinevaid programme ja lisasime kasutajaid
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDividerBlack} />


            <Typography
              className={classes.typoCenter}
            >
              programmeerimise alused
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                erialane matemaatika
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised matemaatilisest loogikast. Õpime positsioonilisi arvusüsteeme, lausearvutust, predikaatarvutust ja tõeväärtustabeli koostamist. Välja mõelda praktilise töö teema, valim, uuritavad tunnused ja küsimused. Viia läbi küsitlus ning selle põhjal koostada analüüsitav andmestik, koostada ja ette kanda esitlus tulemustest.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
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
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                programmeerimise alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised programmeerimise algoritmilistest põhimõtetest. Õpime muutujaid ja andmetüüpe, matemaatilisi operaatoreid, tingimuslauseid ning tsükleid. Loome virtuaalarvuti kooli serveris ja laeme sinna tööks vajalikud programmid. Õppsime JavaScripti põhitõdesid, lõime mitu erinevat programmi.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDividerBlack} />

            <Typography
              className={classes.typoCenter}
            >
              projektijuhtimise alused
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                IT korraldus
              </Typography>
              <p className={classes.sisutekst}>
                Organisatsioon ja IT struktuur. Äriorganisatsiooni ja IT struktuuri vahelised seosed. Organisatsiooni eesmärkide mõistmine, kasutajagrupid ja nende vajadused infosüsteemile. Organisatsiooni veebileht. Selle roll ettevõtte toote/teenuse turundamisel (koostöös ettevõtluse aluste teemaga). Infosüsteemi olulisus organisatsiooni tegevuste toimimisel. Kooli infosüsteemi analüüs Grupitööna pidime analüüsima Tartu Rakendusliku Kolledži infosüsteemi. Koostasime veebilehe analüüsi. Lisaks külastasime ettevõtet ja kirjutasime selle kohta raporti.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                meeskonnatöö alused
              </Typography>
              <p className={classes.sisutekst}>
                Projektiorganisatsiooni struktuur. Meeskonnatöö projektides. Meeskonnatöö kavandamine ja käivitamine ning meeskonnajuhi tegevused. Koostöövormid, nende põhimõtted ja kasutamine meeskonnatöös. Pidime looma meeskonna ja korraldama kursusele tuuri mõnda ettevõttesse, lisaks pidime kogu protsessi dokumenteerima. Kursuse lõpus pidime leidma meeskonna, kellega lähme üksikule saarele. Eelarveks oli 1500 eurot ja selle raha eest pidime leidma internetist vajalikud vahendid ellujäämiseks.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                projektihalduse alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames omandatakse teadmised projektijuhtimisest. Läbime kursuse jooksul projekti eesmärgi, tegevuskava, skoobi ja projektijuhtimise meetodi teemad. SWOT analüüs. Tutvusime erinevate projektijuhtimise meetoditega ja koostasime meeskonnatööna esitluse ühest projektijhtimise meetodist. Pidime valima ühe projektihalduse programmi ja tegema selle kohta esitluse.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>


            <Grid className={classes.shortDividerBlack} />

            <Typography
              className={classes.typoCenter}
            >
              varasemalt läbitud ained
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                graafiline disain & multimeedia toode disain ja tootearendus
              </Typography>
              <p className={classes.sisutekst}>
                Olen lõpetanud Tartu Kunstikooli Kujundaja erialal.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>


            <Grid className={classes.shortDividerBlack} />

            <Typography
              className={classes.typoCenter}
            >
              karjääriplaneerimine ja ettevõtlus
            </Typography>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                asjaajamise alused
              </Typography>
              <p className={classes.sisutekst}>
                Lähteülesandeks oli luua erialane CV,  praktikakoha taotlemiseks motivatsiooni -ja kaaskiri ning eraldi motivatsioonikiri. Olen kursuse varasemalt läbinud. Koostasime CV, praktikale kandideerimikseks vajalikud dokumendid ja kirjutasime motivatsioonikirja teemal "Kus näen end viie aasta pärast?"
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                ettevõtluse alused & majanduse alused
              </Typography>
              <p className={classes.sisutekst}>
                Olen kursuse varemalt läbinud ja kandsin VÕTAga üle. Kasutasime TOY meetodit. Valisime tiimid ja panime paberile kirja 20 erinevat ideed, sealt valisime kolm parimat ja edasi ühe, millega tegeleda. Tegime liftikõne ja erinevaid esitlusi. Kuruse lõpuks saime oma toote valmis. Selleks oli korgipuu.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                karjääriplaneerimise alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse raames viime end kurssi kooli infosüsteemiga ja õppetöökorraldusega. Tartu Rakendusliku Kolledži infosüsteemi ja koduleheküljega tutvumine. Töövahendusportaalide info otsimine ja kaardistamine. Pidime leidma erinevaid töökuulutusi ja koostama neist dokumendi.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                suhtlemisõpetus
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisime erinevaid suhtlemise viise ja võtteid. Pidime meeskonnas tegema antireklaami vabalt valitud tootele.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                töökeskkonnaohutus
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisime erinevaid tööohutuse võtteid ja ergonoomilisi töövahendeid. Pidin koostama esitluse võimalikest örgonoomilistest töövahenditest. Õppisime turvaliselt kasutama redelit.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDivider} />

            <Grid item xs={5}>
              <Typography
                className={classes.alampealkiri}
              >
                töötamise õiguslikud alused
              </Typography>
              <p className={classes.sisutekst}>
                Kursuse olen varasemalt läbinud ja kandsin VÕTAga üle. Õppisime erinevaid autoriõiguseid. Pidime valima ühe teose ja seda muutma nii, et sellega ei tekiks autoriõiguse probleeme.
              </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>

            <Grid className={classes.shortDividerBlack} />

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