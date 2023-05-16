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
        fontSize:"1.5rem",
        fontWeight: 700,
    },
    typoCenter: {
        alignSelf: "center",
        fontFamily:"'Roboto Mono', monospace",
        fontSize:"3rem",
        fontWeight: 'bold',
        textAlign: "center",
    },
    image: {
        width:"250px",
        height:"250px",
        borderRadius:"130px",
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
        border:" 2px solid #F17E92",
        background: " #ebebeb",
        textDecoration: "none",
        /* boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff", */
        boxShadow:"none",
        '&:hover': {
            boxShadow:"none",
            backgroundColor: "#F17E92",
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
        color: "#F17E92",
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
        marginTop: "25px",
        marginBottom: "45px",
        borderBottom:"2px dashed #F17E92",
    },
    padding: {
        width:"100%",
        marginTop: "45px",
        marginBottom: "45px",
        borderBottom:"1px dotted #000",
    },
    shortDividerBlack: {
        width:"100%",
        borderBottom:"2px solid #000",
        marginTop: "25px",
        marginBottom: "25px",
    },
    shortDividerLeft: {
        width:"100%",
        borderBottom:"2px solid #F17E92",
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