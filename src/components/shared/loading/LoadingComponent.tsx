import {createTheme, ThemeProvider} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const LoadingComponent = ({color = '#3B285C'} : {color?: string}) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: color,
            },
        },
    })

    return(
        <div style={{margin: 'auto'}}>
            <ThemeProvider theme={theme}>
                <CircularProgress size={100} />
            </ThemeProvider>
        </div>
    )
}

export default LoadingComponent