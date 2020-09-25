import React from 'react';
import { Typography } from '@material-ui/core';

import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Hello = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography
                variant="h3"
                component="h2"
                color="textPrimary"
                align="center"
                gutterBottom
            >
                Welcome to Project-Apollo
            </Typography>
        </ThemeProvider>
    );
};

export default Hello;
