[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Find-a-Book

This project was a refactoring of an existing codebase that was using a RESTful API to work with the backend. The goal was to convert the application to use a GraphQL backend. The application itself is a book search application that lets the user search books by title or topic and get the cover images as well as a summary of the books. Once logged in, additional functionality is provided to the user in the form of the ability to save books to a favorites list for future reference.

![screenshot of homepage](https://github.com/cynogriffin/find-a-book/blob/main/client/public/assets/homescreen.png)

This project demonstrates the use of recent tech in the form of GraphQL queries and mutations interacting with a modern React front end for a dynamic and seamless user experience. Unfortunately, my biggest challenge was trying to work out a bunch of bugs from a lot of uncompatable versions of software. Since an older version of some of the technologies were used, not all of it played nicely together, and some of the kinks are currently being worked out still. You can view the fully deployed application here: https://morning-thicket-86430.herokuapp.com/.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)

## Installation

The application is fully deployed on Heroku, so there is no installation needed. Simply access the site through the provided URL in the description above and start searching for your favorite subjects, titles, and authors!

## Usage
##### [Back to Table of Contents](#table-of-contents)

To use the application, you can just search by topic, title, or author and the app should provide you with a list of books with their covers and a short snippet about each one.

![books about tacos from a search](https://github.com/cynogriffin/find-a-book/blob/main/client/public/assets/searched.png)

If you want the additional functionality, you can signup by providing a username,. email address, and password to create and account. After that, additional functionality will open up where you should be able to save books to a favorites list.

![signup page](https://github.com/cynogriffin/find-a-book/blob/main/client/public/assets/signup.png)

If you have an account already, you will just need to login in order to view and modify your favorites.

![login page](https://github.com/cynogriffin/find-a-book/blob/main/client/public/assets/login.png)

## Credits
##### [Back to Table of Contents](#table-of-contents)

For this project, I mainly referenced the documentation for [Node.js](https://nodejs.org/api/) and [Express.js](https://www.npmjs.com/package/express), as well as [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs), [MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.14527991.1982748626.1649572972-932825170.1648508358), [Apollo GraphQL](https://www.apollographql.com/docs/) and [React](https://reactjs.org/docs/getting-started.html).

## Questions
##### [Back to Table of Contents](#table-of-contents)

You can view my other projects on GitHub: [cynogriffin](https://github.com/cynogriffin)

If you have any questions or comments, please feel free to contact me via email at griffinc6@gmail.com.

Connect with me on [LinkedIn](https://www.linkedin.com/in/cody-griffin-0a74b1222/) or my [portfolio site](https://cynogriffin.github.io/cody-griffin-reactport/), and catch me on my develper blog [The Cozy Coding Corner](https://cynogriffin.hashnode.dev/)!

---
Copyright &copy; 2022 Cody Griffin. All rights reserved.

Licensed under the [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).  