import { Button, ThemeProvider } from "@material-ui/core";
import React from "react";
import { theme, useStyles } from "./styles";

interface Props {
    children: React.ReactNode
}

const CustomButton: React.FC<Props> = ({
    children
}) => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
        >
            {children}
        </Button>
        </ThemeProvider>
    )
}

export default CustomButton