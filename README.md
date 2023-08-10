# Ecommerce API

This is a MongoDB-based API for an ecommerce platform admin to manage product inventory.

<h3 align="left">Languages and Tools:</h3>
<p align="left">  <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> </p>


## Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

## Hosting site 

- Ecommerce API (https://ecommerceapi-keli.onrender.com/products)


## API Endpoints

- POST:  /products/create
  - Link: Create(https://ecommerceapi-keli.onrender.com/products/create)
  - Request Body: { "name": "laptop", "quantity": 10 }
  - <pre>Response: {
    "data": {
        "product": {
            "quantity": 100,
            "_id": "64d4a0cb3970560034781291",
            "id": 6,
            "name": "GPU",
            "createdAt": "2023-08-10T08:33:15.676Z",
            "updatedAt": "2023-08-10T08:33:15.676Z",
            "__v": 0
        }
    }}</pre>

- GET /products
  - Link: Products(https://ecommerceapi-keli.onrender.com/products)
  - <pre> Response: {
    "data": {
        "products": [
            {
                "quantity": 123,
                "_id": "64cfdb14ff6a9100339a8db1",
                "id": 1,
                "name": "TV",
                "createdAt": "2023-08-06T17:40:36.444Z",
                "updatedAt": "2023-08-06T17:40:36.444Z",
                "__v": 0
            }}</pre>

- DELETE /products/:id
  - Link: Delete Product(https://ecommerceapi-keli.onrender.com/products/:id)
  - <pre> Response: { "data":
     { "message": "Product deleted" }
    }</pre>
    
- POST /products/:id/update_quantity/?number=23
  - Link: Update Quantity(https://ecommerceapi-keli.onrender.com/products/:id/update_quantity?number=23)
  - <pre>Response:  {
      "data": {
          "product": {
              "quantity": 123,
              "_id": "64d4a0cb3970560034781291",
              "id": 6,
              "name": "GPU",
              "createdAt": "2023-08-10T08:33:15.676Z",
              "updatedAt": "2023-08-10T08:36:10.993Z",
              "__v": 0
          }
      },
      "message": "Updated successfully"
      }
    </pre>

## Authors

- [Vijay Ram Soren](https://github.com/vijayram13)
