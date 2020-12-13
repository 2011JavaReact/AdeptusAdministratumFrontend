# Adeptus Administratum User Interface

The front end / user interface for the Adeptus Administratum API developed by Karl Matthes.

## What is Adeptus Administratum?

The Adeptus Administratum is the administrative and bureaucratic heart of the Imperium of Man, managing thousands of worlds, billions of soldiers, and trillions of citizens.

## Features

<ul>
<li>Manage Planets
<ul>
<li>View all planets in Administratum</li>
<li>View details of an individual planet</li>
<li>Modify details for a planet</li>
<li>Add and remove planets</li>
</ul>
</li>
<li>Manage Garrisons
<ul>
<li>View all garrisons in Administratum</li>
<li>View details for a garrison</li>
<li>Modify details for a garrison</li>
<li>Add and remove garrisons</li>
</ul>
</li>
<li>Search for planets by inhabitant</li>
<li>User login / logout</li>
</ul>

## Instructions

### User

Hosted on Amazon Web Services S3 static website server.
Access at: http://adeptusadministratum.s3-website-us-west-1.amazonaws.com/

### Developer

Github user interface source files: https://github.com/2011JavaReact/AdeptusAdministratumFrontend

### Installation

```
git clone https://github.com/2011JavaReact/AdeptusAdministratumFrontend

npm install

npm start
```

Github API source files: https://github.com/2011JavaReact/AdeptusAdministratum

Refer to Readme for API features, database details, and installation instructions.

## Technologies

<ul>
<li>JavaScript</li>
<li>React, React-Router</li>
<li>HTML 5</li>
<li>CSS</li>
</ul>

## Project Requirements

- [x] Utilize at least 4 routes from API (not including authentication).

Result: 9+ routes utilized including: GET POST /planets, GET DELETE /planets/:id, /planets/:id/edit, /planets/new, /garrisons, /garrisons/:id, /garrisons/:id/edit, /garrisons/new, /empire (search for inhabitants).

- [x] Successfully query and perform transactions to the DB.

Result: Able to view, add, modify, and delete both planets and garrisons. Also able to search for planets by inhabitants.

- [x] Make minor revisions to the API that you wrote (if applicable).

Result: Only a few small revisions were needed.

- [x] Deploy Servlet application to server on AWS EC2.

Result: Successfully deployed and running on AWS EC2.

- [x] Deploy your frontend to AWS as well.

Result: Successfully deployed and running on AWS S3.

- [x] Create a pipeline using Jenkins that achieves continuous delivery/ continuous deployment (either or).

Result: Jenkins pipeline for continuous deployment successfully implemented and working well. It made updates during the project much easier - especially for the multiple CORS related changes to web.xml.

- [x] Documentation for front end (you can also fix your documentation for your backend if needed).

Result: Utilizing this Readme.md for documentation.

- [x] Login Functionality.

Result: UI has login and logout functionality. Note that API requires username and password for logout.

- [x] Follow basic Scrum/Agile practices/techniques: Sprint Planning Meeting, User Stories, Scrum Board, Standup meetings.

Result: Utilized Scrum Board with detailed Product Backlog and Spring Backlog Items Plan. Product Backlog consists of user stories. Had Sprint Planning Meeting and multiple Daily Scrum Meetings with partner.

- [x] Stretch Goal: Make your app aesthetically pleasing.

Result: Added custom CSS to entire UI.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/2011JavaReact/AdeptusAdministratumFrontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

Written by **Andrew Capp** and **Karl Matthes** in conjunction with _Revature_ - December 2020.

## License

This API is available as open source under the terms of the [The MIT License](https://github.com/2011JavaReact/AdeptusAdministratumFrontend/blob/master/LICENSE.md).

## Code of Conduct

Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/2011JavaReact/AdeptusAdministratumFrontend/blob/master/CODE_OF_CONDUCT.md).
