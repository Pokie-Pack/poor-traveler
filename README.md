# Poor-Traveler

# Drew Gillespie, Alex/Raul Garcia, Shane Le, Son Le, Sareybodd (Rey) Chhorn

## Description

Motivation for this project was to provide a clear, easy-to-use, vacation package website which would allow the user to find somewhere to vacation with only just a few clicks!
We built this project so those who may not know where to find a warm or chilly specified destination would be able to find some highly recommended locations to visit with transportation and activities laid out!
The problem that this project solves is the potential tedious gesture of trying to find where to vacation when you don't have a definite place in mind already and may need help getting started.
We learned how to use React for the front-end, get more familiar with implementing models, components, and sql!

## Table of Contents

- [Links](#links)
- [UserStory](#userStory)
- [Usage](#usage)
- [Credits](#credits)
- [Challenges](#challenges)
- [FutureImplementations](#futureimplementations)
- [Features](#features)
- [Test](#test)

## Links for Deployment

If you would like to run the project within your localhost, checkout the GitHub repo!
https://github.com/Pokie-Pack/poor-traveler

Heroku link:
https://safe-plains-05784.herokuapp.com/

# User Story

AS A < budget traveler >
I WANT < to seek out deals >
SO THAT < I can save money and travel without limitations >.

AS A < avid traveler >
I WANT < do a variety of activities >
SO THAT < I get the most out of my vacations >.

AS A < person who wants to go on vacation >
I WANT < find a nice destination to relax/do fun things >
SO THAT < I am taking a break from life >.

## Usage

If not logged in:
User may still go through the travel package survey but it will not allow user to favorite/save the package, only see the options available.
`md ![Home](src/assets/images/project3Home.JPG) `

User will need to sign up before being able to log in!
`md ![SignUp](src/assets/images/project3SignUP.JPG) `

If logged in:
User can save/favorite travel packages after completing the site's survey and check out their favorites on a favorites page.
`md ![LOGIN](src/assets/images/project3LOGIN.JPG) `

When entering site, steps for travel package will show, allowing user to choose of two or more options to progress through the travel package survey. When clicked, button will turn green which indicates that is the User's preference and will be saved into the database (until different within step pages are clicked).
`md ![Btn Submit](src/assets/images/projectBtnSubmit.JPG) `

## Credits

Contributors to this project:

- Alex Garcia https://github.com/AlexG1040
- Sareybodd (Rey) Chhorn https://github.com/LYBLRey
- Son Le https://github.com/Sonlocgiau
- Drew Gillespie https://github.com/drewg07
- Shane Le https://github.com/ShaneLe2121
- John F. Young https://github.com/johnfyoung

Useful links that helped us:

- https://www.npmjs.com/package/react-step-wizard
- https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas

## Successes & Challenges

- Database went well, backend work, and frontend could be better
- Spelling case sensitive, confused the input the code about query to test the database on localhost 3001/graphpl.
- Setting up the typedefs file wasn’t too difficult, just a few changes was needed.
- I think our biggest struggle was in the front end, getting the right wizard to work or getting the right responses from the buttons.
- also at one point, getting the server started was a problem but quickly resolved by the great john young.
- Deploying "final" version on heroku

## Features

(Currently not pushed to main branch/within heroku deployment)

- Favorites tab which will show user the travel packages they favorited so they can refer back to them
- Travel packages list should show location, price, and activities

## Future Implementations

-add the option to actually purchase a travel package with working reservations
-the ability to add reviews, maybe somehow link it through yelp

## Tests

If you git cloned and pulled the project's repo, just make sure to do "npm run seed" THEN "npm run develop" to have it run in your localhost
