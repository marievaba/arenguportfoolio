import { createTheme } from '@mui/material/styles';
import { makeStyles, Theme } from "@material-ui/core";

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
        paddingBottom: "15px",
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
    sisuResponsive: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        paddingRight: "35px",
        paddingTop: "25px",
        paddingBottom: "25px",
    },
    marginTop: {
        marginTop: "35px",
    },
    typo: {
        alignSelf: "center",
        fontFamily:"'Roboto Mono', monospace",
        fontSize:"1.40rem",
        fontWeight: 700,
    },
    alampealkiri: {
        alignSelf: "center",
        fontFamily:"'Roboto Mono', monospace",
        fontSize:"1.125rem",
        fontWeight: 700,
    },
    typoCenter: {
        alignSelf: "center",
        fontFamily:"'Roboto Mono', monospace",
        fontSize:"1.40rem",
        fontWeight: 700,
        textAlign: "center",
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
        textDecoration: "none",
        boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        '&:hover': {
            backgroundColor: "#F391A1",
            color: "#fff",
            '& .MuiButton-label': {
                '& a': {
                    color: "#fff",
                }
            }
        }
    },
    noUnderline: {
        underline:"none",
        textDecoration:"none",
    },
    link: {
        underline:"none",
        textDecoration:"none",
        color: "#F391A1",
        fontWeight: 700,
        '&:hover': {
            textDecoration: "underline",
        }
    },
    cvLink: {
        textDecoration:"none",
        color: "#000",
    },
    headingCenter: {
        display: "flex",
        justifyContent: "center",
    },
    contentMargin: {
        marginLeft: "35px",
    },
    menuDivider: {
        width:"100%",
        borderBottom:"2px solid black",
        margin: "5px 0px 15px 0px"
    },
    divider: {
        width:"100%",
        borderBottom:"2px solid black",
        margin: "35px",
    },
    shortDivider: {
        width:"100%",
        borderBottom:"2px solid #F391A1",
        marginTop: "25px",
        marginBottom: "25px",
    },
    shortDividerBlack: {
        width:"100%",
        borderBottom:"2px solid #000",
        marginTop: "25px",
        marginBottom: "25px",
    },
    shortDividerLeft: {
        width:"100%",
        borderBottom:"2px solid #F391A1",
        marginTop: "25px",
        marginBottom: "25px",
    },
    boldInside: {
        fontWeight: 500,
    },
    icon: {
        width: "15px",
        height: "15px",
    },
    fullWidth: {
        width: "100%",
    },
    buttonWidth: {
        boxShadow:"none",
        width: "100%",
        marginBottom: "13px",
        '& span': {
            color: "black",
        },
        "& .MuiButton-label": {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textAlign: "left",
            display: "block"
        },
        '&:hover': {
            minWidth:"100%",
            width: "inherit",
            "& .MuiButton-label": {
                color: "#fff",
                textOverflow: "visible",
                whiteSpace: "nowrap",
                overflow: "visible",
                textAlign: "left",
                display: "block"
            },
        }
    },
    menuPadding: {
        paddingLeft: "35px",
        paddingRight: "20px",
        paddingTop:"15px",
    },
    sisuPadding: {
        paddingLeft: "20px",
    },
}));