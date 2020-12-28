# Adeptus Administratum User Interface

## Project Description

The front-end user interface for the Adeptus Administratum API developed by Karl Matthes.

### What is Adeptus Administratum?

The Adeptus Administratum is the administrative and bureaucratic heart of the Imperium of Man, managing thousands of worlds, billions of soldiers, and trillions of citizens.

## Technologies Used

<ul>
<li>JavaScript</li>
<li>React, React-Router</li>
<li>HTML 5</li>
<li>CSS</li>
</ul>

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
<li>Add and remove garrisons (Note: Garrison cannot be assigned to any planets if deleting)</li>
</ul>
</li>
<li>Search for planets by inhabitant</li>
<li>User login / logout</li>
</ul>

To-do list:

- Add ability to create users - including admin users
- Restrict changing resources to authorized users only

## Getting Started

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

## Contributors

Written by **Andrew Capp** and **Karl Matthes** in conjunction with _Revature_ - December 2020.

## License

This API is available as open source under the terms of the [The MIT License](https://github.com/2011JavaReact/AdeptusAdministratumFrontend/blob/master/LICENSE.md).
