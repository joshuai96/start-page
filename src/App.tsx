import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import testData from "./assets/data.json";
import { IAppData } from "./interfaces/appdata";
import Groups from "./components/grouping/groups";
import { makeStyles } from "tss-react/mui";
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
} from "./modules/nord";
import { useEffect } from "react";

const nord = createTheme({
  palette: {
    mode: "dark",
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
      fontSize: "1.8rem",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const useStyles = makeStyles()(() => ({
  groups: {
    paddingTop: "40px",
  },
}));

function App() {
  const { classes } = useStyles();
  const { meta, data } = testData as IAppData;

  useEffect(() => {
    document.title = meta.title;
  });

  return (
    <ThemeProvider theme={nord}>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography component="h2">{meta.title}</Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.groups} maxWidth="xl">
        <Groups groups={data.groups} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
