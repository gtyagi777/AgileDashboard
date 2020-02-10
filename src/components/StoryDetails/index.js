import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { updateStory } from "../../actions/StoryActions";
import history from "../../history";
import { Link } from "react-router-dom";
import { ADMIN } from "../../constants";

const useStyles = makeStyles({
  card: {
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  tblStyle: {
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "10px"
  },
  dis: {
    textAlign: "center",
    margin: "10px"
  }
});

function StoryDetails(props) {
  let data = props.data.filter(d => d.id == props.match.params.id)[0];
  const classes = useStyles();

  const onclickButton = (id, status) => {
    props.updateStory(id, status);
    console.log(id, status);
    history.push("/story");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card className={classes.card}>
        {data !== undefined ? (
          <CardContent>
            <Typography variant="h5" align="left" component="h2">
              Story Details:
            </Typography>
            <table>
              <thead>
                <tr>
                  <th className={classes.tblStyle}>Key</th>
                  <th className={classes.tblStyle}>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={classes.tblStyle}>Summary</td>
                  <td className={classes.tblStyle}>{data.summary}</td>
                </tr>
                <tr>
                  <td className={classes.tblStyle}>description</td>
                  <td className={classes.tblStyle}>{data.description}</td>
                </tr>
                <tr>
                  <td className={classes.tblStyle}>type</td>
                  <td className={classes.tblStyle}>{data.type}</td>
                </tr>
                <tr>
                  <td className={classes.tblStyle}>complexity</td>
                  <td className={classes.tblStyle}>{data.complexity}</td>
                </tr>
                <tr>
                  <td className={classes.tblStyle}>estimatedHrs</td>
                  <td className={classes.tblStyle}>{data.estimatedHrs}</td>
                </tr>
                <tr>
                  <td className={classes.tblStyle}>cost</td>
                  <td className={classes.tblStyle}>{data.cost}</td>
                </tr>
                <tr>
                  <td className={classes.tblStyle}>createdBy</td>
                  <td className={classes.tblStyle}>{data.createdBy}</td>
                </tr>
                <tr>
                  <td className={classes.tblStyle}>Status</td>
                  <td className={classes.tblStyle}>{data.status}</td>
                </tr>
              </tbody>
            </table>
            {props.loginStatus === ADMIN ? (
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.dis}
                  onClick={e => onclickButton(data.id, "approved")}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={classes.dis}
                  onClick={e => onclickButton(data.id, "rejected")}
                >
                  Reject
                </Button>
              </CardActions>
            ) : (
              <div></div>
            )}
          </CardContent>
        ) : (
          <div>
            <p>Not Valid Story</p>
            <Link to="/story">Stories</Link>
          </div>
        )}
      </Card>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    data: state.story.stories,
    loginStatus: state.auth.loginStatus
  };
};

export default connect(mapStateToProps, { updateStory })(StoryDetails);
