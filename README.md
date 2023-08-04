# Ecommerce Platform Admin API

This is a beginner-level Node.js and MongoDB-based API for an ecommerce platform admin to manage product inventory.

## Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

## Getting Started

1. Clone this repository to your local machine.
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. The server will be running at `http://localhost:3000`.

## API Endpoints

- POST /products/create
  Request Body: { "name": "laptop", "quantity": 10 }
  Response: { "data": { "product": { "name": "laptop", "quantity": 10 } } }

- GET /products
  Response: { "data": { "products": [ { "id": 1, "name": "laptop", "quantity": 10 }, ... ] } }

- DELETE /products/:id
  Response: { "data": { "message": "Product deleted" } }

- POST /products/:id/update_quantity/?number=10
  Response: { "data": { "product": { "id": 1, "name": "laptop", "quantity": 20 }, "message": "Updated successfully" } }

