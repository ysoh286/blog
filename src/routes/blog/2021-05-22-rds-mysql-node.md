---
title: 'Connecting up to AWS RDS with MySQL and Node.js'
date: 2021-05-23 20:00:00
---

Recently, I've been looking at RDS and trying to connect up to Node.js.

After spending 3 hours debugging, getting the same error and going round in circles, the solution was just a missing parameter - which pushes me to write about it!

## Problem:

Connecting to an AWS RDS DB instance with Node.js

### What is RDS?

RDS (Relational database service) is Amazon's version of a relational SQL database. AWS takes care of all the hardware and within a few clicks, you can set up a database in the cloud that you can access in minutes. You can choose one of the 6 database engines it supports - MySQL, Aurora, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server.

A more detailed overview with its pros and cons can be found [here](https://sarasanalytics.com/blog/amazon-rds-pros-and-cons) and on the [AWS website](https://aws.amazon.com/rds/).

How do you know if RDS is for you? As always with any AWS tool or service, it all depends on your use case. Sometimes you just need to try it out and see.

## Approach:

We wanted to connect the DB with a Node.js backend to get data out of the database and do transformations in the backend before sending data across (or send it as-is from the database).

**Steps:**

- Create an RDS DB instance in AWS
- Create a connection using MySQL Workbench
- Load some data (in CSV) into the database
- Create and connect up to DB instance through Node.js and run some queries

### Create RDS DB instance in AWS

You can do this through the console - there are a lot of resources for this available. I followed this [tutorial](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html) using the `Easy Create` option, and an Aurora (or a MySQL) engine.

Make sure you have your username and password - you'll need this to establish the connection to your database.
If you forget your password, you can reset it by following the steps written [here](https://aws.amazon.com/premiumsupport/knowledge-center/reset-master-user-password-rds/).

_RDS Console > Databases > select the instance you want to Modify > New Master Password > Apply Immediately_

You can find more details about the database on the Configuration tab. These details will come in handy later on.

To make sure you can access it, check the settings of the security groups and VPC.

### Create a connection using MySQL Workbench

What is MySQL Workbench?

> MySQL Workbench is a unified visual tool for database architects, developers, and DBAs. MySQL Workbench provides data modelling, SQL development, and comprehensive administration tools for server configuration, user administration, backup, and much more. (from MySQL)

In summary, it's a programme that can help you do operations on your database.

It's free and you can download it [here](https://www.mysql.com/products/workbench/). Their interface was easy enough to navigate through, and you can create tables, insert data in and run queries through the GUI.

First, install the programme. Once installed, set up the connection to the DB.
To do this, fill in the details of the hostname, username, password, and port number. All these can be found on the AWS console (remember the Configuration tab?).

Press `Test Connection` to test the connection - if it's all good you're all ready to go.

If it's being denied, check your security and authorization - it might be that you'll need to set up an inbound connection on the security group to allow access as mentioned above.

You can create tables manually through the GUI, or write SQL statements. An example is provided below:

```
CREATE TABLE sales (
 productId varchar(20),
 desc varchar(50),
 volume int,
 date datetime
);
```

### Load some data into the database

This is just one way of loading some data into the database - I had a few CSV files.

Here's the format of the CSV file...

```
"productId","desc","volume","date"
"001","banana","10","2021-04-01"
"002","strawberry","15","2021-05-01"
...
```

All I had to do was run this command and it would load the data in (replace `filepath` with the file path to your file).

```
LOAD DATA LOCAL INFILE `/filepath/sales.csv`
INTO TABLE sales
FILEDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
```

It may take a few seconds depending on how much data you're loading in.
Make sure your DB is connected (or it will complain), and make sure the column names are in the same order as those defined in your table (otherwise, it will assign them in the wrong place). There probably are other more complex SQL statements to control this - so if you're an SQL expert, you'll be savvy enough to figure it out. :)

Another thing is if you are loading local files on your computer, you'll need to add the `OPT_LOCAL_INFILE=1` option to make sure Workbench locally connects to these files.

To do this, go back to the page where you set up the database connections > Manage Server Connections > Connection > Advanced.

Now you've got some data in the database, it's time to connect it up and access some data through Node.js!

### Connecting through Node.js

You can connect to RDS by establishing a MySQL connection through Node.js. To set up, AWS has some [instructions](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-nodejs.rds.html) you can follow.

Below is a snippet from their tutorial which creates the connection and uses the `mysql` package.

You can install this by running `npm install mysql` and using a local `.env` file to store the hostname, username, password, port number and database name.

The `dotenv` package allows you to access environment variables from a local `.env` file. You will need to install this as well to use it via `npm install dotenv`.

Your `.env` file:

```
RDS_HOSTNAME=hostname_of_db
RDS_USERNAME=username
RDS_PASSWORD=password
RDS_PORT=port
RDS_DATABASE_NAME=sys
```

**WARNING:** NEVER EVER EVER COMMIT THIS TO GIT as it contains sensitive information! Remember to check this is in the `.gitignore` file if you are using git or any VCS. There are other secure ways of doing this (such as going through an IAM role).

To be able to query, you'll need to make sure you define the database name as well (otherwise you'll get a database error).

Note if you did not set up a database name (or in the RDS console, the name is `-`), the name is likely to be `sys` or the parent of the tables when you view the database and its attributes in MySQL Workbench.

Node.js file connecting to RDS:

```
const mysql = require("mysql");

require("dotenv").config();

const connection = mysql.createConnection({
 host : process.env.RDS_HOSTNAME,
 user : process.env.RDS_USERNAME,
 password : process.env.RDS_PASSWORD,
 port : process.env.RDS_PORT,
 database : process.env.RDS_DATABASE_NAME,
});

// test connection to database
const testConnection = () => {
 connection.connect((err) => {
 if(err) return console.error("Failed to connect to database.");
 });
 console.log("Success! Connected to database");
};

testConnection();

```

The `testConnection` function should be able to run and if it prints out the success message, it means you've connected!

To query, there are a few gotchas - the `mysql` package will need a few additional tweaks if you need to store your query results in a variable and do further transformations. There's a very good doc about all the different ways and how to handle the [promises here](https://codeburst.io/node-js-mysql-and-async-await-6fb25b01b628) and the explanation behind each one.

I prefer using `await / async` when handling promises. In short, we are changing `connection.query` to return a promise response so we can capture it and do further transformations if needed.

```
const util = require("util");
connection.query = util.promisify(connection.query).bind(connection);

const query = (sql, args) => connection.query(sql, args);

// query for some sales data
const salesQuery = `SELECT * from sales LIMIT 10;`;
const sales = await query(salesQuery);
console.log(`10 items returned from sales`, JSON.stringify(sales));

```

**NOTE:** If you need to pass arguments down to the SQL statement, do prepare them. Do NOT just insert the variables in.

Incorrect / or prone to error (the reason is if `id` is another `SELECT` / `UPDATE` statement, you could end up introducing unintended side effects / running other queries to the database that you do not want happening!):

```
const id = 123;
const salesQuery = `SELECT * from sales
 WHERE id = ${id}; `;

const sales = await query(salesQuery);
```

Recommended (is to pass the arguments through / "prepare" the statement):

```
const id = 123;
const salesQuery = `SELECT * from sales
 WHERE id = ?`;
const sales = await query(salesQuery, [id]);

```

And that's it! Hopefully, you can start accessing your RDS DB through Node.js!

## References / Helpful resources

- [RDS - AWS](https://aws.amazon.com/rds/)
- [Pros and cons of RDS - Sara's Analytics](https://sarasanalytics.com/blog/amazon-rds-pros-and-cons)
- [Creating a MySQL DB instance and connecting to a database on a MySQL DB instance - AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html)
- [Reset RDS master password - AWS](https://aws.amazon.com/premiumsupport/knowledge-center/reset-master-user-password-rds/)
- [MySQL Workbench - MySQL](https://www.mysql.com/products/workbench/)
- [Executing a MySQL query in Node.js - Evert Pot](https://evertpot.com/executing-a-mysql-query-in-nodejs/)
- [Adding an Amazon RDS DB instance to your Node.js application environment - AWS](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-nodejs.rds.html)
- [Node.js, MySQL and async/await - Michal Mecinski](https://codeburst.io/node-js-mysql-and-async-await-6fb25b01b628)
- [Using AWS RDS with Node.js and Express.js tutorial - Stack Abuse](https://stackabuse.com/using-aws-rds-with-node-js-and-express-js/)
