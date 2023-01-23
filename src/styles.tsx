import { makeStyles, Theme } from "@material-ui/core";
import shadows from "@material-ui/core/styles/shadows";

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
        };
    }

    interface Palette {
        neutral: Palette['primary'];
    }

    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
    }

    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }
}


export const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#F7B2BD',
        },
        secondary: {
            main: '#64748B',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

export const useStyles = makeStyles<Theme>((theme) => ({
    center: {
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "35px",
        paddingRight: "35px",
        paddingTop: "25px",
        paddingBottom: "25px",
    },
    pilt: {
        width: "40%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        paddingLeft: "85px",
        paddingTop: "25px",
        paddingBottom: "25px",
        alignSelf: "center",
    },
    sisu: {
        width: "40%",
        height: "auto",
        justifyContent: "center",
        paddingRight: "100px",
        paddingTop: "25px",
        paddingBottom: "25px",
    },
    marginTop: {
        marginTop: "65px",
    },
    typo: {
        alignSelf: "center",
        fontFamily:"'Roboto Mono', monospace",
        fontSize:"1.25rem",
        fontWeight: 700,
    },
    image: {
        width:"200px",
        height:"200px",
        borderRadius:"100px",
    },
    sisutekst: {
        fontFamily:'Roboto',
        fontWeight: 400,
        fontSize:"1rem",
        lineHeight: "1.5",
    },
    button: {
        fontFamily:"'Roboto Mono', monospace",
        textTransform: "lowercase",
        borderRadius: "50px",
        background: " #F9C8D0",
        boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        '&:hover': {
            backgroundColor: "#F391A1",
            color: "#fff",
        }
    },
}));