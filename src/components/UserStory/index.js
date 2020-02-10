import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import { createStory } from "../../actions/StoryActions";

const stripValue = value => {
  return Number.isFinite(parseFloat(value));
};
const validate = values => {
  const errors = {};

  const requiredFields = [
    "summary",
    "description",
    "cost",
    "complexity",
    "type",
    "estimatedtime"
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (
    values["cost"] &&
    (values["cost"].match(/^\${0,1}\d+$/) || values["cost"].match(/^\${0,1}\d+\.\d+$/))
  ) {
  } else {
    errors.cost = "Invalid Number";
  }

  if (typeof values.estimatedHrs != "number") {
    errors.estimatedHrs = "Invalid Number";
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
  <div className="MuiFormControl-fullWidth">
    <FormControl error={touched && error}>
      <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
      <Select native {...input} {...custom} inputProps={{}}>
        {children}
      </Select>

      {renderFromHelper({ touched, error })}
    </FormControl>
  </div>
);

const useStyle = makeStyles({
  card: {
    margin: "auto",
    minWidth: 300,
    maxWidth: "50%"
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

const formatAmount = input => {
  if (!input) return "";
  const cleanedInput = input.replace(/,/g, "").replace("$", "");
  const res = "$" + cleanedInput;
  return res;
};

function formUI(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyle();
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div className={classes.card}>
      <Card>
        <CardContent>
          <Typography component="h1" variant="h5">
            Create User Story :
          </Typography>
          <form onSubmit={handleSubmit(values => props.createStory(values))}>
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
                format={formatAmount}
              />
            </div>

            <div>
              <Field
                fullWidth
                name="complexity"
                component={renderSelectField}
                label="Complexity  "
              >
                <option value="" />
                <option value={"Low"}>1. Low</option>
                <option value={"Mid"}>2. Medium</option>
                <option value={"High"}>3. High</option>
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
                <option value={"enhancement"}>Enhancement</option>
                <option value={"bugfix"}>Bugfix</option>
                <option value={"development"}>Development</option>
                <option value={"qa"}>QA</option>
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
    </div>
  );
}


const formComp = reduxForm({
  form: "formUI",
  validate
})(formUI);

export default connect(null, { createStory })(formComp);
