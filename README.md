---


---

<h1 id="user-story-dashboard">User Story Dashboard</h1>
<p>Since backend API wasn’t entirely configured. I’ve written 2 sets of actions one for API and one to simulate and run application without backend.</p>
<h2 id="main-packages">Main Packages</h2>
<ul>
<li>React Redux</li>
<li>Thunk</li>
<li>Material UI</li>
<li>AXIOS</li>
</ul>
<h2 id="installing-application">Installing Application</h2>
<p>git clone <a href="https://github.com/gtyagi777/AgileDashboard.git">https://github.com/gtyagi777/AgileDashboard.git</a><br>
cd AgileDashboard-master<br>
npm install<br>
npm start<br>
Open <a href="http://localhost:3000">http://localhost:3000</a></p>
<h2 id="demo">DEMO</h2>
<p><a href="https://drive.google.com/open?id=1jH0pWvYfTM3jSU0jXAdPgs1jTP3oJO5h">https://drive.google.com/open?id=1jH0pWvYfTM3jSU0jXAdPgs1jTP3oJO5h</a></p>
<h1 id="component-description">Component Description</h1>
<h2 id="api-configuration">API Configuration</h2>
<h3 id="details">Details</h3>
<ul>
<li>Axios is used for API calls.</li>
<li>A new component is created to manage</li>
<li>the base URL.
<blockquote>
<p>Location : src\api</p>
</blockquote>
</li>
</ul>
<h2 id="login-page">Login Page</h2>
<h3 id="assumptions">Assumptions</h3>
<ul>
<li>Since the API end point for Admin and User is different, I assumed I would get an error message if Admin is selected and credentials used are for the normal user and vice versa.</li>
</ul>
<h3 id="details-1">Details</h3>
<ul>
<li>
<p>UserID and Login Status is stored in local Storage to persist the<br>
values.</p>
</li>
<li>
<p>Three values used to indicate Login state:</p>
<pre><code>   NO_AUTH
   ADMIN
   USER
</code></pre>
</li>
</ul>
<h2 id="creating-user-story">Creating User Story</h2>
<h3 id="assumptions-1">Assumptions</h3>
<ul>
<li>Admin and Normal User, both can create User Story.</li>
</ul>
<h3 id="details-2">Details</h3>
<ul>
<li>Redux-form is used.</li>
<li>Validation implemented :</li>
</ul>
<blockquote>
<p>All fields required<br>
Currency Format</p>
</blockquote>
<h2 id="user-story-list">User Story List</h2>
<h3 id="assumptions-2">Assumptions</h3>
<ul>
<li>Since the stories don’t contain a unique id, I’ve added used a counter to add and id field to each story.</li>
</ul>
<h3 id="details-3">Details</h3>
<ul>
<li>Admin can view all the stories.</li>
<li>Filtered based on created by and user id.</li>
<li>Color coding for stories:</li>
</ul>
<blockquote>
<p>New: Black<br>
Approved: Green<br>
Rejected : Black</p>
</blockquote>
<h2 id="user-story-details">User Story Details</h2>
<h3 id="assumptions-3">Assumptions</h3>
<ul>
<li>Since the stories don’t contain a unique id, I’ve added used a counter to add and id field to each story.</li>
<li>ID generated is used in URL to display the details.</li>
<li>Assuming id is generated on the server side, id is used to update the status of story.</li>
<li>API code is added to update the story status on server.</li>
<li>For demo, “updateStory” action is used that updates the story status locally.</li>
</ul>
<h3 id="details-4">Details</h3>
<ul>
<li>Admin and User can see the details of story,</li>
<li>Only Admin will have access to Approve and button.</li>
</ul>
<h2 id="flow-chart">Flow Chart</h2>
<div class="mermaid"><svg xmlns="http://www.w3.org/2000/svg" id="mermaid-svg-0ns8hwaCUMZkb3Mw" width="100%" style="max-width: 805.8890609741211px;" viewBox="0 0 805.8890609741211 436.515625"><g transform="translate(-12, -12)"><g class="output"><g class="clusters"></g><g class="edgePaths"><g class="edgePath" style="opacity: 1;"><path class="path" d="M116.81472149015308,166.61706600309253L201.3734359741211,104L260.6703109741211,104" marker-end="url(#arrowhead148)" style="fill:none"></path><defs><marker id="arrowhead148" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M123.54957522945092,211.40589428348846L201.3734359741211,246.37890625L260.6703109741211,246.37890625" marker-end="url(#arrowhead149)" style="fill:none"></path><defs><marker id="arrowhead149" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M358.79482647799705,74.5L404.6390609741211,39.5L429.6390609741211,41.44245477722472" marker-end="url(#arrowhead150)" style="fill:none"></path><defs><marker id="arrowhead150" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M358.79482647799705,133.5L404.6390609741211,168.5L455.8890609741211,168.5" marker-end="url(#arrowhead151)" style="fill:none"></path><defs><marker id="arrowhead151" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M345.61767036969917,275.87890625L404.6390609741211,344.2578125L437.5843734741211,344.7578125" marker-end="url(#arrowhead152)" style="fill:none"></path><defs><marker id="arrowhead152" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M601.464838559409,316.1226525852878L662.0453109741211,289.7578125L687.0453109741211,289.7578125" marker-end="url(#arrowhead153)" style="fill:none"></path><defs><marker id="arrowhead153" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M601.464838559409,373.3929724147122L662.0453109741211,398.7578125L692.7328109741211,398.7578125" marker-end="url(#arrowhead154)" style="fill:none"></path><defs><marker id="arrowhead154" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath" style="opacity: 1;"><path class="path" d="M337.65930887186863,216.87890625L404.6390609741211,104L463.67719170806606,79" marker-end="url(#arrowhead155)" style="fill:none"></path><defs><marker id="arrowhead155" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" transform="translate(201.3734359741211,104)" style="opacity: 1;"><g transform="translate(-24.4453125,-19.5)" class="label"><foreignObject width="48.890625" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">User</span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform="translate(201.3734359741211,246.37890625)"><g transform="translate(-34.296875,-19.5)" class="label"><foreignObject width="68.6015625" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel">Admin</span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><foreignObject width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;"><span class="edgeLabel"></span></div></foreignObject></g></g></g><g class="nodes"><g class="node" id="A" transform="translate(81.03828048706055,191.87890625)" style="opacity: 1;"><polygon points="61.038281250000004,0 122.07656250000001,-61.038281250000004 61.038281250000004,-122.07656250000001 0,-61.038281250000004" rx="5" ry="5" transform="translate(-61.038281250000004,61.038281250000004)"></polygon><g class="label" transform="translate(0,0)"><g transform="translate(-28.3203125,-19.5)"><foreignObject width="56.6484375" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Login</div></foreignObject></g></g></g><g class="node" style="opacity: 1;" id="B" transform="translate(320.1546859741211,104)"><rect rx="0" ry="0" x="-59.484375" y="-29.5" width="118.96875" height="59"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-49.484375,-19.5)"><foreignObject width="98.9765625" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Story List</div></foreignObject></g></g></g><g class="node" style="opacity: 1;" id="C" transform="translate(320.1546859741211,246.37890625)"><rect rx="5" ry="5" x="-59.484375" y="-29.5" width="118.96875" height="59"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-49.484375,-19.5)"><foreignObject width="98.9765625" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Story List</div></foreignObject></g></g></g><g class="node" style="opacity: 1;" id="H" transform="translate(533.3421859741211,49.5)"><rect rx="5" ry="5" x="-103.703125" y="-29.5" width="207.40625" height="59"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-93.703125,-19.5)"><foreignObject width="187.40625" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Create New Story</div></foreignObject></g></g></g><g class="node" style="opacity: 1;" id="D" transform="translate(533.3421859741211,168.5)"><rect rx="5" ry="5" x="-77.453125" y="-29.5" width="154.90625" height="59"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-67.453125,-19.5)"><foreignObject width="134.90625" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Story Details</div></foreignObject></g></g></g><g class="node" style="opacity: 1;" id="E" transform="translate(533.3421859741211,344.2578125)"><polygon points="96.2578125,0 192.515625,-96.2578125 96.2578125,-192.515625 0,-96.2578125" rx="5" ry="5" transform="translate(-96.2578125,96.2578125)"></polygon><g class="label" transform="translate(0,0)"><g transform="translate(-67.453125,-19.5)"><foreignObject width="134.90625" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Story Details</div></foreignObject></g></g></g><g class="node" style="opacity: 1;" id="F" transform="translate(748.4671859741211,289.7578125)"><rect rx="5" ry="5" x="-61.421875" y="-29.5" width="122.84375" height="59"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-51.421875,-19.5)"><foreignObject width="102.84375" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Approved</div></foreignObject></g></g></g><g class="node" style="opacity: 1;" id="G" transform="translate(748.4671859741211,398.7578125)"><rect rx="5" ry="5" x="-55.734375" y="-29.5" width="111.46875" height="59"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-45.734375,-19.5)"><foreignObject width="91.4765625" height="39"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; white-space: nowrap;">Rejected</div></foreignObject></g></g></g></g></g></g></svg></div>

