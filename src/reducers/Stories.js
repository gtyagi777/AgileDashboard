import { GET_STORY } from "../constants";

const data = [
	{
		"createdBy": 2,
		"status": "approved",
		"summary": "1st story created by 2",
		"description": "dummy desc",
		"type": "enhancement",
		"complexity": "high",
		"estimatedHrs": 1,
    "cost": 100,
    "id" : 1
	},
	{
		"createdBy": 2,
		"status": "new",
		"summary": "2nd story created by 2",
		"description": "dummy desc",
		"type": "enhancement",
		"complexity": "high",
		"estimatedHrs": 1,
		"cost": 100,
    "id" : 2
	},
	{
		"createdBy": 3,
		"status": "rejected",
		"summary": "story created by 3",
		"description": "dummy desc",
		"type": "enhancement",
		"complexity": "high",
		"estimatedHrs": 1,
		"cost": 100,
    "id" : 3
	}
];

export default function storyReducer(
    state = {
      stories : data,
    } ,
    action
  ) {
    switch (action.type) {
     
      case GET_STORY:
        return {
          ...state,
          stories: action.payload,
        };
  
      default:
        return state;
    }
  }