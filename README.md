[![Build Status](https://travis-ci.org/jo-rdan/Free-Mentor.svg?branch=develop)](https://travis-ci.org/jo-rdan/Free-Mentor)
[![Coverage Status](https://coveralls.io/repos/github/jo-rdan/Free-Mentor/badge.svg?branch=develop)](https://coveralls.io/github/jo-rdan/Free-Mentor?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/dd5ec237723b49f4fe07/maintainability)](https://codeclimate.com/github/jo-rdan/Free-Mentor/maintainability)
# Free-Mentor
Free Mentor is a social initiative where accomplished professionals become role models to young people to provide free mentorship sessions

## Features included
* Users can signup 
* Users can sign in
* Users can view all mentors present on the site
* Users can view a specific mentor
* Users can create a mentorship request session
* Users can review and rate a mentor after a mentorship session
* Mentors can reject a mentorship request sent by the user
* Mentors can accept a mentorship request sent by the user
* An admin can change a user to a mentor

### My Pivotal Tracker board
Follow this link to my pivotal tracker board [PT board]( https://www.pivotaltracker.com/projects/2379765)

### UI Template
Follow this link to view all my UI pages [Mentors](https://jo-rdan.github.io/Free-Mentor/UI/)

#### Technologies used for this design
- HTML5
- CSS3
- little to no vanilla javascript(es6)

#### Server side frameworks
- Node Js/Express
#### Linting library
- ESLint
#### Style guide
- Airbnb style
#### Testing framework
- Mocha
#### Source Version Control(SVN) used
Git

#### Tools used for implementing the UI
- Text editor: Visual Studio Code
- Browser: Google chrome
#### Deployment
```
> Heroku
```
## Getting started with the app
Below are the steps you need to take to get you stared with this project, but before let's see our prerequisites

## What you need
You will only need to download [NodeJs](https://nodejs.org/en/download/) and install it on your computer.

## Installation
* Clone this repository to your local compute, you will find the link by clicking `Clone this repository`.
* After, change the working directory by typing this command in your terminal/cmd `cd the_cloned_directory/` 
* Then type `npm i` to install all the required dependencies in the package.json.

### The following commands will help you with basic setup
#### Installing packages
```
> npm i
```
#### Start the server
At this point, you can start the server and ensure you are still in that working directory
```
> npm run dev-start
```
#### Run the the tests
```
> npm test
```
### API Endpoints used
| Requests | Methods  | Description  |
| ------- | --- | --- |
| /api/v2/auth/signup | POST | User can sign up |
| /api/v2/auth/signin | POST | User can sign in  |
| /api/v2/user/:id | PATCH | Admin can change user to mentor |
| /api/v2/mentors | GET | Get all mentors |
| /api/v2/mentor/:mentorId | GET | get specific mentor |
| /api/v2/sessions | POST | create mentorship session requests with mentor |
| /api/v2/sessions/:id/accept | PATCH | mentor can accept a session request|
| /api/v2/sessions/:id/reject | PATCH | mentor can reject a session request|

# Author
Jordan Kayinamura <jordankayinamura@gmail.com>.
Copyright (c) Jordan Kayinamura, 2019

