import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./RepayAdmin.css";
import Button from "react-bootstrap/Button";
import { mainListItems, secondaryListItems } from "./listItems";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    height: "100vh",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    marginLeft: "50vh",
  },
  container: {
    position: "fixed",
    paddingTop: 10,
    paddingBottom: 10,
    top: 100,
  },
  paper: {
    backgroundColor: "#FAFBFF",
  },
  fixedHeight: {
    width: 700,
    height: "78vh",
  },
}));

function RepayAdmin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <div>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                  <div className="AppIDs">
                    <div>
                      <h3 className="pyhead">
                        Loan Status
                      </h3>
                      <AssignmentOutlinedIcon className="assignicon" />
                      <input
                        name="pancard"
                        type="text"
                        className="dets"
                        placeholder="Enter Application ID"
                        maxLength="10"
                      ></input>
                      <br></br>
                      <PhoneOutlinedIcon className="phoneicon" />
                      <input
                        name="pancard"
                        type="text"
                        className="dets"
                        placeholder="Enter Phone Number"
                        maxLength="10"
                      ></input><br></br>
                      <AccountBalanceWalletOutlinedIcon className="walleticon" />
                      <input
                        name="pancard"
                        type="text"
                        className="dets"
                        placeholder="Enter Total Amount"
                        maxLength="10"
                      ></input><br></br>
                      <MonetizationOnOutlinedIcon className="moneyicon" />
                      <input
                        name="pancard"
                        type="text"
                        className="dets"
                        placeholder="Left Total Amount"
                        maxLength="10"
                      ></input><br></br>
                      <AccountBalanceOutlinedIcon className="bankicon" />
                      <input
                        name="pancard"
                        type="text"
                        className="dets"
                        placeholder="Monthly Amount"
                        maxLength="10"
                      ></input><br></br>
                      <ArrowForwardOutlinedIcon className="arrowicon" />
                      <Button
                        type="button"
                        className="pybutton"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </div>
  );
}
export default RepayAdmin;
