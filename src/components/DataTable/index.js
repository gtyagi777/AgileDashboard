import React from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { getUserStories, setUserStories } from "../../actions/StoryActions";
import history from "../../history";

const columns = [
  {
    name: "Summary",
    selector: "summary"
  },
  {
    name: "Description",
    selector: "description"
  },
  {
    name: "Type",
    selector: "type"
  },
  {
    name: "Complexity",
    selector: "complexity"
  },
  {
    name: "Estimated Hrs",
    selector: "estimatedHrs"
  },
  {
    name: "Cost",
    selector: "cost"
  },
  {
    name: "Status",
    selector: "status"
  }
];

const conditionalRowStyles = [
  {
    when: row => row.status !== "approved" || row.status !== "rejected",
    style: {
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  {
    when: row => row.status === "approved",
    style: {
      backgroundColor: "green",
      color: "white",
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  {
    when: row => row.status === "rejected",
    style: {
      backgroundColor: "red",
      color: "white",
      "&:hover": {
        cursor: "pointer"
      }
    }
  }
];

class UserStories extends React.Component {
  componentDidMount() {
    // this.props.getUserStories();
    this.props.setUserStories(this.props.data);
  }

  goToStory = row => {
    history.push("/story/" + row.id);
  };

  render() {
    return (
      <DataTable
        title="User Stories"
        columns={columns}
        data={this.props.data}
        pagination
        conditionalRowStyles={conditionalRowStyles}
        onRowClicked={t => this.goToStory(t)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.story.stories
  };
};

export default connect(mapStateToProps, { getUserStories, setUserStories })(
  UserStories
);
