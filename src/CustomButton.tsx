import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import { theme, useStyles } from "./styles";

interface Props {
    children: React.ReactNode
}

const CustomButton: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
        >
            {props.children}
        </Button>
        </ThemeProvider>
    )
}

export default CustomButton