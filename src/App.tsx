import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Groups from './components/grouping/groups';
import { makeStyles } from 'tss-react/mui';
import {
    nord0,
    nord1,
    nord10,
    nord11,
    nord13,
    nord14,
    nord3,
    nord4,
    nord5,
    nord6,
    nord8,
    nord9,
} from './modules/nord';
import { useCallback, useEffect, useState } from 'react';
import LocalStorage from './modules/local-storage';
import { init as i18nInit } from './modules/i18n';

const nord = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: nord8,
        },
        secondary: {
            main: nord9,
        },
        background: {
            default: nord1,
            paper: nord0,
        },
        text: {
            primary: nord6,
            secondary: nord5,
            disabled: nord4,
        },
        error: {
            main: nord11,
        },
        warning: {
            main: nord13,
        },
        info: {
            main: nord10,
        },
        success: {
            main: nord14,
        },
        divider: nord3,
    },
    typography: {
        fontSize: 16,
        body1: {
            // fontSize: '1.8rem',
        },
    },
    shape: {
        borderRadius: 8,
    },
});

const useStyles = makeStyles()(() => ({
    groups: {
        paddingTop: '40px',
    },
}));

function App() {
    const localStorage = new LocalStorage();
    i18nInit();

    const { classes } = useStyles();
    const [state, setState] = useState(localStorage.load());

    useEffect(() => {
        document.title = state.meta.title;
    });

    const createGroup = useCallback(
        (name: string, order: number) => {
            const newState = state;
            newState.data.groups.push({
                name: name,
                order: order,
                links: [],
            });
            setState(newState);
        },
        [state, setState],
    );

    return (
        <ThemeProvider theme = { nord }>
            <CssBaseline />

            <AppBar position = "static">
                <Toolbar>
                    <IconButton
                        aria-label = "menu"
                        edge = "start"
                        size = "large"
                        sx = { { mr: 2 } }
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography component = "h2">
                        {state.meta.title}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container
                className = { classes.groups }
                maxWidth = "xl"
            >
                <Groups
                    createGroup = { createGroup }
                    groups = { state.data.groups }
                />
            </Container>
        </ThemeProvider>
    );
}

export default App;
