# E-Commerce Backend

## ✏️ Description:

With this project I wanted to create a backend database for an e-commerce company. This database features four tables including: Categories, Products, Tags, and Product-Tags. Several of these tables include associations to share relevant data with each other. These tables also include several methods that include Get/Post/Put and Delete, which allows the user to see the data, create new data, update data, and delete data from the tables. This information should be easily accessible through a backend app such as Insomnia, Postman, etc.  


## 📜 License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License. See LICENSE in the repo for more information.


## User Story

* AS A manager at an internet retail company
* I WANT a back end for my e-commerce website that uses the latest technologies
* SO THAT my company can compete with other e-commerce companies


## Acceptance Criteria

* GIVEN a funcitonal Express.js API
* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
* THEN I am able to connect to a database using Sequelize
* WHEN I enter schema and seed commands
* THEN a development database is created and is seeded with test data
* WHEN I enter the command to invoke the application
* THEN my server is started and the Sequelize models are synced to the MySQL database 
* WHEN I open API GET Routes in Insomnia for categories, products or tags
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT and DELETE routes in Insomnia
* THEN I am able to successfully create, update, and delete data in my database


## 🖥️ Technologies Used

* Node.js 
* JavaScript
* MySQL
* Sequelize
* npm (express, sequelize, mysql2)


## ⚙️ Installation & Usage

1. Run 'npm i' on the root file to install dependencies 
2. Open the MySQL shell on the db folder, enter your password, and run 'SOURCE schema.sql;'
3. Ensure you have your .env file in the root of the project as well as in the seeds folder, enter the password and root
4. Open the integrated terminal on the seeds folder, then run 'node index.js'
5. Lastly, open the integrated terminal (or cd a few times) on the server.js file, and run 'npm start' to start the server
6. From there, make your get/post/put/delete requests in Insomnia/Postman etc.


## 📸 Assets

The following video contains a sample walkthrough of this project's functionality and tests:

https://drive.google.com/file/d/1HWLqBkE1tGcNJDGvdgXYsnSnphcO5U6x/view