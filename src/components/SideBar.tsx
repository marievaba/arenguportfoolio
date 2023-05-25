import React from 'react';
import { Grid } from "@mui/material";
import CustomButton from "../components/CustomButton";

export const SideBar = () => {
  const [compactMenu, setCompactMenu] = React.useState(false);

  const onScroll = (e: Event) => {
    const window = e.currentTarget as Window;
    if (!compactMenu && window.scrollY > 90) {
      setCompactMenu(true);
    }
    if (compactMenu && window.scrollY <= 90) {
      setCompactMenu(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });

  return (
    <Grid className="moodulid-menu" style={{
        position: "fixed",
        top: compactMenu ? 30 : 90,
        left: 0,
        width: 250,
        padding: compactMenu ? "40px 0 0 20px" : "20px 0 0 20px"
    }}>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "veebikujundus"}>
        Veebikujundus
      </CustomButton>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "veebiarendus-ja-veebihaldus"}>
        Veebiarendus ja veebihaldus
      </CustomButton>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "kasutajakogemuse-analüüs"}>
        Kasutajakogemuse analüüs
      </CustomButton>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "psühholoogia-ja-suhtlemine"}>
        Psühholoogia ja suhtlemine
      </CustomButton>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "arvutite-riistvara-ja-võrgud"}>
        Arvutite riistvara ja võrgud
      </CustomButton>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "programmeerimise-alused"}>
        Programmeerimise alused
      </CustomButton>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "projektijuhtimise-alused"}>
        Projektijuhtimise alused
      </CustomButton>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "karjääriplaneerimine-ja-ettevõtlus"}>
        Karjääriplaneerimine ja ettevõtlus
      </CustomButton>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "varasemalt-läbitud-ained"}>
        varasemalt läbitud ained
      </CustomButton>
      <CustomButton fullWidth={true} onClick={() => window.location.hash = "arenguportfoolio-loomine-ja-esitamine"}>
        Arenguportfoolio loomine ja esitamine
      </CustomButton>
    </Grid>
  );
}  