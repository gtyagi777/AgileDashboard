# User Story Dashboard

Since backend API wasn't entirely configured. I've written 2 sets of actions one for API and one to simulate and run application without backend.

## Main Packages 

 - React Redux
 - Thunk
 - Material UI
 - AXIOS
 
## Installing Application

git clone https://github.com/gtyagi777/AgileDashboard.git
cd AgileDashboard-master
npm install
npm start
Open http://localhost:3000

## DEMO
https://drive.google.com/open?id=1jH0pWvYfTM3jSU0jXAdPgs1jTP3oJO5h


# Component Description


## API Configuration
### Details

 - Axios is used for API calls.  
 - A new component is created to manage
 - the base URL.
      >Location : src\api

## Login Page

### Assumptions
 - Since the API end point for Admin and User is different, I assumed I would get an error message if Admin is selected and credentials used are for the normal user and vice versa.
 
### Details
 - UserID and Login Status is stored in local Storage to persist the
   values.
 - Three values used to indicate Login state:

		  NO_AUTH
		  ADMIN
		  USER


## Creating User Story

### Assumptions
 - Admin and Normal User, both can create User Story.

### Details
 - Redux-form is used.
 - Validation implemented :  
 >All fields required 
 > Currency Format


## User Story List

### Assumptions
 - Since the stories don't contain a unique id, I've added used a counter to add and id field to each story.
 
### Details
 - Admin can view all the stories.
 - Filtered based on created by and user id.
 - Color coding for stories:
 >New: Black 
 >Approved: Green
 > Rejected : Black

## User Story Details
### Assumptions
 - Since the stories don't contain a unique id, I've added used a counter to add and id field to each story.
 - ID generated is used in URL to display the details.
 - Assuming id is generated on the server side, id is used to update the status of story.
 - API code is added to update the story status on server.
 - For demo, "updateStory" action is used that updates the story status locally.
 ### Details
 
 - Admin and User can see the details of story,
 - Only Admin will have access to Approve and button.


 
 
## Flow Chart

And this will produce a flow chart:

```mermaid
graph LR
A{Login} -- User --> B[Story List]
A -- Admin --> C(Story List)
B-->H(Create New Story)
B --> D(Story Details)
C --> E{Story Details}
E --> F(Approved)
E--> G(Rejected)
C --> H

