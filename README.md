Bike Store
A complete web application for managing bike inventory, placing orders, and calculating revenue efficiently. Built using (MongoDB, Express.js, and Node.js), this API simplifies bike store operations with robust backend services and dynamic features.

Features
Order Management

Place orders for bikes.
Tracks quantities and inventory status.
Product Management

Add, update, delete, and view available bikes in inventory.
Automatically updates stock status when orders are placed.
Revenue Calculation

Total revenue calculation using MongoDB aggregation pipelines.
Revenue insights for better business decision-making.


Installation
Follow these steps to set up the project locally:

Prerequisites
Make sure you have the following installed on your system:

Node.js (v16 or higher)
MongoDB (local or cloud-based)
Git


------------------API Endpoints-----------------------

-----Product Endpoints----

Method	Endpoint	Description

GET	/api/products	             Retrieve all bikes

POST	/api/products	             Add a new bike


 --Order Endpoints--------

Method	Endpoint	Description

POST	/api/orders	                  Create a new order

GET	/api/orders/revenue	      Calculate total revenue
