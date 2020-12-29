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

## Usage

### Home Page Options

- View list of all planets
- Add a new planet
- View list of all garrisons
- Add a new garrison
- Search empire for a specific inhabitant

![home page](./images/home.png)

### Manage Existing Planets

1. Select Manage Existing Planets from Home screen.
2. Select planet to modify from list of planets.
3. Choose Modify Planet Details to change planet name, inhabitants, population, or garrison.
4. Choose Delete Planet to remove from database.

![modify planet](./images/modify_planet.png)

### Modify Existing Planet

1. Update name, inhabitants, population, or garrison (from drop down).
2. Click on Update.

![update planet](./images/update_planet.png)

### Add a Planet

1. Select "Add Planet" from Home screen.
2. Enter planet name, select inhabitants (or type new inhabitant name), enter population, and select from existing garrison.
3. Click on Submit.

![add planet](./images/add_planet.png)

### Manage Existing Garrisons

1. Select Manage Existing Garrisons from Home screen.
2. Select garrison to modify from list of garrisons.
3. Choose Modify Garrison Details to change garrison name or garrison size.
4. Choose Delete Garrison to remove from database. Note: Garrison must not be assigned to any planets.

![modify garrison](./images/modify_garrison.png)

### Modify Existing Garrison

1. Update name, garrison size.
2. Click on Update.

![update garrison](./images/update_garrison.png)

### Add a Garrison

1. Select "Add Garrison" from Home screen.
2. Enter chapter name and size of garrison.
3. Click on Submit.

![add garrison](./images/add_garrison.png)

### Search for Planets with specific Inhabitants

1. Select "Search Empire" from navigation bar.
2. Enter name of inhabitants to search for.
3. Click on Search.

![search empire](./images/search.png)

## Contributors

Written by **Andrew Capp** and **Karl Matthes** in conjunction with _Revature_ - December 2020.

## License

This API is available as open source under the terms of the [The MIT License](https://github.com/2011JavaReact/AdeptusAdministratumFrontend/blob/master/LICENSE.md).
