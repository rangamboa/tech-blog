# Tech Blog (tchblg) ⏫

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

  1. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contribution](#contribution)
  6. [Testing](#testing)
  7. [Questions](#questions)
  8. [Screenshot](#screenshot)
  9. [License](#license)
  
## Description

"tchblg" is a mock-up of a simple tech-oriented blog website. It uses HTML and various javascript packages and engines to display, create and securely store data in the form of user profile info and blog posts.  The page resizes itself dynamically as the screen size changes as a mobile-first site.

## Installation

This project uses HTML and CSS for the front end, Node,js, npm, Express.js and Handlebars.js to handle the scripting, bcrypt for encryption, and Sequelize for data storage and organization. Install them if you do not have them on your local machine. 

## Usage

After installing the required packages above, ``schema.sql`` must be sourced through the MySQL prompt prior to launching the application. Use ``npm run seed`` to then seed the generated database in the command line, then  ``node .\server.js`` to launch this application. I used [Insomnia](https://insomnia.rest/) to visualize, test and troubleshoot API routes.

## Contribution

Feel free to contribute. and please follow the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/):

* Fork the reposition
* Create a new branch (``git checkout -b improve-feature``)
* Make, add and commit the appropriate changes in the files
* Push to the branch (``git push origin improve-feature``)
* Create a Pull Request

Thanks!

## Testing

Testing of code was conducted mostly in the browser. I am currently having a lot of trouble seeding the database to even run tests on it, as well as testing the handlebars files, so not much is displayed at this time. I've been trying to break down, rebuild and walk through the code but it is a laborious process.

## Questions

Please don't hesitate to reach out to me via GitHub or email if you've got any questions! Thank you for checking out my code.

* [GitHub Profile](https://github.com/rangamboa) 

* [Email](mailto:rangamboa@gmail.com)

## Screenshot
![Screenshot of generated HTML page](./assets/screenshot.jpg)
## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
@2021 Ran Gamboa - ``thanks for reading!``