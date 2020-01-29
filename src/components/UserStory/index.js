import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";

const validate = values => {
  
  const errors = {};
  let regex  = /^[1-9]{0,2}(,{0,1})(\d{2},)*(\d{3})*(?:\.\d{0,2})$/;
  const requiredFields = [
    "summary",
    "description",
    "cost",
    "complexity",
    "type",
    "estimatedtime"
  ];
  console.log(regex.test(values['cost']))

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if(regex.test(values['cost']) ){
    errors['cost'] = "Required Numeric Value";

  }
  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select native {...input} {...custom} inputProps={{}}>
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

const formUI = props => {
  const useStyles = makeStyles({
    card: {
      minWidth: 300
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });

  const cls = useStyles;
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <br />
      <Card className={cls.card}>
        <CardContent>
          <Typography component="h1" variant="h5">
            Create User Story :
          </Typography>
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="summary"
                component={renderTextField}
                label="Summary"
                fullWidth
              />
            </div>
            <div>
              <Field
                name="description"
                fullWidth
                component={renderTextField}
                label="Description"
                multiline
                rowsMax="4"
                margin="normal"
              />
            </div>
            <div>
              <Field
                name="cost"
                fullWidth
                component={renderTextField}
                label="Cost"
              />
            </div>

            <div>
              <Field
                name="complexity"
                component={renderSelectField}
                label="Complexity  "
                fullWidth
              >
                <option value="" />
                <option value={"Low"}>Low</option>
                <option value={"Mid"}>Mid</option>
                <option value={"High"}>High</option>
              </Field>
            </div>

            <div>
              <Field
                name="type"
                component={renderSelectField}
                label="Type"
                fullWidth
              >
                <option value="" />
                <option value={"enhancement"}>enhancement</option>
                <option value={"bugfix"}>bugfix</option>
                <option value={"development"}>development</option>
                <option value={"qa"}>qa</option>
              </Field>
            </div>
            <div>
              <Field
                name="estimatedtime"
                component={renderTextField}
                label="Estimated Time"
                fullWidth
              />
            </div>
            <br />
            <div>
              <button type="submit" disabled={pristine || submitting}>
                Submit
              </button>
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default reduxForm({
  form: "formUI",
  validate
})(formUI);
