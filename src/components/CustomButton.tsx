import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import { theme, useStyles } from "../styles";

interface Props {
    children: React.ReactNode
    fullWidth?: boolean
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
}

const CustomButton: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
        <Button
            variant="contained"
            color="primary"
            className= {`${classes.button} ${props.fullWidth ? classes.buttonWidth : ""} ${props.className}`}
            onClick={props.onClick}
            style={props.style}
        >
            {props.children}
        </Button>
        </ThemeProvider>
    )
}

export default CustomButton