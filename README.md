# Laravel News API with React Integration

This project demonstrates how to build and connect a **Laravel API** with a **React frontend**. It serves as a teaching tool for students learning to build full-stack applications with RESTful APIs.

## Features

- **Laravel API** for managing news articles.
- CRUD operations: Create, Read, Update, and Delete news.
- **React Frontend** to consume the API.
- Teaches integration of APIs in a React application.
<!-- - Includes authentication using Laravel Sanctum (optional). -->

## Prerequisites

Ensure the following tools are installed on your system:

- [Laravel Installer](https://laravel.com/docs/11.x/installation#installing-php) and it comes with its php and composer
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) | or [bun](https://bun.sh)
- A database (MySQL, SQLite, etc.)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/elnaddar/news-api-laravel-react.git
cd news-api-laravel-react
```

### 2. Set Up Laravel API

1. Navigate to the `news-api` directory:
   ```bash
   cd news-api
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Copy the `.env` file and configure the database:
   ```bash
   cp .env.example .env
   ```

4. Generate an application key:
   ```bash
   php artisan key:generate
   ```

5. Run migrations to set up the database:
   ```bash
   php artisan migrate
   ```
6. Link the storage so you can retrieve the data:
   ```bash
   php artisan storage:link
   ```

7. Seed the database (optional):
   ```bash
   php artisan db:seed NewsSeeder
   ```

8. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

   The API will be accessible at `http://127.0.0.1:8000`.
<!-- 
### 3. Set Up React Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The React app will run at `http://localhost:3000`.

## API Endpoints

Here are the API routes you can test:

| Method | Endpoint           | Description                 |
|--------|--------------------|-----------------------------|
| GET    | `/api/news`        | Fetch all news articles     |
| POST   | `/api/news`        | Create a new article        |
| GET    | `/api/news/{id}`   | Fetch a single article      |
| PUT    | `/api/news/{id}`   | Update an article           |
| DELETE | `/api/news/{id}`   | Delete an article           |

### Example Request

To create a news article:
```json
POST /api/news
Content-Type: application/json

{
  "title": "Breaking News!",
  "content": "This is the content of the news article."
}
```

## React Integration

In the React app, API requests are made using **Axios**. Example usage:

```javascript
import axios from 'axios';

const fetchNews = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/news');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};
```

## Authentication (Optional)

You can integrate **Laravel Sanctum** for API authentication.

1. Install Sanctum:
   ```bash
   composer require laravel/sanctum
   ```

2. Publish the Sanctum configuration:
   ```bash
   php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
   ```

3. Configure middleware and guards in `api.php` and `auth.php`.

4. Use the `/login` and `/logout` routes for authentication. -->

## Learn and Explore

This project is designed to help you learn the following:

- Building REST APIs with Laravel.
- React's **Axios** for API integration.
- State management for data fetched from APIs.
- Best practices for frontend-backend integration.

## Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
