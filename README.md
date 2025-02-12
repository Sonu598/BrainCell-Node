# User Search API

## Overview
This is a simple RESTful API built with Node.js and Express that retrieves user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and provides filtering and sorting capabilities.

## GitHub Backend Link : https://github.com/Sonu598/BrainCell-Node
## Deployed Backend Link : https://braincell-node.onrender.com

## Features
- Fetches user data from an external API.
- Supports filtering users by name (case-insensitive, partial match).
- Supports sorting users by name in ascending or descending order.
- Implements proper error handling for API failures.
- Uses modern JavaScript (ES6+), async/await for asynchronous operations.
- Modular code structure for better readability and maintainability.
- **Bonus Enhancements:**
  - Caches user data in memory for improved performance.
  - Middleware for logging HTTP requests.
  - Unit tests for the `/users` endpoint (optional).

## Installation
### Prerequisites
Ensure you have Node.js (latest LTS recommended) installed on your system.

### Clone the repository:
   ```git clone https://github.com/Sonu598/BrainCell-Node```
## API Endpoints
### GET /users

### Query Parameters
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `name`   | String | Filter users by name (case-insensitive, supports partial match) |
| `sort`   | String | Sort users by name (`asc` or `desc`) |

### Example Requests
```# Fetch all users```
GET /users

```# Fetch users with name containing 'Lea'```
GET /users?name=Lea

```# Fetch users sorted by name in descending order```
GET /users?sort=desc
