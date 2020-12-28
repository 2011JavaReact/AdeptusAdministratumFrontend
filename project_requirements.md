# Adeptus Administratum Project Requirements

## Project Description

The front-end user interface for the Adeptus Administratum API developed by Karl Matthes.

### What is Adeptus Administratum?

The Adeptus Administratum is the administrative and bureaucratic heart of the Imperium of Man, managing thousands of worlds, billions of soldiers, and trillions of citizens.

## Project Requirements

- [x] Utilize at least 4 routes from API (not including authentication).

Result: 9+ routes utilized including: /planets, /planets/:id, /planets/:id/edit, /planets/new, /garrisons, /garrisons/:id, /garrisons/:id/edit, /garrisons/new, /empire (search for inhabitants).

- [x] Successfully query and perform transactions to the DB.

Result: Able to view, add, modify, and delete both planets and garrisons. Also able to search for planets by inhabitants.

- [x] Make minor revisions to the API that you wrote (if applicable).

Result: Only a few small revisions were needed (mainly CORS related).

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

Result: Utilized Scrum Board with detailed Product Backlog and Sprint Backlog Items Plan. Product Backlog consists of user stories. Had Sprint Planning Meeting and multiple Daily Scrum Meetings with partner.

- [x] Stretch Goal: Make your app aesthetically pleasing.

Result: Added custom CSS to entire UI.
