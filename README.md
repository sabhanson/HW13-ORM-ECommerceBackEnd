# ORM (Object Relational Mapping) E-Commerce Back End [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
I built this E-Commerce Back End application using the [MySQL2](https://www.npmjs.com/package/mysql2), [Sequelize](https://www.npmjs.com/package/sequelize), [dotenv](https://www.npmjs.com/package/dotenv), and [Express](https://www.npmjs.com/package/express) packages to connect to a MySQL database.  
It is especially useful for an E-Commerce company to organize their `Categories` of `Products` and the various `Tags` that their products hold.  
It's quick and easy to follow the API routes to `Create`, `Read`, `Update`, and `Delete` data. 


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Badges](#badges)
- [Questions](#questions)
- [Credits](#credits)

## Installation
      
[Watch this video for a step-by-step demonstration, including installation and usage instructions](https://youtu.be/p00iNzvW3gs)

OR   
- Clone [this repo](https://github.com/sabhanson/HW13-ORM-ECommerceBackEnd) from my Github to your local machine
- Open VSCode and run the following command in the built-in terminal to install the necessary node packages
``` 
npm install
```
- Connect to the MySQL shell by using this command
```
mysql -u root -p
```
- Enter your password when prompted
- Run this command to create the database where data will be stored
```
SOURCE db/schema.sql;
```
- Now, stop the terminal from running MySQL commands by typing
```
quit;
```
- Now, run this command to actually seed the data into the database
```
npm run seed
```
- Now actually start the server.js in the integrated terminal by running the following command
```
node server.js
```
(Alternatively, you can run `nodemon server.js` if you have the [Nodemon package](https://www.npmjs.com/package/nodemon) installed)
- Congrats, you have successfully launched the server and are ready to explore the routes in [Insomnia](https://insomnia.rest/) (or any equivalent API platform/client) ✅

## Usage
Follow the Installation instructions above then use [Insomnia](https://insomnia.rest/) to explore the following routes

### Category Routes
There are five routes to handle various data in the Category model
- GET all Categories (returns all categories in the database)
- GET a Category by ID (returns a single category that matches the requested id)
- POST a new Category (creates a new category, takes in certain parameters)
- PUT to update a Category by ID (updates the specified category, takes in certain parameters)
- DELETE to delete a Category by ID (deletes the specified category from the database)

### Product Routes
There are five routes to handle various data in the Product model
- GET all Products (returns all products in the database)
- GET a Product by ID (returns a single product that matches the requested id)
- POST a new Product (creates a new product, takes in certain parameters)
- PUT to update a Product by ID (updates the specified product, takes in certain parameters)
- DELETE to delete a Product by ID (deletes the specified product from the database)

### Tag Routes
There are five routes to handle various data in the Tag model
- GET all Tags (returns all tags in the database)
- GET a Tag by ID (returns a single tag that matches the requested id)
- POST a new Tag (creates a new tag, takes in certain parameters)
- PUT to update a Tag by ID (updates the specified tag, takes in certain parameters)
- DELETE to delete a Tag by ID (deletes the specified tag from the database)

## License
<p>
MIT License

  Copyright &copy; 2022 
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  </p>

## Contributing
To contribute, please contact me via [Github](https://www.github.com/sabhanson) or [email](mailto:sabhanson7@gmail.com)

## Tests
Testing was all self-done in the terminal.

## Badges

![GitHub followers](https://img.shields.io/github/followers/sabhanson?style=social)

## Questions
Contact me via [Github](https://www.github.com/sabhanson) or [email](mailto:sabhanson7@gmail.com)

## Credits
Thanks to [Isaac Petersen](https://www.github.com/idpetersen) for always being willing to collab and work through problems.
