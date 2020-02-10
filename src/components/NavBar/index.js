import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { logout } from "../../actions/AuthActions";
import history from "../../history";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "15px"
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  signout: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: 3,
    width: "100%",
    padding: 2,
    cursor: "pointer"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

function SearchAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Dashboard
          </Typography>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <TypoGraphy
                  color="inherit"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/")}
                >
                  Create Story
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy
                  color="inherit"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/story")}
                >
                  Stories
                </TypoGraphy>
              </ListItemText>
            </ListItem>
          </List>
          <List component="nav">
            <ListItem>
              <ListItemText inset>
                <TypoGraphy
                  color="inherit"
                  className={classes.signout}
                  onClick={props.logout}
                >
                  Sign Out
                </TypoGraphy>
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default connect(null, { logout })(SearchAppBar);
