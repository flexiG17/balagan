import {createTheme, ThemeProvider} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const LoadingComponent = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#3B285C',
            },
        },
    })

    return(
        <div style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 40}}>
            <ThemeProvider theme={theme}>
                <CircularProgress size={100} />
            </ThemeProvider>
        </div>
    )
}

export default LoadingComponent